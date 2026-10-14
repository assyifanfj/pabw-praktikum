// P11 Lembar B + C + D
// events.js, semua addEventListener dikumpulin di sini
// isinya cuma nyambungin peristiwa ke fungsi lain, gak nyentuh pemilih halaman langsung
import { pilihKategori, aturUlang } from "./state.js";
import {
    barisFilter, tombolAturUlang, formKontak,
    periksaTarget, perbaruiTombolKirim, kirimForm
} from "./dom.js";

export function pasangPendengar() {
    // satu pendengar di induk filter, tombol yang dibuat belakangan tetap kebaca
    barisFilter.addEventListener("click", (event) => {
        const tombol = event.target.closest("button");
        if (!tombol) return; // klik di luar tombol, abaikan
        pilihKategori(tombol.dataset.kategori); // cuma ngubah state, render dipanggil di dalam fungsinya
    });

    // tombol atur ulang (di luar #filter, jadi gak bentrok sama pendengar filter)
    tombolAturUlang.addEventListener("click", () => {
        aturUlang();
    });

    // pas form dikirim
    formKontak.addEventListener("submit", (event) => {
        event.preventDefault(); // baris pertama, biar halaman nggak reload
        kirimForm();
    });

    // pas ngetik di kolom mana pun
    formKontak.addEventListener("input", (event) => {
        if (!periksaTarget(event.target)) return; // bukan kolom yang dijaga, abaikan
        perbaruiTombolKirim();
    });

    // pas pindah dari kolom, kolom kosong yang ditinggal langsung dapat pesan
    formKontak.addEventListener("focusout", (event) => {
        periksaTarget(event.target);
    });
}