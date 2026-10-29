import type { SkillGroup } from './types';

/**
 * TODO (KONTEN ANDA): Ganti daftar keahlian di bawah dengan keahlian yang
 * benar-benar Anda kuasai. Hapus placeholder [ kurung siku ] dan tulis
 * nama teknologi apa adanya, mis. 'JavaScript', 'React', 'MySQL'.
 * Sengaja tidak ada level keahlian — hanya daftar teknologi.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Bahasa Pemrograman',
    icon: 'code',
    items: ['PHP', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'frontend',
    label: 'Frontend Development',
    icon: 'frontend',
    items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Bootstrap', 'Blade', 'Leaflet', 'OpenLayers', 'MapBox GL JS'],
  },
  {
    id: 'backend',
    label: 'Backend Development',
    icon: 'backend',
    items: ['Laravel', 'Database Integration', 'CRUD Operations'],
  },
  {
    id: 'database',
    label: 'Database',
    icon: 'database',
    items: ['MySQL'],
  },
  {
    id: 'tools',
    label: 'Tools & Development Environment',
    icon: 'tools',
    items: ['Git', 'Github', 'VS Code', 'Laragon', 'Postman', 'npm', ],
  },
];
