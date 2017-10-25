import {NgModule} from "@angular/core";
import {UsuarioComponent} from "./usuario/usuario.component";
import {NovoUsuarioComponent} from "./usuario/novo-usuario/novo-usuario.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule

    ],
    exports: [],
    declarations: [
        UsuarioComponent,
        NovoUsuarioComponent
    ],
    providers: []
})

export class MenuadminModule {
}