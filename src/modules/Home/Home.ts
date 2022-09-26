import { Module } from '../../interfaces/ModuleInterface';
import HomeRouter from './HomeRouter';

const Home: Module =  {
    name: 'home',
    module: HomeRouter
};

export default Home;