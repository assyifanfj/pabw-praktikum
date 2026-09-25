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
- **Arah Visual:** Cerah, ramah, dan serba soft (Ceria, Lembut & Modern)
- **Kesan yang Dituju:** Tampilan terasa ringan, bersih, dan nyaman dibaca
- **Warna Utama:** `#007BBE` (Biru Utama) dan `#7CB9E8` (Aksen Biru Muda) disesuaikan dari nuansa foto profil, terinspirasi dari design figma yang dulu pernah saya buat dari projek lomba
- **Warna Netral Terang:** `#E1EDFC` (Latar halaman) dan `#FFFFFF` (Latar kartu)
- **Warna Netral Gelap:** `#1E293B` (Teks utama agar kontrasnya pas dan mudah dibaca)
- **Ukuran Huruf:** Isi `1rem` (16px), Judul (`h2`) `1.5rem` (24px), Judul Utama (`h1`) `2.25rem` (36px)
- **Jarak Dasar:** `1rem` untuk jarak standar dan `1.5rem` untuk pemisah antar bagian
- **Radius & Bayangan:** Radius `0.75rem` (sudut membulat) dan bayangan tipis `0 2px 8px rgba(0, 123, 190, 0.08)`

## Evaluasi yang dilaporkan

Tulis di README ini, satu paragraf per bagian tambahan: elemen apa, untuk siapa,
dan menjawab apa. Lalu catat hasil evaluasinya (Lembar I.6):

- W3C — Nu Html Checker: jumlah error setelah penambahan (target 0)
- WCAG — kontras AA di tema terang dan gelap
- WCAG — seluruh bagian baru dapat dicapai dengan Tab
- WCAG — tetap dapat dipahami tanpa bantuan warna

## Waktu

90 menit di kelas hanya cukup sampai Lembar D: tiga struktur sudah berdiri,
keputusan token tercatat, dan `tokens.css` sudah memuat kelima berkas gaya.
Lembar E sampai I — base.css, layout, form, tema gelap, dan evaluasi W3C + WCAG —
diselesaikan di luar kelas sampai pukul 23.59 hari yang sama.

## Pengumpulan

Folder `worksheet-p4/` di dalam repositori GitHub Anda sendiri, berisi
`profil.html`, `css/`, `media/`, dan `bukti/`. Sudah di-commit dan di-push
sebelum **pukul 23.59 hari yang sama**. Tidak ada perpanjangan.