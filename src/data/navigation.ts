/** Struktur navigasi satu halaman (SPA berbasis anchor). */

export const NAV_LINKS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang' },
  { id: 'keahlian', label: 'Keahlian' },
  { id: 'proyek', label: 'Project' },
  { id: 'pendidikan', label: 'Pendidikan' },
  { id: 'kontak', label: 'Kontak' },
] as const;

/** Konstanta modul-level agar tidak dibuat ulang setiap render. */
export const SECTION_IDS: string[] = NAV_LINKS.map((link) => link.id);
