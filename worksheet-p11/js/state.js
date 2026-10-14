// P11 Lembar B + C
// state.js, satu objek state buat semua keadaan aplikasi + fungsi yang boleh ngubahnya
import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

export const state = {
    daftarProyek,              // datanya diambil dari data.js
    kategoriAktif: "semua",    // dulunya pilihanAktif di app.js, terus jadi kelas di tombol
};

// fungsi pengubah, yang ngubah state cuma lewat sini
// habis state berubah, render langsung dipanggil biar tampilan nggak pernah ketinggalan
export function pilihKategori(nilai) {
    state.kategoriAktif = nilai;
    render(state);
}