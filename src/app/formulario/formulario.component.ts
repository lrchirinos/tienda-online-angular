import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  descripcionInput: string = '';
  precioInput: number | null = null;
  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }
  guardarProducto(evento: Event) {
    evento.preventDefault();
    // Validación simple para evitar productos sin descripción o con precio cero
    if (this.descripcionInput.trim() === ''
      || this.precioInput == null || this.precioInput <= 0) {
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }
    const producto = new Producto(this.descripcionInput, this.precioInput);
    // Agregamos el nuevo producto usando el servicio
    this.productoService.agregarProducto(producto);
    // Limpia los campos de entrada después de agregar el producto
    this.descripcionInput = '';
    this.precioInput = null;

    //para redirigir al inicio
    this.router.navigate(['/']);
  }

  cancelar() {
    //para redirigir al inicio
    this.router.navigate(['/']);
  }

}