// P12 Lembar D langkah 2 (isinya sama kayak E langkah 1)
// dibikin dari sini karena TombolFilter dan DaftarProyek sama-sama butuh state bersama
import { reactive } from 'vue'
import { daftarProyek } from './data.js'

// satu objek state buat semua keadaan, reactive biar tampilan ngikut sendiri
export const state = reactive({
  daftarProyek: daftarProyek,   // datanya dari data.js
  kategoriAktif: 'semua',
})

// satu-satunya pintu buat ngubah kategori
export function pilihKategori(nilai) {
  state.kategoriAktif = nilai   // cuma ngubah state, gak ada render() lagi
}