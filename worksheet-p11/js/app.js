// P11 Lembar B
// app.js, cuma perakit, ngimpor berkas lain terus ngejalanin aplikasinya
import { state } from "./state.js";
import { pasangPendengar } from "./events.js";
import { render, gambarNotisia, pesanNotisia } from "./dom.js";
import { ambilNotisia } from "./api.js"; // P10: lapisan data masuk, gak diubah

// bagian proyek
pasangPendengar(); // pasang semua pendengar peristiwa
render(state); // tampilan awalnya semua proyek

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