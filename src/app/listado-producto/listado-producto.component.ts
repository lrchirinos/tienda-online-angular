import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { ProductoComponent } from '../producto/producto.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";



@Component({
  selector: 'app-listado-producto',
  standalone: true,
  imports: [ProductoComponent, FormsModule, FormularioComponent],
  templateUrl: './listado-producto.component.html',
  styleUrl: './listado-producto.component.css',

})
export class ListadoProductoComponent {
  productos: Producto[] = [
    new Producto('Pantalón', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Playera', 50.0),
  ];
  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }
}
