import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from './login.service';
@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet, RouterModule],
templateUrl: './app.component.html',
styleUrl: './app.component.css'
})
export class AppComponent {
titulo = 'Tienda Online';
constructor(private loginService: LoginService) {}
// Método que verifica si el usuario está autenticado
isAutenticado() {
return this.loginService.isAutenticado();
}
// Método para cerrar sesión
salir() {
this.loginService.logout();
}
}