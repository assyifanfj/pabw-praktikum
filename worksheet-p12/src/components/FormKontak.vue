<script setup>
import { ref, reactive, computed } from 'vue'

// P12 Lembar D langkah 4, formulir kontak dari P9
// isi form disimpan di ref lokal komponen ini (v-model), gak perlu state bersama
const nama = ref('')
const email = ref('')
const nim = ref('')
const pesan = ref('')

// nunjuk ke elemen kolomnya, dipakai buat fokus ke kolom salah pertama
const kolomNama = ref(null)
const kolomEmail = ref(null)
const kolomNim = ref(null)
const kolomPesan = ref(null)

const isi = { nama, email, nim, pesan }
const kolom = { nama: kolomNama, email: kolomEmail, nim: kolomNim, pesan: kolomPesan }

// aturan tiap kolom, sama kayak dom.js di P11: cara ngecek + pesan kalau salah
const aturan = {
nama: {
    cek: (nilai) => nilai.trim() !== '',
    teksGalat: 'Nama belum diisi. Tulis nama lengkap kamu.',
},
email: {
    cek: (nilai) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nilai.trim()),
    teksGalat: 'Format email belum sesuai, contoh penulisan: nama@email.com.',
},
nim: {
    cek: (nilai) => /^[0-9]{8}$/.test(nilai.trim()),
    teksGalat: 'NIM harus 8 digit angka saja, contoh 25523200.',
},
pesan: {
    cek: (nilai) => nilai.trim() !== '',
    teksGalat: 'Pesan belum diisi, tulis dahulu pesanmu di sini',
},
}
const daftarKolom = Object.keys(aturan)

// pesan galat per kolom, kosong = kolomnya sah
const galat = reactive({ nama: '', email: '', nim: '', pesan: '' })

// cek satu kolom, isi atau kosongin pesannya, balikin true kalau sah
function periksa(kunci, nilai = isi[kunci].value) {
const sah = aturan[kunci].cek(nilai)
galat[kunci] = sah ? '' : aturan[kunci].teksGalat
return sah
}

// tombol kirim ditahan sampai semua kolom sah
const semuaSah = computed(() => daftarKolom.every((k) => aturan[k].cek(isi[k].value)))

// dipanggil pas form dikirim (preventDefault-nya lewat @submit.prevent di template)
function kirim() {
  const hasil = daftarKolom.map((k) => periksa(k))   // semua kolom diperiksa
    if (hasil.includes(false)) {
    kolom[daftarKolom[hasil.indexOf(false)]].value.focus()   // arahin ke kolom salah pertama
    return
    }
console.log('form sah, data:', {
    nama: nama.value.trim(),
    email: email.value.trim(),
    nim: nim.value.trim(),
    pesan: pesan.value.trim(),
    })
nama.value = ''
email.value = ''
nim.value = ''
  pesan.value = ''   // form kosong lagi, tombol kirim otomatis ketahan lagi
}
</script>

<template>
<form action="#" method="post" novalidate @submit.prevent="kirim">
    <fieldset>
        <legend>Data pengirim</legend>

        <p>
        <label for="nama">Nama lengkap</label>
        <input id="nama" ref="kolomNama" v-model="nama" name="nama" type="text"
            autocomplete="name" aria-describedby="nama-galat" required
            :aria-invalid="galat.nama ? 'true' : null"
            @input="periksa('nama', $event.target.value)" @focusout="periksa('nama')">
        <span class="galat" id="nama-galat" aria-live="polite">{{ galat.nama }}</span>
    </p>

    <p>
        <label for="email">Email</label>
        <input id="email" ref="kolomEmail" v-model="email" name="email" type="email"
            autocomplete="email" aria-describedby="email-galat" required
            :aria-invalid="galat.email ? 'true' : null"
            @input="periksa('email', $event.target.value)" @focusout="periksa('email')">
        <span class="galat" id="email-galat" aria-live="polite">{{ galat.email }}</span>
    </p>

    <p>
        <label for="nim">NIM</label>
        <input id="nim" ref="kolomNim" v-model="nim" name="nim" type="text" inputmode="numeric"
            pattern="[0-9]{8}" aria-describedby="nim-bantuan nim-galat" required
            :aria-invalid="galat.nim ? 'true' : null"
            @input="periksa('nim', $event.target.value)" @focusout="periksa('nim')">
        <span id="nim-bantuan">Delapan digit angka, contoh 25523200.</span>
        <span class="galat" id="nim-galat" aria-live="polite">{{ galat.nim }}</span>
    </p>

    <p>
        <label for="pesan">Pesan</label>
        <textarea id="pesan" ref="kolomPesan" v-model="pesan" name="pesan" rows="4"
                aria-describedby="pesan-galat" required
                :aria-invalid="galat.pesan ? 'true' : null"
                @input="periksa('pesan', $event.target.value)" @focusout="periksa('pesan')"></textarea>
        <span class="galat" id="pesan-galat" aria-live="polite">{{ galat.pesan }}</span>
    </p>

        <button type="submit" :disabled="!semuaSah">Kirim</button>
    </fieldset>
</form>
</template>