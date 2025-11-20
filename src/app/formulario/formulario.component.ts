import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  productoId: number | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;
  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(){
    //verificamos producto existente
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const producto = this.productoService.getProductoById(Number(id));
      if(producto){
        //si encontramos el producto lo cargamos en el formulario
        this.productoId= producto.id;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
      }
    }
  }
  guardarProducto(evento: Event) {
    evento.preventDefault();
    // Validación simple para evitar productos sin descripción o con precio cero
    if (this.descripcionInput.trim() === ''
      || this.precioInput == null || this.precioInput <= 0) {
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }
    const producto = new Producto(this.productoId, this.descripcionInput, this.precioInput);
    // Agregamos el nuevo producto usando el servicio
    this.productoService.guardarProducto(producto);
    // Limpia los campos de entrada después de agregar el producto
    this.limpiarFormulario();
    //para redirigir al inicio
    this.router.navigate(['/']);
  }

  cancelar() {
    //para redirigir al inicio
    this.router.navigate(['/']);
  }

  eliminarProducto(){
    if(this.productoId!==null){
      this.productoService.eliminarProducto(this.productoId);
      this.limpiarFormulario();
      this.router.navigate(['/']);
    }
  }

  limpiarFormulario(){
    this.productoId = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }
}