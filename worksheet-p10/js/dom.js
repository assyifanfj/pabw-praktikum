// P9 Lembar A + B + C + D
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

// satu pendengar di induknya, tombol yang dibuat belakangan tetap kebaca
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

// tampilan awal: semua proyek
render(daftarProyek);

// Lembar D
// aturan tiap kolom: cara ngecek nilainya + pesan kalau salah
const aturan = [
    {
        kolom: kolomNama,
        galat: document.querySelector("#nama-galat"),
        cek: (nilai) => nilai.trim() !== "",
        pesan: "Nama belum diisi. Tulis nama lengkap kamu."
    },
    {
        kolom: kolomEmail,
        galat: document.querySelector("#email-galat"),
        cek: (nilai) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nilai.trim()),
        pesan: "Format email belum sesuai, contoh penulisan: nama@email.com."
    },
    {
        kolom: kolomNim,
        galat: document.querySelector("#nim-galat"),
        cek: (nilai) => /^[0-9]{8}$/.test(nilai.trim()),
        pesan: "NIM harus 8 digit angka saja, contoh 25523200."
    },
    {
        kolom: kolomPesan,
        galat: document.querySelector("#pesan-galat"),
        cek: (nilai) => nilai.trim() !== "",
        pesan: "Pesan belum diisi, tulis dahulu pesanmu di sini"
    }
];

// cek satu kolom, tampilkan atau hapus pesannya, balikin true kalau sah
function periksaKolom(aturanKolom) {
    const sah = aturanKolom.cek(aturanKolom.kolom.value);
    aturanKolom.galat.textContent = sah ? "" : aturanKolom.pesan;
    if (sah) {
        aturanKolom.kolom.removeAttribute("aria-invalid");
    } else {
        aturanKolom.kolom.setAttribute("aria-invalid", "true");
    }
    return sah;
}

// true kalau semua kolom udah pas/sesuai
function semuaSah() {
    return aturan.every((a) => a.cek(a.kolom.value));
}

// tombol kirim ditahan dari awal, baru aktif kalau semua kolom sah
tombolKirim.disabled = !semuaSah();

// pas form dikirim (tetap dijaga walau tombolnya sudah ditahan)
formKontak.addEventListener("submit", (event) => {
    event.preventDefault(); // baris pertama, biar halaman nggak reload
    const hasil = aturan.map((a) => periksaKolom(a)); // semua kolom diperiksa
    const sah = hasil.every(Boolean);
    tombolKirim.disabled = !sah;
    if (!sah) {
        aturan[hasil.indexOf(false)].kolom.focus(); // arahin ke kolom salah pertama
        return;
    }
    console.log("form sah, data:", {
        nama: kolomNama.value.trim(),
        email: kolomEmail.value.trim(),
        nim: kolomNim.value.trim(),
        pesan: kolomPesan.value.trim()
    });
    formKontak.reset();
    tombolKirim.disabled = true; // form kosong lagi, tombol ditahan lagi
});

// pas ngetik di kolom mana pun (satu pendengar di formnya)
formKontak.addEventListener("input", (event) => {
    const aturanKolom = aturan.find((a) => a.kolom === event.target);
    if (!aturanKolom) return;
    periksaKolom(aturanKolom);
    tombolKirim.disabled = !semuaSah(); // tombol ikut keadaan semua kolom
});

// pas pindah dari kolom, supaya kolom kosong yang ditinggal langsung dapat pesan
formKontak.addEventListener("focusout", (event) => {
    const aturanKolom = aturan.find((a) => a.kolom === event.target);
    if (!aturanKolom) return;
    periksaKolom(aturanKolom);
});