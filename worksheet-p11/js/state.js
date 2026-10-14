// P11 Lembar B
// state.js, satu objek state buat semua keadaan aplikasi + fungsi yang boleh ngubahnya
import { daftarProyek } from "./data.js";

export const state = {
    daftarProyek,              // datanya diambil dari data.js
    kategoriAktif: "semua",    // dulunya pilihanAktif di app.js
};

// fungsi pengubah, yang ngubah state cuma lewat sini
export function pilihKategori(nilai) {
    state.kategoriAktif = nilai;
}
