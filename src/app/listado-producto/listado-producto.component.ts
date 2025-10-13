import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { ProductoComponent } from '../producto/producto.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-listado-producto',
  standalone: true,
  imports:[ProductoComponent, FormsModule],
  templateUrl: './listado-producto.component.html',
  styleUrl: './listado-producto.component.css',

})
export class ListadoProductoComponent {
productos: Producto[] = [
new Producto('Pantalón', 130.0),
new Producto('Camisa', 80.0),
new Producto('Playera', 50.0),
];
descripcionInput: string = '';
precioInput: number | null = null;
agregarProducto() {
// Validación simple para evitar productos sin descripción o con precio cero
if (this.descripcionInput.trim() === '' || this.precioInput == null ||
 this.precioInput <= 0) {
console.log('Debe ingresar una descripción y un precio válidos');
return;
}
const producto = new Producto(this.descripcionInput, this.precioInput);
this.productos.push(producto);
// Limpia los campos de entrada después de agregar el producto
this.descripcionInput = '';
this.precioInput = 0;
}
}
