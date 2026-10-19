// P12 Lembar E langkah 2
// simpanan.js = urusan localStorage aja, dipindah apa adanya dari js/state.js P11
// (KUNCI, VERSI, simpan, muat, buang -> di sini buang dinamai aturUlang)
// berkas ini gak nyentuh halaman dan gak nyentuh state sama sekali

export const KUNCI = "pabw-p11";   // nama simpanan di localStorage, tetap sama kayak P11
export const VERSI = 1;            // nomor bentuk isi simpanan, naikin kalau bentuknya berubah

// localStorage cuma nerima teks, jadi objek harus lewat JSON dulu
// yang disimpan cuma pilihan tampilan (kategori), bukan data form atau yang pribadi
export function simpan(state) {
    const isi = { versi: VERSI, kategoriAktif: state.kategoriAktif };
    try {
        localStorage.setItem(KUNCI, JSON.stringify(isi));
    } catch {
        // storage penuh atau diblokir, abaikan aja, halaman tetap jalan
    }
}

// buang simpanan, dibungkus try/catch biar kalau storage diblokir halaman tetap jalan
export function aturUlang() {
    try {
        localStorage.removeItem(KUNCI);
    } catch {
        // diblokir, abaikan aja
    }
}

// baca simpanan, null kalau belum pernah disimpan, rusak, atau bentuknya versi lama
export function muat() {
    try {
        const isi = JSON.parse(localStorage.getItem(KUNCI));
        if (isi?.versi !== VERSI) {
            aturUlang();    // bentuk lama (atau belum ada): buang, pakai nilai bawaan
            return null;
        }
        return isi;
    } catch {
        aturUlang();        // isi rusak (bukan JSON yang sah): buang, pakai nilai bawaan
        return null;
    }
}
