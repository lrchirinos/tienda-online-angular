import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { ProductoComponent } from '../producto/producto.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";
import { ProductoService } from '../producto.service';



@Component({
  selector: 'app-listado-producto',
  standalone: true,
  imports: [ProductoComponent, FormsModule, FormularioComponent],
  templateUrl: './listado-producto.component.html',
  styleUrl: './listado-producto.component.css',

})
export class ListadoProductoComponent {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }
  ngOnInit(): void {
    // Inicializamos los productos
    this.productos = this.productoService.productos;
  }
}
