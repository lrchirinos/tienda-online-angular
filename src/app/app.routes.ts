import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path:'', component: ListadoProductoComponent},
    {path:'listado', component: ListadoProductoComponent},
    {path:'agregar', component: FormularioComponent},
    {path:'editar/:llave', component: FormularioComponent},
    //ruta comodin para cualquier otra ruta seleccionada
    {path: '**', component: ErrorComponent}
];
