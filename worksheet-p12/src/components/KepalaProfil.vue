<script setup>
// P12 Lembar D langkah 1, KepalaProfil cuma baca data dari induk lewat props
const props = defineProps({
profil: { type: Object, required: true },
})
</script>

<template>
<header class="kepala">
    <input type="checkbox" id="tema" class="pengalih-tema">
    <label for="tema" class="tombol-tema">🌙 Tema Gelap</label>
    <h1>{{ props.profil.nama }}</h1>
    <p class="tagline">{{ props.profil.peran }}</p>
    <nav class="navbar" aria-label="Navigasi utama">
    <ul>
        <li><a href="#tentang">Tentang</a></li>
        <li><a href="#kutipan">Prinsip</a></li>
        <li><a href="#karya">Karya</a></li>
        <li><a href="#galeri">Galeri Karya</a></li>
        <li><a href="#sedang-dikerjakan">Aktivitas</a></li>
        <li><a href="#keahlian">Keahlian</a></li>
        <li><a href="#pengalaman">Pengalaman</a></li>
        <li><a href="#pencapaian">Pencapaian</a></li>
        <li><a href="#kontak">Kontak</a></li>
    </ul>
    </nav>
</header>
</template>