import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {PaginaInicialComponent} from './pagina-inicial/pagina-inicial.component';
import {MenugeralComponent} from './menugeral/menugeral.component';
import {MenuadminComponent} from './menuadmin/menuadmin.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from "@angular/forms";
import {FooterComponent} from './footer/footer.component';
import {AppRoutingModule} from "./app.routing.module";
import {UsuarioComponent} from './menuadmin/usuario/usuario.component';
import {NovoUsuarioComponent} from './menuadmin/usuario/novo-usuario/novo-usuario.component';
import {MenuadminModule} from "./menuadmin/menuadmin.module";

@NgModule({
    declarations: [
        AppComponent,
        PaginaInicialComponent,
        MenugeralComponent,
        MenuadminComponent,
        FooterComponent,
        UsuarioComponent,
        NovoUsuarioComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MenuadminModule,
        AppRoutingModule,

        MDBBootstrapModule.forRoot()
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
