// P9 Lembar A + B + C
// dom.js ngurusin halaman, datanya diambil dari app.js
import { daftarProyek } from "./app.js";

// bagian daftar proyek
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

// bagian tombol filter (induknya aja)
const barisFilter = document.querySelector("#filter");

// bagian form
const formKontak = document.querySelector("form");
const kolomNama = document.querySelector("#nama");
const kolomEmail = document.querySelector("#email");
const kolomNim = document.querySelector("#nim");
const kolomPesan = document.querySelector("#pesan");
const tombolKirim = document.querySelector("form button[type='submit']");

// cek semuanya ketemu, kalau ada yang null berarti id-nya salah ketik
console.log(wadah, kosong, barisFilter, formKontak);
console.log(kolomNama, kolomEmail, kolomNim, kolomPesan, tombolKirim);
console.log("jumlah proyek dari app.js:", daftarProyek.length); // harus 3

// Lembar B
// bikin satu kartu (li) dari satu proyek
function buatKartu(proyek) {
    const li = document.createElement("li");
    li.className = "kartu";
    li.textContent = proyek.judul; // textContent, jadi isinya dianggap teks, bukan HTML
    return li;
}

// Lembar C
// semua urusan nampilin daftar dikumpulin di sini
function render(daftar) {
    wadah.textContent = ""; // kosongin dulu biar kartu nggak numpuk
    if (daftar.length === 0) { // kalau nggak ada hasil, munculin pesan
        kosong.hidden = false;
        return;
    }
    kosong.hidden = true;
    daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

// kasih tanda di tombol yang lagi dipilih
function tandaiTombolAktif(tombolAktif) {
    document.querySelectorAll("#filter button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return; // klik di luar tombol, abaikan
    const kategori = tombol.dataset.kategori;
    const terpilih = daftarProyek.filter(
        (proyek) => kategori === "semua" || proyek.kategori === kategori
    );
    tandaiTombolAktif(tombol);
    render(terpilih);
});

render(daftarProyek);