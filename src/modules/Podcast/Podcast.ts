import { Module } from '../../interfaces/ModuleInterface';
import podcastRouter from './PodcastRouter';

const Podcast: Module =  {
    name: 'podcasts',
    module: podcastRouter
};

export default Podcast;