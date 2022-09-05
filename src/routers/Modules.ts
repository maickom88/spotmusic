import { Module } from '../interfaces/ModuleInterface';
import Discover from '../modules/Discover/Discover';
import Favorite from '../modules/Favorites/Favorite';
import Home from '../modules/Home/Home';

const modules: Array<Module> = [
    Home,
    Favorite,
    Discover
];

export default modules;