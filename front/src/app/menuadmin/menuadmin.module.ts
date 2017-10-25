import {NgModule} from "@angular/core";
import {UsuarioComponent} from "./usuario/usuario.component";
import {NovoUsuarioComponent} from "./usuario/novo-usuario/novo-usuario.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule],
    exports: [],
    declarations: [
        UsuarioComponent,
        NovoUsuarioComponent
    ],
    providers: []
})

export class MenuadminModule {
}