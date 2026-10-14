// P11 Lembar B
// data.js isinya data mentah sama fungsi murni aja, gak nyentuh halaman sama sekali

// data profil, semua isi halaman dikumpulin di sini
export const profil = {
    nama: "Assyifa Nur Fauziyah Jaelani",
    peran: "Mahasiswa Informatika UII dan awardee Beasiswa OSC",
    keahlian: ["UI/UX Design", "Copywriting", "HTML & CSS", "Python", "Java"],
};

// data proyek, array of object, tiap isinya satu proyek
export const daftarProyek = [
    { judul: "Desain Antarmuka Sem 1", kategori: "Proyek UI/UX", tahun: 2025, selesai: true },
    { judul: "CraftFlow", kategori: "Proyek Aplikasi Desktop Java Scene Builder", tahun: 2026, selesai: true },
    { judul: "Kala", kategori: "Lomba UI/UX", tahun: 2026, selesai: true },
];

// fungsi murni (P8), hasilnya cuma bergantung ke argumen
// 1. nyusun kalimat perkenalan dari satu object
export function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

// 2. ngerapiin daftar keahlian jadi satu baris teks
export function formatKeahlian(daftar) {
    return daftar.join(" · ");
}
