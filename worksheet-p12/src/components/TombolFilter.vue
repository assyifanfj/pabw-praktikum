<script setup>
import { state, pilihKategori } from '../state.js'

// P12 Lembar D langkah 2, tombol kategori
// nilai = kategori di data.js, label = tulisan di tombol
const tombol = [
    { nilai: 'semua', label: 'Semua' },
    { nilai: 'Proyek UI/UX', label: 'Proyek UI/UX' },
    { nilai: 'Proyek Aplikasi Desktop Java Scene Builder', label: 'Aplikasi Desktop' },
    { nilai: 'Lomba UI/UX', label: 'Lomba UI/UX' },
]
</script>

<template>
    <div id="filter">
    <button
        v-for="t in tombol"
        :key="t.nilai"
        :class="{ aktif: state.kategoriAktif === t.nilai }"
        @click="pilihKategori(t.nilai)"
    >{{ t.label }}</button>
    </div>
</template>

<!-- P12: Vue buang spasi antar elemen, jadi jarak antar tombol dibalikin lewat gap -->
<style scoped>
#filter {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
}
</style>