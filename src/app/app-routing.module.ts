import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCiudadanaComponent } from './servicios/consulta-ciudadana/consulta-ciudadana.component';
import { PagoImpuestosComponent } from './servicios/pago-impuestos/pago-impuestos.component';
import { TramitesOnlineComponent } from './servicios/tramites-online/tramites-online.component';

const routes: Routes = [
  {
    path: 'consulta',
    component: ConsultaCiudadanaComponent,
  },
  {
    path: 'impuesto',
    component: PagoImpuestosComponent,
  },
  {
    path: 'tramite',
    component: TramitesOnlineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
