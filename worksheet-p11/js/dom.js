// P11 Lembar B
// dom.js, semua yang nyentuh halaman ada di sini (pemilih, render, kelas, pesan galat)
// gak ada addEventListener di sini, itu urusan events.js

// bagian daftar proyek
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

// bagian tombol filter (induknya aja), diekspor biar events.js bisa pasang pendengar
export const barisFilter = document.querySelector("#filter");

// bagian form
export const formKontak = document.querySelector("form");
const kolomNama = document.querySelector("#nama");
const kolomEmail = document.querySelector("#email");
const kolomNim = document.querySelector("#nim");
const kolomPesan = document.querySelector("#pesan");
const tombolKirim = document.querySelector("form button[type='submit']");

// bagian notisia (P10)
const wadahNotisia = document.querySelector("#daftar-notisia");

// Lembar B (P9)
// bikin satu kartu (li) dari satu proyek
function buatKartu(proyek) {
    const li = document.createElement("li");
    li.className = "kartu";
    li.textContent = proyek.judul; // textContent, jadi isinya dianggap teks, bukan HTML
    return li;
}

// Lembar C (P11)
// nyaring proyek berdasarkan kategori yang lagi aktif di state (bukan dari tombol yang diklik)
function saring(state) {
    return state.daftarProyek.filter(
        (proyek) => state.kategoriAktif === "semua" || proyek.kategori === state.kategoriAktif
    );
}

// kasih tanda di tombol yang kategorinya sama dengan yang aktif di state
function tandaiTombolAktif(kategoriAktif) {
    document.querySelectorAll("#filter button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
    });
}

// render nerima seluruh state, tampilannya digambar dari situ
export function render(state) {
    tandaiTombolAktif(state.kategoriAktif); // tombol aktif juga ngikut state
    wadah.textContent = ""; // 1. kosongin dulu biar kartu nggak numpuk
    const tampil = saring(state); // dari state, bukan dari argumen
    if (tampil.length === 0) { // 2. keadaan kosong, munculin pesan
        kosong.hidden = false;
        return;
    }
    kosong.hidden = true;
    tampil.forEach((proyek) => wadah.append(buatKartu(proyek))); // 3. isi ulang
}

// Lembar D (P9)
// aturan tiap kolom, cara ngecek nilainya + pesan kalau salah
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

// cek satu kolom, tampilin atau hapus pesannya, balikin true kalau sah
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

// periksa kolom yang jadi target peristiwa, balikin false kalau target bukan kolom yang dijaga
export function periksaTarget(target) {
    const aturanKolom = aturan.find((a) => a.kolom === target);
    if (!aturanKolom) return false;
    periksaKolom(aturanKolom);
    return true;
}

// tombol kirim ikut keadaan semua kolom
export function perbaruiTombolKirim() {
    tombolKirim.disabled = !semuaSah();
}

// isi pas form dikirim (preventDefault-nya di events.js)
export function kirimForm() {
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
}

// tombol kirim ditahan dari awal, baru aktif kalau semua kolom sah
perbaruiTombolKirim();

// P10 Lembar D
// tulis satu pesan teks di wadah notisia (memuat / gagal / kosong)
export function pesanNotisia(teks) {
    wadahNotisia.textContent = teks;
}

// gambar cuma nyusun elemen dari data, nggak ngambil data sendiri
export function gambarNotisia(daftar) {
    wadahNotisia.textContent = "";                       // kosongin dulu biar kartu nggak numpuk saat digambar ulang
    if (daftar.length === 0) {                           // keadaan kosong, balasan sah tapi nggak ada butir
        wadahNotisia.textContent = "Belum ada notisia";
        return;
    }
    daftar.forEach(function (n) {                        // satu kartu per butir data
        const kartu = document.createElement("article");
        kartu.className = "kartu";                       // pakai gaya kartu yang sudah ada di CSS
        const isi = document.createElement("div");
        isi.className = "kartu__isi";
        const judul = document.createElement("h3");
        judul.textContent = n.judul;                     // textContent, bukan innerHTML, karena data dari luar
        const keterangan = document.createElement("p");
        keterangan.textContent = n.kategori + " · " + n.tahun;
        const status = document.createElement("p");
        status.textContent = n.selesai ? "Selesai" : "Belum selesai";  // selesai itu true/false
        isi.append(judul, keterangan, status);
        kartu.append(isi);
        wadahNotisia.append(kartu);
    });
}
