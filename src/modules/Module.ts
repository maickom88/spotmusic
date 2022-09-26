import { Module } from '../interfaces/ModuleInterface';
import baseRouter from '../routers/Router';

export class AppRouter {
    static modulesRegister: Array<Module> = [];

    static registerModules(modules: Array<Module>): typeof AppRouter{
        this.modulesRegister = modules;
        return this;
    }

    static generateRoutes(): void {
        this.modulesRegister.forEach((module)=>{
            module.module.getRoutes().forEach((element) => {
                baseRouter.addRoute(module.name, element);
            });
        });
    }
}