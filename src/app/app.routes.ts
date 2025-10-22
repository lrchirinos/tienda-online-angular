import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component';

export const routes: Routes = [
    {path:'', component: ListadoProductoComponent},
    {path:'listado', component: ListadoProductoComponent},
    {path:'agregar', component: FormularioComponent},
    {path:'editar:id', component: FormularioComponent}
];
