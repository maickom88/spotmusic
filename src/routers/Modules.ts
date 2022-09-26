import { Module } from '../interfaces/ModuleInterface';
import Discover from '../modules/Discover/Discover';
import Favorite from '../modules/Favorites/Favorite';
import Home from '../modules/Home/Home';
import Podcast from '../modules/Podcast/Podcast';

const modules: Array<Module> = [
    Home,
    Favorite,
    Discover,
    Podcast,
];

export default modules;