// P10 Lembar A
// api.js = lapisan data: tugasnya cuma ngambil data dari jaringan dan ngecek balasannya
// (urusan nampilin ke halaman bukan di sini)

// alamat API ditulis sekali di sini aja, kalau berubah cukup edit satu baris ini
// alamat berkas JSON lokal (perintah pak feri pakai berkas, bukan API), relatif dari profil.html
const ALAMAT = "notisia.json";

// manggil API, ngecek respons.ok dulu baru baca isinya
export async function muat() {
    const respons = await fetch(ALAMAT);                      // minta data, hasilnya objek Response
    console.log("status", respons.status, "ok", respons.ok);  // status = kode balasan, ok = true kalau 200-299
    if (!respons.ok) {                                        // fetch nggak error di 404/500, jadi dicek sendiri
        throw new Error("status " + respons.status);          // lempar galat sendiri
    }
    return respons.json();                                    // baru baca isinya sebagai JSON
}

// SEMENTARA: biar muat() bisa dipanggil dari Console (fungsi di modul nggak otomatis global)
window.muat = muat;