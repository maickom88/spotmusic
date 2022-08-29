<script setup lang="ts">
import SidebarComponent from './components/Sidebar/SidebarComponent.vue';

</script>

<template>
    <div class="App">
        <div class="spotmusic">
            <SidebarComponent></SidebarComponent>
            <div class="main">
                <router-view />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
