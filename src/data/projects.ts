import type { Project } from './types';

/**
 * TODO (KONTEN ANDA): Ganti template di bawah dengan project asli Anda.
 * - 'Project 2' sampai 'Project 6' adalah template — ganti judul & deskripsinya.
 * - Untuk menambah gambar: taruh file di public/projects/ lalu isi properti
 *   image (src, alt, width, height sesuai dimensi asli file).
 * - Untuk menambah tautan: isi repoUrl dan/atau demoUrl — tautan muncul
 *   otomatis di kartu (tanpa tautan, bagian link disembunyikan).
 * - Hapus objek template yang tidak dipakai.
 */
export const projects: Project[] = [
  {
    id: 'sig-persebaran-pbi-banyumas',
    title:
      'Sistem Informasi Geografis Persebaran Kelompok Pembudidaya Ikan Kabupaten Banyumas',
    description:
      'Aplikasi web berbasis GIS untuk memetakan dan memvisualisasikan persebaran kelompok pembudidaya ikan di Kabupaten Banyumas secara interaktif, sekaligus membandingkan performa tiga pustaka pemetaan populer: Leaflet, OpenLayers, dan Mapbox GL JS.',
    image: {
      src: '/projects/project1.webp',
      alt: 'Tampilan peta interaktif Sistem Informasi Geografis Persebaran Kelompok Pembudidaya Ikan Kabupaten Banyumas',
      width: 1918,
      height: 895,
    },
    demoUrl: 'http://web-sig-fahmi.free.nf/',
  },
  {
    id: 'web-kkn',
    title: 'Web KKN - Suka Suka Danaraja',
    description: 'Website yang dibuat untuk menampilkan informasi dari kelompok KKN Desa Danaraja, sekaligus untuk mempublikasi kegiatan KKN serta informasi dari Desa Danaraja itu sendiri',
    image: {
      src: '/projects/project5.webp',
      alt: 'Tampilan halaman beranda Web KKN sukasukadanaraja',
      width: 1918,
      height: 895,
    },
  },
  {
    id: 'web-portofolio-pribadi',
    title: 'Web Portofolio Pribadi',
    description:
      'Website yang menampilkan koleksi proyek dan keahlian yang sudah saya kembangkan selama ini.',
    image: {
      src: '/projects/project6.webp',
      alt: 'Tampilan halaman beranda Web Portofolio Pribadi',
      width: 1918,
      height: 895,
    },
  },
];
