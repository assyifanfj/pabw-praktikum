// P9 Lembar A
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

// cek semuanya, kalau ada yang null berarti id-nya salah ketik
console.log(wadah, kosong, barisFilter, formKontak);
console.log(kolomNama, kolomEmail, kolomNim, kolomPesan, tombolKirim);
console.log("jumlah proyek dari app.js:", daftarProyek.length); // harus 3