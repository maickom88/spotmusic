import { Module } from '../../interfaces/ModuleInterface';
import HomeRouter from './HomeRouter';

const Home: Module =  {
    name: 'favorite',
    module: HomeRouter
};

export default Home;