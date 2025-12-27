import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardianService } from './login-guardian.service';


export const routes: Routes = [
{path: '', component: ListadoProductoComponent, canActivate:[LoginGuardianService]},
{path: 'listado', component: ListadoProductoComponent,
canActivate:[LoginGuardianService]},
{path: 'agregar', component: FormularioComponent,
canActivate:[LoginGuardianService]},
{path: 'editar/:llave', component: FormularioComponent,
canActivate:[LoginGuardianService]},
{path: 'login', component: LoginComponent},
// Ruta comodín para cualquier otra ruta
{ path: '**', component: ErrorComponent }
];

