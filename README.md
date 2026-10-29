# Web Portofolio

Portofolio pribadi berbentuk Single Page Application (SPA) — dibangun dengan React, TypeScript, dan Vite. Seluruh konten situs berbahasa Indonesia.

## Menjalankan Proyek

```bash
npm install     # pasang dependensi
npm run dev     # server pengembangan di http://localhost:5173
npm run build   # verifikasi type-check + build produksi ke folder dist/
npm run preview # pratinjau hasil build produksi di http://localhost:4173
```

## Struktur Proyek

```
src/
├── App.tsx               # Komposisi halaman (urutan section)
├── main.tsx              # Entry point React + pemuatan font
├── styles/
│   ├── tokens.css        # Design token: warna, font, radius, spasi
│   └── global.css        # Reset, utilitas, fokus, reduced-motion
├── data/                 # SEMUA konten situs — edit di sini, bukan di komponen
│   ├── types.ts          # Tipe data bersama
│   ├── navigation.ts     # Daftar link & section
│   ├── profile.ts        # Nama, headline, intro, email, sosial media
│   ├── skills.ts         # Kelompok keahlian
│   ├── projects.ts       # Data proyek (kartu unggulan & biasa)
│   └── education.ts      # Riwayat pendidikan
├── hooks/
│   ├── useActiveSection.ts   # Penanda nav aktif saat scroll
│   └── useRevealOnScroll.ts  # Animasi reveal (menghormati reduced-motion)
└── components/           # Komponen presentasional (CSS Modules)
    ├── Button/  ├── SectionHeading/  ├── SocialLinks/  ├── Navbar/
    ├── HeroSection/  ├── AboutSection/  ├── SkillsSection/
    ├── ProjectsSection/  ├── ProjectCard/  ├── EducationSection/
    ├── ContactSection/  └── Footer/
```

## TODO Konten (Wajib Diganti)

Semua placeholder ditandai teks `[ dalam kurung siku ]` dan komentar `TODO`. Daftar yang perlu Anda isi:

1. `src/data/profile.ts` — nama lengkap, inisial (logo), headline, email, lokasi, URL GitHub/LinkedIn.
2. `src/data/skills.ts` — daftar keahlian nyata per kelompok.
3. `src/data/projects.ts` — masalah, kontribusi, fitur, tangkapan layar (`image`), URL repo & demo untuk proyek SIG Persebaran Kelompok Pembudidaya Ikan Kabupaten Banyumas, serta proyek lain bila ada.
4. `src/data/education.ts` — institusi, program studi, periode, tugas akhir.
5. `index.html` — judul halaman, meta description, Open Graph (`og:url`, `og:image`).
6. `public/` — tambahkan tangkapan layar proyek (format WebP disarankan) ke `public/projects/` dan gambar `og-image.png` (1200×630).

## Deploy ke Vercel

1. Push repositori ini ke GitHub.
2. Impor proyek di [vercel.com](https://vercel.com) — Vercel mendeteksi Vite secara otomatis (build command: `npm run build`, output: `dist`).
3. Tidak perlu konfigurasi tambahan: situs ini satu halaman dengan navigasi anchor, jadi tidak butuh rewrite rule.

> Situs **belum dideploy** — deployment menunggu persetujuan eksplisit.
