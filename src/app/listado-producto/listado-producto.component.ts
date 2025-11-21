import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { ProductoComponent } from '../producto/producto.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-listado-producto',
  standalone: true,
  imports: [ProductoComponent, FormsModule, FormularioComponent],
  templateUrl: './listado-producto.component.html',
  styleUrl: './listado-producto.component.css',

})
export class ListadoProductoComponent {
  productos: {[llave:string]:Producto} = {};
  productosSubscripcion: Subscription | null = null;

  constructor(private productoService: ProductoService, 
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.cargarProductos();

    //escuchamos los cambios en la lista de productos
    this.productosSubscripcion = this.productoService.productosActualizados.subscribe((productos) => {
      this.productos= productos;
    })
  }

  cargarProductos(){
    this.productoService.listarProductos().subscribe((productos: {[llave:string]:Producto})=>{
      this.productos = productos;
      this.productoService.setProductos(productos);
    });
  }

  obtenerLlaves(): string[]{
    if(this.productos){
      return Object.keys(this.productos);
    }
    return [];
  }
  agregarProducto() {
    this.router.navigate(['agregar']);
  
  }

  ngOnDestroy(): void {
    if(this.productosSubscripcion !=null){
      this.productosSubscripcion.unsubscribe();
    }
  }
}
