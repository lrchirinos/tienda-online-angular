import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //variable para el ID siguiente y unico
  private idSiguiente = 1;

  productos: Producto[]=[];

  constructor(){
    //Inicializamos los productos
    this.inicializarProductos();
  }

  private inicializarProductos(){
    const producto1 = new Producto(this.idSiguiente++, 'Pantalon', 130.0);
    const producto2 = new Producto(this.idSiguiente++, 'Camisa', 80.0);
    const producto3 = new Producto(this.idSiguiente++, 'Playera', 50.0);
    // Agregamos al arreglo de productos
    this.productos.push(producto1,producto2, producto3);
  }

  //esta funcion sirve para agregar o modificar
  guardarProducto(producto: Producto) {
    if (producto.id ===null){
      producto.id = this.idSiguiente++;
      this.productos.push(producto);
    } else{
      const indice = this.productos.findIndex(p => p.id == producto.id);
      if(indice !== -1){
        this.productos[indice]=producto;
      }
    }
  }

  getProductoById(id: number): Producto | undefined {
    return this.productos.find(producto => producto.id === id);
  }

  eliminarProducto (id:number){
    const indice = this.productos.findIndex(producto => producto.id === id);
    if(indice !== -1){
      this.productos.splice(indice, 1);
    }
  }
}
