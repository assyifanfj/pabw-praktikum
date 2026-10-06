# PABW — Assyifa Nur Fauziyah Jaelani — 25523200

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.

# Praktikum P04 — Design Token untuk Halaman Profil Saya

Starter: `kerangka-profil.html`. Berkas ini sudah lengkap dan sudah lolos
W3C Nu Html Checker serta Lighthouse Accessibility. Jangan mengubah
strukturnya — tampilan diubah dari berkas CSS.

## Isi paket

- `kerangka-profil.html` — salin menjadi `profil.html` ke folder `worksheet-p4/`
- `media/foto-profil.jpg` — gambar contoh; ganti dengan foto Anda sendiri
- `bukti/` — folder kosong untuk tangkapan layar

## Tiga pekerjaan

1. Ganti sembilan penanda `[ISI]` di dalam `profil.html` (Lembar B).
2. **Wajib, dinilai** — tambahkan MINIMAL TIGA bagian baru di dalam `<main>`,
   masing-masing memakai elemen semantik yang berbeda satu sama lain dan belum
   terpakai (Lembar B). Pilihan: `<details>`, galeri `<figure>`, lini masa
   `<ol>`, `<dl>`, `<blockquote>`, `<article>`. Semuanya ikut digayakan memakai
   token yang sama.
3. Buat LIMA berkas gaya di folder `css/`, lalu buka komentar lima baris `<link>`
   di dalam `<head>` — urutannya menentukan hasil akhir:

   | Berkas | Isi | Lembar |
   |---|---|---|
   | `css/tokens.css` | dua lapis token: nilai mentah + peran | D |
   | `css/base.css` | reset ringan, box-sizing, tipografi | E |
   | `css/layout.css` | navbar flex, katalog kartu, footer | F |
   | `css/komponen.css` | gaya form, fokus, isian tidak sah | G |
   | `css/tema.css` | tema gelap dan tombol pengalihnya | H |

## Rencana Arah Visual (Lembar A)

- **Nama / NIM:** Assyifa Nur Fauziyah Jaelani - 25523200
- **Arah Visual:** Cerah, ramah, dan serba soft (ceria, lembut & modern)
- **Kesan yang Dituju:** Tampilan terasa ringan, bersih, dan nyaman dibaca
- **Warna Utama:** `#005689` (Biru Utama) dan `#7CB9E8` (Aksen Biru Muda) disesuaikan dari nuansa foto profil, terinspirasi dari design figma yang dulu pernah saya buat dari projek lomba
- **Warna Netral Terang:** `#E1EDFC` (Latar halaman) dan `#FFFFFF` (Latar kartu)
- **Warna Netral Gelap:** `#1E293B` (Teks utama agar kontrasnya pas dan mudah dibaca)
- **Ukuran Huruf:** Isi `1rem` (16px), Judul (`h2`) `1.5rem` (24px), Judul Utama (`h1`) `2.25rem` (36px)
- **Jarak Dasar:** `1rem` untuk jarak standar dan `1.5rem` untuk pemisah antar bagian
- **Radius & Bayangan:** Radius `0.75rem` (sudut membulat) dan bayangan tipis `0 2px 8px rgba(0, 123, 190, 0.08)`

## Design token halaman profil (Lembar C.4)

- Berkas gaya yang akan dibuat: `tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`
- Warna utama: `#005689`, dipilih karena memberikan kesan profesional, modern.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
| :--- | :--- | :--- |
| `--color-primary` | `#005689` | Tombol, tautan, penanda |
| `--color-fg` | `#1E293B` | Warna teks utama |
| `--color-bg` | `#E1EDFC` | Latar halaman |
| `--color-surface` | `#FFFFFF` | Latar kartu dan panel |
| `--color-border` | `#7CB9E8` | Garis pemisah dan tepi |
| `--radius-md` | `0.75rem` | Sudut membulat kartu & tombol |
| `--space-4` | `1rem` | Jarak standar antar elemen |

Kriteria selesai saya: mengubah `--color-primary` di satu baris `tokens.css` harus mengubah warna tombol, tautan, judul, dan garis fokus di seluruh halaman.

## Catatan penggunaan AI
- Menggunakan bantuan AI untuk diskusi penentuan skala tipografi responsif (rem) dan token warna
- Pada bagian Penjelasan Struktur Tambahan di README dalam tutur bahasa cara menjelaskannya
- Peraturan dalam kontras warna, jarak aslinya apa aja, biar lebih sesuai
- Beberapa bagian bertanya ke AI gimana cara buat template nya (jadi saya dikasih contohnya sama AI nya buat inspirasi aja di beberapa bagian)

## Evaluasi yang dilaporkan

Tulis di README ini, satu paragraf per bagian tambahan: elemen apa, untuk siapa,
dan menjawab apa. Lalu catat hasil evaluasinya (Lembar I.6):

### Penjelasan Struktur Tambahan
Bagian "Kegiatan yang Saya Ikuti" menggunakan elemen semantik `<table>` di dalam `<section>` yang ditujukan bagi dosen maupun recruiter untuk melihat rekam jejak aktivitas perkuliahan saya; struktur tabel ini dipilih untuk menyajikan nama kegiatan, peran, dan kurun waktu secara teratur, jelas, dan mudah dipindai cepat. Bagian Prinsip & Kutipan Favorit menggunakan elemen semantik `<aside>` yang ditujukan bagi calon kolaborator atau pengunjung umum untuk memahami filosofi kerja dan karakter personal saya; elemen ini dipilih karena memuat konten pelengkap yang mendukung gambaran profil tanpa mengganggu alur teks utama. Bagian Karya Saya menggunakan elemen semantik `<section>` dengan `<ul>` yang ditujukan bagi calon klien atau perekrut industri kreatif untuk menilai hasil portofolio nyata saya; elemen ini dipilih agar daftar proyek dapat dikelompokkan secara mandiri, ringkas, dan terstruktur dengan baik.

### Hasil Evaluasi Mandiri (Lembar I)

| Yang dievaluasi | Hasil saya |
| :--- | :--- |
| W3C — Nu Html Checker | 0 Error (seluruh sintaks HTML valid menurut validator W3C) |
| W3C — Struktur | Lolos. Seluruh `id` bersifat unik, hirarki heading runtut (`h1`, `h2`, `h3`), dan tidak ada elemen struktur wajib yang hilang |
| WCAG — Kontras AA | Lolos. Rasio kontras teks pada ketiga bagian baru telah memenuhi standar WCAG AA (≥ 4.5:1) baik di tema terang maupun tema gelap |
| WCAG — Papan Ketik | Lolos. Seluruh elemen interaktif pada bagian baru dapat dijangkau penuh dengan tombol Tab dan indikator fokus selalu terlihat jelas |
| WCAG — Tanpa Warna | Lolos. Konten dan struktur informasi tetap mudah dibaca dan dipahami meskipun disajikan dalam mode monokrom (grayscale) |

## Waktu

90 menit di kelas hanya cukup sampai Lembar D: tiga struktur sudah berdiri,
keputusan token tercatat, dan `tokens.css` sudah memuat kelima berkas gaya.
Lembar E sampai I — base.css, layout, form, tema gelap, dan evaluasi W3C + WCAG —
diselesaikan di luar kelas sampai pukul 23.59 hari yang sama.

## Pengumpulan

Folder `worksheet-p4/` di dalam repositori GitHub Anda sendiri, berisi
`profil.html`, `css/`, `media/`, dan `bukti/`. Sudah di-commit dan di-push
sebelum **pukul 23.59 hari yang sama**. Tidak ada perpanjangan.

## Tambahan yang Saya Lakukan
Tampilannya saya sesuaikan dengan keinginan saya:
- Pada bagian kegiatan yang saya ikuti semester ini, saya buat tabel
- Pada bagian kutipan, karena saya ada kutipan pribadi dan favorit, saya pisah, saya buat kotak pemisahnya supaya lebih bagus dan rapi
- Pada bagian galeri karya, supaya lebih rapi juga saya buat kotak-kotak pemisah
- Pada bagian "Lewati ke konten utama" saya buat baru muncul opsinya kalau klik "Tab" dulu, jadi tersembunyi, biar tampilannya rapi


# Praktikum P08 — JavaScript Modern ES6+: Halaman Profil yang Datanya Bergerak

Folder `worksheet-p8/` melanjutkan halaman profil dari P06 (`profil.html` dan CSS tidak diubah) dengan tambahan `js/app.js`. Isi halaman dipindah menjadi data JavaScript: objek `profil`, array `daftarProyek`, dua fungsi murni (`buatPerkenalan`, `formatKeahlian`), dan olah data dengan `map`, `filter`, `find`. Tiga tangkapan layar Console ada di folder `bukti/`.

## Deklarasi penggunaan AI (Pertemuan 8)

Dibantu AI:
- Mencari tahu bagian mana yang bermasalah saat `git push` ke GitHub sempat gagal
- belajar materinya juga ada yang dibimbing ai buat materi

Dikerjakan sendiri:
- Isi data profil, daftar keahlian, dan daftar proyek, dua fungsi murni, dan pemakaian array methods, Lembar A–F, beserta komentar penjelasan di hampir setiap baris `app.js`
- Menjalankan halaman lewat Live Server, membaca galat di Console, mengambil tangkapan layar, mengisi worksheet, dan seluruh commit