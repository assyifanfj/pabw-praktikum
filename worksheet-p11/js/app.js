// P11 Lembar B, D
// app.js, cuma perakit, ngimpor berkas lain terus ngejalanin aplikasinya
import { state, pulihkan, muat } from "./state.js";
import { pasangPendengar } from "./events.js";
import { render, gambarNotisia, pesanNotisia } from "./dom.js";
import { ambilNotisia } from "./api.js"; // P10: lapisan data masuk, gak diubah

// bagian proyek
pasangPendengar();          // pasang semua pendengar peristiwa
pulihkan();                 // baca simpanan (kalau ada), kalau nggak ya nilai bawaan
render(state);              // tampilan awal digambar dari state

// bagian notisia (P10): ambil data dari api.js, hasilnya dioper ke dom.js buat digambar
async function muatNotisia() {
    pesanNotisia("Memuat...");                          // keadaan memuat
    try {
        const daftar = await ambilNotisia();
        gambarNotisia(daftar);                          // berhasil dan kosong sama-sama diurus gambarNotisia
    } catch (galat) {
        pesanNotisia("Gagal memuat data: " + galat.message); // keadaan gagal
    }
}

muatNotisia();

// SEMENTARA: biar state bisa dilihat dari Console
window.state = state;
window.render = render;
window.muat = muat;