import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { MenugeralComponent } from './menugeral/menugeral.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    MenugeralComponent,
    MenuadminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
