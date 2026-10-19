<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

// P12 Lembar D langkah 3, daftar kartu proyek
// dulu saring() di dom.js, sekarang daftar terhitung: ikut berubah otomatis kalau kategoriAktif berubah
const tampil = computed(() =>
    state.daftarProyek.filter(
    (proyek) => state.kategoriAktif === 'semua' || proyek.kategori === state.kategoriAktif
    )
)
</script>

<template>
<ul id="daftar">
    <li v-for="proyek in tampil" :key="proyek.id" class="kartu">{{ proyek.judul }}</li>
</ul>
    <p v-if="tampil.length === 0" id="pesan-kosong">Tidak ada proyek pada kategori itu.</p>
</template>