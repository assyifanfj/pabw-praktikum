// data profil
// semua isi halaman dikumpulin di sini, jadi kalau ada yang berubah edit file ini

const profil = {
    nama: "Assyifa Nur Fauziyah Jaelani",
    peran: "Mahasiswa Informatika UII dan awardee Beasiswa OSC",
    keahlian: ["UI/UX Design", "Copywriting", "HTML & CSS", "Python", "Java"],
};

const jumlahProyek = 3;

let pilihanAktif = "semua";

// cek tipe datanya
console.log(typeof profil.nama);   // "string"
console.log(typeof jumlahProyek);  // "number"
console.log(typeof belumDibuat);   // "undefined", variabelnya emang belum ada

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);
console.log(`Sampai sekarang saya sudah bikin ${jumlahProyek} proyek.`);
console.log(`Pilihan aktif: ${pilihanAktif}`);

const kota = profil.alamat?.kota ?? "belum diisi";
console.log(`Kota: ${kota}`);

// bandingin nilai sekaligus tipenya
console.log(jumlahProyek === 3);   // true
console.log(jumlahProyek === "3"); // false

// Lembar C
// fungsi murni/hasilnya cuma bergantung ke argumen, nggak ngubah apa pun di luar fungsi

// 1. nyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

// 2. ngerapiin daftar keahlian jadi satu baris teks
function formatKeahlian(daftar) {
    return daftar.join(" · ");
}

// tiap fungsi dipanggil 3x dengan argumen berbeda
console.log(buatPerkenalan(profil));
console.log(buatPerkenalan({ nama: "Ayu", peran: "Mahasiswa Desain" }));
console.log(buatPerkenalan({ nama: "Budi", peran: "Pengembang Web" }));

console.log(formatKeahlian(profil.keahlian));
console.log(formatKeahlian(["Figma", "Canva"]));
console.log(formatKeahlian(["JavaScript"]));


// Lembar D
// data proyek: array of object, tiap isinya satu proyek
// (selesai: true semua karena ketiganya udah selesai, makanya ada kategori biar filter-nya kelihatan hasilnya)
const daftarProyek = [
    { judul: "Desain Antarmuka Sem 1", kategori: "UI/UX", tahun: 2025, selesai: true },
    { judul: "CraftFlow", kategori: "Aplikasi Desktop", tahun: 2026, selesai: true },
    { judul: "Kala", kategori: "UI/UX", tahun: 2026, selesai: true },
];

// cara baca nilai: titik buat label, kurung siku buat urutan (mulai dari 0)
console.log(daftarProyek[0]);          // object pertama
console.log(daftarProyek[0].judul);    // "Desain Antarmuka Sem 1"
console.log(profil["nama"]);           // sama kayak profil.nama

// console.table, seluruh isi tampil sebagai tabel
console.table(profil.keahlian);
console.table(daftarProyek);

// filter buat nyaring, hasilnya array baru yang bisa lebih pendek
const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const proyekUIUX = daftarProyek.filter((proyek) => proyek.kategori === "UI/UX");
console.table(proyekUIUX);

// find buat ngambil satu isi pertama yang cocok, kalau nggak ada hasilnya undefined
const craftflow = daftarProyek.find((proyek) => proyek.judul === "CraftFlow");
console.log(craftflow);

const tidakAda = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(tidakAda); // undefined, karena proyek itu memang nggak ada

// map buat ngubah tiap isi, panjang array hasilnya sama kayak array asal
const daftarJudul = daftarProyek.map((proyek) => proyek.judul);
console.log(daftarJudul);
console.log(daftarJudul.length === daftarProyek.length); // true

// sort pakai salinan [...array] soalnya sort ngubah array aslinya
const urutTahunBaru = [...daftarProyek].sort((a, b) => b.tahun - a.tahun);
console.table(urutTahunBaru);

// cek, urutan daftarProyek yang asli harus tetap sama
console.log(daftarProyek.map((proyek) => proyek.judul)); // urutan asli, nggak berubah

// Lembar E
// Kasus 1: undefined pada nilai yang seharusnya ada
// sebabnya label ketulis salah (nma), padahal di objek profil labelnya nama
console.log(profil.nama);

// Kasus 3: nilai dari kolom isian selalu teks
// kolom uji dibuat lewat kode dan nggak dipasang ke halaman, jadi form aslinya aman
const kolomUji = document.createElement("input");
kolomUji.value = "10";
// sebelum diperbaiki: kolomUji.value + 1 hasilnya "101" (teks disambung, bukan dijumlah)
const hasilJumlah = Number(kolomUji.value) + 1;
console.log(hasilJumlah);          // 11
console.log(typeof hasilJumlah);   // "number"

// Kasus 2: Cannot read properties of null
// soalnya querySelector(".taglin") nggak nemu elemen, class aslinya .tagline, jadi hasilnya null
const tagline = document.querySelector(".tagline");

// dijaga pakai if supaya kalau elemennya nggak ada, skrip nggak berhenti
if (tagline !== null) {
    console.log(tagline.textContent);
} else {
    console.error("Elemen .tagline tidak ditemukan di profil.html");
}

// Lembar F.3
// pakai objek contoh biar data profil yang asli nggak ikut berubah
const contohAsli = { ...profil };

// salinan yang bener pakai { ...objek }, hasilnya objek baru
const salinanBenar = { ...contohAsli };
salinanBenar.nama = "Nama Uji A";
console.log(contohAsli.nama);      // tetep "Assyifa Nur Fauziyah Jaelani"

// salinan yang salah tanpa titik-tiga, cuma nyalin penunjuknya, objeknya tetap satu
const salinanSalah = contohAsli;
salinanSalah.nama = "Nama Uji B";
console.log(contohAsli.nama);      // ikut berubah jadi "Nama Uji B"

// profil yang asli gak pernah disentuh
console.log(profil.nama);          // tetep "Assyifa Nur Fauziyah Jaelani"