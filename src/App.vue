<script setup lang="ts">
import SidebarComponent from './components/Sidebar/SidebarComponent.vue'
import PlayerComponent from './components/Player/PlayerComponent.vue';
</script>

<template>
    <div class="App">
        <div class="spotmusic">
            <SidebarComponent></SidebarComponent>
            <div class="main">
                <router-view />
               <PlayerComponent></PlayerComponent>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
