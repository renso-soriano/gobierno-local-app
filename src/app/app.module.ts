import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TramitesOnlineComponent } from './servicios/tramites-online/tramites-online.component';
import { PagoImpuestosComponent } from './servicios/pago-impuestos/pago-impuestos.component';
import { ConsultaCiudadanaComponent } from './servicios/consulta-ciudadana/consulta-ciudadana.component';
import { ServiciosCiudadanosComponent } from './servicios/servicios-ciudadanos/servicios-ciudadanos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    TramitesOnlineComponent,
    PagoImpuestosComponent,
    ConsultaCiudadanaComponent,
    ServiciosCiudadanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
