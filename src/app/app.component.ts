import { Component } from '@angular/core';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component'; 


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ListadoProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda-online';
}
