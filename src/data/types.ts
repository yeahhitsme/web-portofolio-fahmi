/** Tipe data bersama untuk seluruh konten situs. Konten dipisah dari presentasi. */

export type SocialIconName = 'github' | 'linkedin' | 'mail';

export interface SocialLink {
  label: string;
  url: string;
  icon: SocialIconName;
}

export interface Profile {
  name: string;
  initials: string;
  /** Teks logo di navbar & footer. */
  logoText: string;
  /** Foto profil (path dari folder public), mis. '/foto-profil.webp'. */
  photo?: string;
  headline: string;
  intro: string;
  aboutParagraphs: string[];
  email: string;
  location: string;
  status: string;
  socials: SocialLink[];
}

export type SkillGroupIcon = 'code' | 'frontend' | 'backend' | 'database' | 'tools';

export interface SkillGroup {
  id: string;
  label: string;
  icon: SkillGroupIcon;
  items: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  /** Dimensi asli gambar, untuk mencegah layout shift. */
  width: number;
  height: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: ProjectImage;
  repoUrl?: string;
  demoUrl?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period?: string;
  /** Tugas akhir / proyek akademik yang relevan. */
  highlight?: string;
}
