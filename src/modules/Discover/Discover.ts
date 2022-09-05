import { Module } from '../../interfaces/ModuleInterface';
import discoverRouter from './DiscoverRouter';

const Discover: Module =  {
    name: 'discover',
    module: discoverRouter
};

export default Discover;