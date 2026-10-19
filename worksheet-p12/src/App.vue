<script setup>
import { ref, onMounted, watch } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { ambilNotisia } from './api.js'
import { state } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'

// P12 Lembar D, data identitas yang dikirim ke KepalaProfil lewat props
const identitas = {
  nama: 'Assyifa Nur Fauziyah Jaelani',
  peran: 'Mahasiswa Informatika UII, Awardee Beasiswa OSC, dan memiliki kemampuan di bidang UI/UX serta Copywriting & Media Kreatif.',
}

// bagian notisia (P10), hasil ambilNotisia() disimpan di ref terus digambar lewat v-for
const notisia = ref([])
const pesanNotisia = ref('Memuat...')   // keadaan memuat, nanti diganti sesuai hasil

onMounted(async () => {
  try {
    const daftar = await ambilNotisia()
    notisia.value = daftar
    pesanNotisia.value = daftar.length === 0 ? 'Belum ada notisia' : ''   // kosong atau berhasil
  } catch (galat) {
    pesanNotisia.value = 'Gagal memuat data: ' + galat.message            // keadaan gagal
  }
})

// P12 Lembar E langkah 3, simpanan tersambung lewat dua kait dan satu tombol
// onMounted = baca simpanan satu kali, pas halaman pertama dipasang
onMounted(() => {
  const isi = muat()                                  // VERSI diperiksa di dalam muat()
  if (!isi) return                                    // belum ada simpanan, pakai nilai bawaan
  // cek kategori dari simpanan beneran ada (kategoriSah dari P11), biar gak nyangkut di kategori yang gak ada
  const sah = isi.kategoriAktif === 'semua' ||
    state.daftarProyek.some((proyek) => proyek.kategori === isi.kategoriAktif)
  if (sah) state.kategoriAktif = isi.kategoriAktif    // pulihin pilihan terakhir
})

// watch = nulis simpanan setiap kali state berubah (deep biar isi di dalam objek juga kepantau)
watch(state, (nilai) => simpan(nilai), { deep: true })

// tombol atur ulang dari P11: hapus simpanan, balik ke "semua", tulis ulang nilai bawaan
function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  simpan(state)
}
</script>

<template>
  <a class="lewati" href="#utama">Lewati ke konten utama</a>
  <KepalaProfil :profil="identitas" />

  <main id="utama">
    <div class="isi isi-area">

      <!-- PILIHAN 5: KUTIPAN (sekarang di sidebar kiri) -->
      <aside id="kutipan">
        <h2>Prinsip &amp; Kutipan Favorit</h2>
        <blockquote>
          <p>"The future looks bright and I will keep on shining."</p>
          <cite>— Assyifa</cite>
        </blockquote>
        <blockquote>
          <p>"Success is not in what you have, but who you are."</p>
          <cite>— Bo Bennett</cite>
        </blockquote>
      </aside>

      <div class="konten">
        <section id="tentang">
          <h2>Tentang saya</h2>

          <figure class="foto">
            <!-- ISI 4 — pakai foto Anda sendiri dengan nama berkas yang sama,
            atau biarkan berkas contoh apa adanya. -->
            <img src="/media/Assyifa.webp"
            alt="Foto diri Assyifa Nur Fauziyah Jaelani."
            width="360" height="480" fetchpriority="high">
            <figcaption>Foto profil — Assyifa Nur Fauziyah Jaelani</figcaption>
          </figure>

          <!-- ISI 5 — dua sampai tiga kalimat: asal, minat, dan hal yang
          sedang Anda pelajari. -->
          <p>Saya adalah mahasiswa Informatika Universitas Islam Indonesia dan awardee Online Scholarship Competition (OSC).
            Saya berfokus pada perancangan antarmuka UI/UX yang berorientasi pada kebutuhan pengguna serta pembuatan konten media kreatif (copywriter).
            Saat ini saya aktif memperdalam keterampilan tentang UI/UX, copywriting, serta berbagai hal mengenai perkembangan teknologi dan Informatika (seperti koding, AI, data science, dan lain sebagainya).</p>

          <div class="table-wrap" role="region" aria-label="Tabel kegiatan semester ini" tabindex="0">
            <table>
              <!-- ISI 6 — judul tabel dan isi minimal tiga baris. -->
              <caption>Kegiatan yang saya ikuti semester ini</caption>
              <thead>
                <tr>
                  <th scope="col">Kegiatan</th>
                  <th scope="col">Peran</th>
                  <th scope="col">Waktu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Praktikum PABW</th>
                  <td>Peserta Praktikum</td>
                  <td><time datetime="2026-09">September 2026</time></td>
                </tr>
                <tr>
                  <th scope="row">Tim Visual &amp; Media Kampus UII</th>
                  <td>Foto dan Video Talent &amp; Content Writer</td>
                  <td><time datetime="2026">2026</time></td>
                </tr>
                <tr>
                  <th scope="row">Lomba Gemastik 2026</th>
                  <td>UI/UX Designer</td>
                  <td><time datetime="2026">2026</time></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>


        <section id="karya">
          <h2>Karya saya</h2>
          <TombolFilter />
          <button type="button" id="atur-ulang" class="btn" @click="aturUlangPilihan">Atur ulang pilihan</button>

          <DaftarProyek />
        </section>

        <section id="notisia">
          <h2>Data dari Berkas JSON</h2>
          <div id="daftar-notisia" aria-live="polite">
            <template v-if="pesanNotisia">{{ pesanNotisia }}</template>
            <article v-for="n in notisia" :key="n.id" class="kartu">
              <div class="kartu__isi">
                <h3>{{ n.judul }}</h3>
                <p>{{ n.kategori }} · {{ n.tahun }}</p>
                <p>{{ n.selesai ? 'Selesai' : 'Belum selesai' }}</p>
              </div>
            </article>
          </div>
        </section>

        <!-- PILIHAN 2: GALERI KARYA (Setelah section karya) -->
        <section id="galeri">
          <h2>Galeri Karya</h2>
          <ul class="galeri">
            <li class="kartu-sorotan">
              <figure>
                <img src="/media/ProyekSem1Assyifa.webp"
                alt="Foto Assyifa bersama kelompok mempresentasikan desain antarmuka aplikasi mobile proyek semester 1."
                width="400" height="388" loading="lazy">
                <figcaption>Presentasi Proyek Semester 1 — Desain Antarmuka Aplikasi Mobile</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="/media/ProyekSem2CraftFlowAssyifa.webp"
                alt="Foto Assyifa bersama kelompok menampilkan proyek aplikasi E-Commerce Desktop CraftFlow."
                width="400" height="523" loading="lazy">
                <figcaption>Pameran Proyek Semester 2 — Aplikasi E-Commerce Desktop "CraftFlow"</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="/media/KalaAssyifa.webp"
                alt="Tampilan desain antarmuka aplikasi mobile Kala AI Companion untuk Lomba Gemastik 2026."
                width="400" height="269" loading="lazy">
                <figcaption>Desain UI/UX "Kala" — Aplikasi AI Companion (Gemastik 2026)</figcaption>
              </figure>
            </li>
          </ul>
        </section>

        <!-- PILIHAN 6: SEDANG DIKERJAKAN (Setelah section karya/galeri) -->
        <article id="sedang-dikerjakan">
          <h2>Sedang Dikerjakan &amp; Aktivitas Aktif</h2>

          <h3>Excellent Community UII</h3>
          <p>Mengikuti pelatihan kepemimpinan, seminar akademik, kegiatan orientasi dan sosial sebagai perwakilan penerima beasiswa, serta berbagai seminar pengembangan diri.</p>

          <h3>Marketive UII (Copywriter)</h3>
          <p>Bertugas menyusun skrip yang menarik dan sesuai dengan tujuan konten, serta membuat script yang sesuai dengan ide agar dapat tersampaikan dengan baik sesuai konsep yang telah ditentukan.</p>
        </article>

        <section id="keahlian">
          <h2>Keahlian &amp; Fokus Utama</h2>
          <p>Peminatan informatika dan pengalaman media kreatif yang saya tekuni meliputi:</p>
          <ul>
            <li><strong>UI/UX Design:</strong> Wireframing, prototyping di Figma, serta riset kebutuhan pengguna.</li>
            <li><strong>Media Kreatif &amp; Copywriting:</strong> Perancangan skrip konten, strategi konten media sosial, dan penulisan.</li>
            <li><strong>Pemrograman Web &amp; Desktop:</strong> HTML/CSS, Python, Java, dan Scene Builder.</li>
          </ul>
        </section>

        <aside id="pengalaman">
          <h2>Pengalaman Organisasi, Kepemimpinan &amp; Tim Proyek</h2>
          <p>Aktivitas yang pernah saya jalani:</p>
          <ul>
            <li><strong>Pengurus dan Sekretaris PMR:</strong> Mengelola kegiatan seluruh program kerja, membimbing seluruh anggota, melatih tim lomba, menangani prosedur pertolongan pertama, arsip surat, serta koordinasi internal tim.</li>
            <li><strong>Student Staff Copywriter dan Marketive UII Copywriter:</strong> Content planning, pembuatan script, eksekusi konten, riset tren media sosial, pengembangan ide kreatif, dan kolaborasi tim.</li>
            <li><strong>Talent Visual Kampus:</strong> Berperan sebagai talent video dan kreator konten visual untuk promosi fakultas/universitas.</li>
          </ul>
        </aside>

        <section id="pencapaian">
          <h2>Pencapaian</h2>
          <p>Beberapa pencapaian yang telah diraih:</p>
          <ul>
            <li><strong>Penerima Beasiswa OSC (Online Scholarship Competition):</strong> Beasiswa penuh jenjang sarjana di UII.</li>
            <li><strong>Juara 2 Lomba “Perawatan Keluarga”:</strong> Creaphoria 14 tingkat Provinsi.</li>
            <li><strong>Juara 2 Lomba “Pertolongan Pertama”:</strong> Competition Ex-Residency of Surakarta.</li>
            <li><strong>Juara 2 Kompetisi Video Pendek PMR WIRA:</strong> Diselenggarakan oleh Universitas Muhammadiyah Surakarta.</li>
            <li><strong>Juara 1 P5 Fase F “Rekayasa dan Teknologi”:</strong> Proyek P5 SMA Negeri 1 Kartasura.</li>
            <li><strong>Juara 2 Film Pendek “Traitor” P5 Fase F:</strong> Proyek P5 SMA Negeri 1 Kartasura.</li>
          </ul>
        </section>

        <section id="kontak">
          <h2>Hubungi saya</h2>
          <p>Anda dapat menghubungi saya secara langsung melalui media sosial atau email berikut:</p>

          <ul>
            <li>Email: <a href="mailto:assyifa.nfjaa@gmail.com">assyifa.nfjaa@gmail.com</a></li>
            <li>Instagram: <a href="https://instagram.com/assyifa.nfj" target="_blank" rel="noopener noreferrer">@assyifa.nfj</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/assyifa-nur-f-j-5b503137a" target="_blank" rel="noopener noreferrer">Assyifa Nur Fauziyah Jaelani</a></li>
          </ul>

          <p>Atau isi formulir berikut. Semua kolom bertanda wajib harus diisi.</p>

          <FormKontak />
        </section>
      </div>

    </div>

  </main>

  <footer class="kaki">
    <!-- ISI 9 — nama, NIM, tahun. -->
    <p>Assyifa Nur Fauziyah Jaelani · 25523200 · <time datetime="2026">2026</time></p>
  </footer>
</template>
