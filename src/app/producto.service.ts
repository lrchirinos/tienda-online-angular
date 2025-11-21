import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { DatosService } from './datos.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: {[llave:string]:Producto} = {};
  productosActualizados = new Subject<{[llave:string]: Producto}>();

  constructor(private datosService: DatosService){}

  listarProductos(){
    return this.datosService.listarProductos();
  }

  //esta funcion sirve para agregar o modificar
  guardarProducto(producto: Producto, llave:string | null=null) {
    if(llave===null){//para agregar
      //caso de agregar
      this.datosService.agregarProducto(producto).subscribe(()=>{
        this.refrescarProductos();
      });
    } else{//para editar
      this.datosService.modificarProducto(producto, llave).subscribe(()=>{
        this.refrescarProductos();
      });
    }
  }

  private refrescarProductos(){
    this.listarProductos().subscribe((productos: {[llave:string]: Producto}) => {
      this.setProductos(productos);
    });
  }

  setProductos(productos: {[llave:string]: Producto}){
    this.productos = productos;
    this.productosActualizados.next(this.productos);//emite lista actualizada
  }

  getProductoByLlave(llave: string): Producto | undefined {
    return this.productos[llave];
  }

  eliminarProducto (llave: string){
    this.datosService.eliminarProducto(llave).subscribe(()=>{
      this.refrescarProductos();
    });
  }
}
