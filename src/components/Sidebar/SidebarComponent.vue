<template>
    <div class="sidebar">
        <div class="sidebar-top">
            <div class="logo">
                <img src="../../assets/images/logo.png" alt="Logo SpotMusic" />
                <span>SpotMusic</span>
            </div>
            <SearchBarComponent></SearchBarComponent>
        </div>
        <div class="sidebar-items">
            <span class="text-small">Menu</span>
            <ul>
                <li v-for="(item, index) in tabItems" :key="index">
                    <RouterLink :to="item.link">
                        <div class="menu">
                            <div
                                :class="
                                    $route.name === item.linkName
                                        ? 'is-active'
                                        : 'not-active'
                                "
                            ></div>
                            <img :src="item.svg" alt="my-logo" />
                            <span>{{ item.name }}</span>
                        </div>
                    </RouterLink>
                </li>
            </ul>
        </div>
        <TheBestSongsComponent></TheBestSongsComponent>
        <BottomSidebarComponent></BottomSidebarComponent>
    </div>
</template>

<style scoped src="./SidebarComponent.css"></style>

<script lang="ts">
import TheBestSongsComponent from '../TheBestSongs/TheBestSongsComponent.vue';
import { defineComponent } from 'vue';
import HomeSVG from '../../assets/icons/home.svg';
import DiscoverSVG from '../../assets/icons/discover.svg';
import FavoriteSVG from '../../assets/icons/favorite.svg';
import PodcastSVG from '../../assets/icons/podcast.svg';
import ProfileSVG from '../../assets/icons/profile.svg';
import BottomSidebarComponent 
from '../BottomSidebar/BottomSidebarComponent.vue';
import SearchBarComponent from '../SearchBar/SearchBarComponent.vue';

const tabItems = [
    {
        link: '/',
        name: 'Home',
        svg: HomeSVG,
        linkName: 'home',
    },
    {
        link: '/discover',
        name: 'Discover',
        svg: DiscoverSVG,
        linkName: 'discover',
    },
    {
        link: '/favorites',
        name: 'Favorite',
        svg: FavoriteSVG,
        linkName: 'favorites',
    },
    {
        link: '/podcasts',
        name: 'Podcasts',
        svg: PodcastSVG,
        linkName: 'podcasts',
    },
    {
        link: '/profile',
        name: 'Profile',
        svg: ProfileSVG,
        linkName: 'profile',
    },
];

export default defineComponent({
    components:{
    TheBestSongsComponent,
    BottomSidebarComponent,
    SearchBarComponent
},
    data() {
        return {
            tabItems,
        };
    },
});
</script>
