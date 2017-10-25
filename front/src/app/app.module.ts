import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {PaginaInicialComponent} from './pagina-inicial/pagina-inicial.component';
import {MenugeralComponent} from './menugeral/menugeral.component';
import {MenuadminComponent} from './menuadmin/menuadmin.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        PaginaInicialComponent,
        MenugeralComponent,
        MenuadminComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
         MDBBootstrapModule.forRoot()
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
