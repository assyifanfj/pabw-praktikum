// P11 Lembar B
// events.js, semua addEventListener dikumpulin di sini
// isinya cuma nyambungin peristiwa ke fungsi lain, gak nyentuh pemilih halaman langsung
import { state, pilihKategori } from "./state.js";
import {
    barisFilter, formKontak,
    render, tandaiTombolAktif,
    periksaTarget, perbaruiTombolKirim, kirimForm
} from "./dom.js";

export function pasangPendengar() {
    // satu pendengar di induk filter, tombol yang dibuat belakangan tetap kebaca
    barisFilter.addEventListener("click", (event) => {
        const tombol = event.target.closest("button");
        if (!tombol) return; // klik di luar tombol, abaiin
        const kategori = tombol.dataset.kategori;
        pilihKategori(kategori); // state diubah lewat fungsi pengubah
        const terpilih = state.daftarProyek.filter(
            (proyek) => kategori === "semua" || proyek.kategori === kategori
        );
        tandaiTombolAktif(tombol);
        render(terpilih);
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
