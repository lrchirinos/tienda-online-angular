import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model'; // Asegúrate de que esta ruta sea correcta
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  // Asegúrate de que esta URL sea correcta para tu proyecto
  url = 'https://tienda-online-448cc-default-rtdb.firebaseio.com/';

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  // CORREGIDO: Renombrado de 'cargarProductos' a 'listarProductos'
  // para coincidir con el error TS2339
  listarProductos(): Observable<{ [llave: string]: Producto }> {
    const token = this.loginService.getIdToken();
    return this.httpClient.get<{ [llave: string]: Producto }>(
      `${this.url}datos.json?auth=${token}`
    );
  }

  // CORREGIDO: Renombrado de 'guardarProducto' a 'agregarProducto'
  // para coincidir con el error TS2551
  agregarProducto(producto: Producto): Observable<any> {
    const token = this.loginService.getIdToken();
    return this.httpClient.post(`${this.url}datos.json?auth=${token}`, producto);
  }

  modificarProducto(producto: Producto, llave: string): Observable<any> {
    const token = this.loginService.getIdToken();
    const url_modificar = `${this.url}datos/${llave}.json?auth=${token}`;
    return this.httpClient.put(url_modificar, producto);
  }

  eliminarProducto(llave: string): Observable<any> {
    const token = this.loginService.getIdToken();
    const url_eliminar = `${this.url}datos/${llave}.json?auth=${token}`;
    return this.httpClient.delete(url_eliminar);
  }
}