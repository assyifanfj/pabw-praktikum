// P10 Lembar A, B
// api.js = lapisan data: tugasnya cuma ngambil data dari jaringan dan ngecek balasannya
// (urusan nampilin ke halaman bukan di sini)

// alamat berkas JSON lokal, relatif dari profil.html (ditulis sekali di sini aja)
// alamat berkas JSON lokal (perintah pak feri pakai berkas, bukan API), relatif dari profil.html
const ALAMAT = "notisia.json";

// nama ekspor ini yang nanti dipakai di berkas pengimpor (Pertemuan 11)
export async function ambilNotisia() {
    try {
        const respons = await fetch(ALAMAT);                       // minta data, hasilnya objek Response
        if (!respons.ok) throw new Error("status " + respons.status); // fetch nggak error di 404/500, dicek sendiri
        const data = await respons.json();                         // baru baca isinya sebagai JSON
        return data;
    } catch (galat) {
        console.error("gagal memuat", galat.message);              // catat di Console
        throw galat;                                               // lempar lagi, biar pemanggil (app.js) yang nampilin di halaman
    }
}

// SEMENTARA: biar bisa dicoba dari Console
window.ambilNotisia = ambilNotisia;