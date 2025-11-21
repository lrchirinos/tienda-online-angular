import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url = environment.firebase_url;
  
  constructor(private httpClient: HttpClient) { }

  listarProductos(): Observable<{[llave:string]: Producto}>{
    return this.httpClient.get<{[llave:string]:Producto}>(this.url + 'datos.json');
  }

  agregarProducto(producto: Producto): Observable<any>{
    //firebase genera llave de manera automatica
    return this.httpClient.post(`${this.url}datos.json`, producto);
  }

  modificarProducto(producto: Producto, llave: string): Observable<any>{
    const url_modificar =  `${this.url}datos/${llave}.json`;
    return this.httpClient.put(url_modificar, producto);
  }
  eliminarProducto(llave:string): Observable<any>{
    const url_eliminar =  `${this.url}datos/${llave}.json`;
    return this.httpClient.delete(url_eliminar);
  }
}
