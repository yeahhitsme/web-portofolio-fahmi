import { useEffect, useState } from 'react';

/**
 * Melacak section yang sedang terlihat di viewport untuk menandai
 * link navigasi yang aktif. Menggunakan IntersectionObserver agar
 * tidak ada listener scroll yang berjalan tiap frame.
 */
export function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      // Zona "aktif" di tengah viewport, menghitung tinggi navbar.
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
