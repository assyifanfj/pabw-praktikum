// P11 Lembar B + C + D
// state.js, satu objek state buat semua keadaan aplikasi + fungsi yang boleh ngubahnya
// + simpan/muat ke localStorage
import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

const KUNCI = "pabw-p11";   // nama simpanan di localStorage
const VERSI = 1;            // nomor bentuk isi simpanan, naikin kalau bentuknya berubah

// nilai bawaan, dipakai di kunjungan pertama dan pas diatur ulang
const BAWAAN = { kategoriAktif: "semua" };

export const state = {
    daftarProyek,                            // datanya diambil dari data.js
    kategoriAktif: BAWAAN.kategoriAktif,     // dulunya pilihanAktif di app.js, terus jadi kelas di tombol
};

// localStorage cuma nerima teks, jadi objek harus lewat JSON dulu
// yang disimpan cuma pilihan tampilan (kategori), bukan data form atau yang pribadi
function simpan(state) {
    const isi = { versi: VERSI, kategoriAktif: state.kategoriAktif };
    try {
        localStorage.setItem(KUNCI, JSON.stringify(isi));
    } catch {
        // storage penuh atau diblokir, abaikan aja, halaman tetap jalan
    }
}

// baca simpanan, null kalau belum pernah disimpan atau isinya rusak
export function muat() {
    try {
        return JSON.parse(localStorage.getItem(KUNCI));
    } catch {
        return null; // simpanan rusak, pakai nilai bawaan
    }
}

// cek kategori dari simpanan beneran ada, biar nggak nyangkut di kategori yang nggak ada
function kategoriSah(nilai) {
    return nilai === "semua" || state.daftarProyek.some((proyek) => proyek.kategori === nilai);
}

// dipanggil sekali pas halaman dibuka, sebelum render pertama
export function pulihkan() {
    const isi = muat();
    if (isi === null) return;                // kunjungan pertama, getItem balikin null, pakai nilai bawaan
    if (kategoriSah(isi.kategoriAktif)) {
        state.kategoriAktif = isi.kategoriAktif;
    }
}

// fungsi pengubah, yang ngubah state cuma lewat sini
// urutannya: state berubah, disimpan, baru render
export function pilihKategori(nilai) {
    state.kategoriAktif = nilai;
    simpan(state);
    render(state);
}

// buat tombol atur ulang, hapus simpanan, balik ke nilai bawaan, gambar ulang
export function aturUlang() {
    localStorage.removeItem(KUNCI);
    state.kategoriAktif = BAWAAN.kategoriAktif;
    render(state);
}