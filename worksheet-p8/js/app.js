// data profil
// semua isi halaman dikumpulin di sini, jadi kalau ada yang berubah edit file ini

const profil = {
    nama: "Assyifa Nur Fauziyah Jaelani",
    peran: "Mahasiswa Informatika UII dan awardee Beasiswa OSC",
    keahlian: ["UI/UX Design", "Copywriting", "HTML & CSS", "Python", "Java"],
};

// ini angka beneran, makanya nggak pakai tanda kutip
const jumlahProyek = 3;

// pakai let soalnya nanti nilainya ganti-ganti pas data disaring (lembar D)
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