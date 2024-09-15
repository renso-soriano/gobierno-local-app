import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios-ciudadanos',
  templateUrl: './servicios-ciudadanos.component.html',
  styleUrls: ['./servicios-ciudadanos.component.css']
})
export class ServiciosCiudadanosComponent {
  isAuthenticated: boolean = false;
  userType: string = 'admin'; // O 'usuario'

  // Método para alternar el estado de autenticación
  toggleAuth(): void {
    this.isAuthenticated = !this.isAuthenticated;
  }
}
