import { Module } from '../interfaces/ModuleInterface';
import Favorite from '../modules/Favorites/Favorite';
import Home from '../modules/Home/Home';

const modules: Array<Module> = [
    Home,
    Favorite,
];

export default modules;