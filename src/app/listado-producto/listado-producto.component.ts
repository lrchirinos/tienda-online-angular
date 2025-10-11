import { Component } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';


@Component({
  selector: 'app-listado-producto',
  standalone: true,
  imports:[ProductoComponent],
  templateUrl: './listado-producto.component.html',
  styleUrl: './listado-producto.component.css',

})
export class ListadoProductoComponent {
 
}
