<template>
    <div class="home">
        <section class="body-home">
            <HeaderComponent
                :name="'Bruno Mars'"
                :photo="'https://raptv.com/wp-content/uploads/Bruno_Mars_LD_t600.jpg'"
                :full-photo="'url(https://r4.wallpaperflare.com/wallpaper/634/849/169/bruno-mars-pop-r-b-wallpaper-e23f807ceacf73bf23048391d30bb78f.jpg)'"
            ></HeaderComponent>
            <div class="body-content">
                <MusicComponent></MusicComponent>
                <AlbumComponent></AlbumComponent>
            </div>
        </section>
    </div>
</template>

<style scoped src="./HomeView.css"></style>

<script setup lang="ts">
import MusicComponent from '../components/MusicComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import AlbumComponent from '../components/AlbumComponent.vue';
</script>
