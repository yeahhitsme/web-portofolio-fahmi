import type { Profile } from './types';

/**
 * TODO (KONTEN ANDA): Ganti seluruh placeholder di file ini dengan data asli.
 * Teks di dalam [ kurung siku ] adalah penanda bagian yang masih perlu diganti.
 */
export const profile: Profile = {
  name: 'Abdul Aziz Fahmi Alauddin',
  // TODO: ganti dengan inisial Anda, mis. 'FS' (dipakai sebagai fallback monogram hero)
  initials: 'FA',
  // TODO: sesuaikan teks logo bila perlu (ditampilkan di navbar & footer)
  logoText: 'Abdul Aziz Fahmi',
  // TODO: GANTI FILE INI — letakkan foto asli Anda di folder public/ dengan
  // nama 'foto-profil.webp' (atau sesuaikan path di bawah). Disarankan:
  // rasio 1:1, minimal 600x600 px, ukuran <= 200 KB (kompres di squoosh.app).
  // Bila properti ini dihapus, hero otomatis kembali menampilkan monogram.
  photo: '/foto-profil.webp',
  // TODO: sesuaikan headline profesional Anda
  headline: 'Lulusan Informatika yang berfokus pada pengembangan web',
  intro:
    'Saya suka membangun aplikasi web yang rapi, cepat, dan mudah dirawat baik dari antarmuka di sisi frontend maupun logika di sisi backend. Saat ini saya sedang mencari kesempatan untuk berkontribusi pada tim pengembangan perangkat lunak yang memecahkan masalah nyata.',
  aboutParagraphs: [
    'Latar belakang saya adalah mahasiswa S1 Informatika dari Universitas Jenderal Soedirman. Dari sanalah ketertarikan saya pada pengembangan perangkat lunak tumbuh, terutama ketika melihat bagaimana sebuah ide bisa diubah menjadi aplikasi yang benar-benar dipakai orang.',
    'Saya menikmati proses memecahkan masalah: memahami kebutuhan, merancang solusi yang sederhana, lalu mengujinya sampai benar-benar andal. Dalam pengembangan web, saya menaruh perhatian pada kode yang bersih, struktur yang rapi, dan pengalaman pengguna yang mulus.',
    'Ke depannya, saya ingin tumbuh menjadi developer yang andal di tim yang profesional dan belajar dari engineer berpengalaman, terbiasa dengan praktik industri seperti version control dan code review, serta berkontribusi pada produk yang bermanfaat bagi banyak orang.',
  ],
  email: 'abdulfahmi598@gmail.com',
  location: 'Purbalingga, Jawa Tengah, Indonesia',
  status: 'Terbuka untuk peluang kerja',
  socials: [
    // TODO: ganti dengan URL asli Anda
    { label: 'GitHub', url: 'https://github.com/yeahhitsme', icon: 'github' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdul-aziz-fahmi-13bb28215',
      icon: 'linkedin',
    },
    { label: 'Email', url: 'mailto:abdulfahmi598@gmail.com', icon: 'mail' },
  ],
};
