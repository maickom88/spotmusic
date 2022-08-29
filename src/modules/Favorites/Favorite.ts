import { Module } from '../../interfaces/ModuleInterface';
import FavoriteRouter from './FavoriteRouter';

const Favorite: Module =  {
    name: 'favorite',
    module: FavoriteRouter
};

export default Favorite;