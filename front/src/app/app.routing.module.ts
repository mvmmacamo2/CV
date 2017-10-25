import {ModuleWithProviders, NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MenuadminComponent} from "./menuadmin/menuadmin.component";
import {PaginaInicialComponent} from "./pagina-inicial/pagina-inicial.component";


const appRoutes: Routes = [
    {path: 'admin', component: MenuadminComponent},
    {path: '', component: PaginaInicialComponent}

];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]

})

export class AppRoutingModule {
}