import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { signInWithEmailAndPassword } from 'firebase/auth';
@Injectable({
providedIn: 'root'
})
export class LoginService {
token: string | null = null; // Almacena el token de autenticación del usuario
constructor(
private router: Router,
private firebaseService: FirebaseService
) {}
// Método para iniciar sesión
login(email: string, password: string) {
const auth = this.firebaseService.auth;
signInWithEmailAndPassword(auth, email, password)
.then(() => {
auth.currentUser?.getIdToken().then((token) => {
this.token = token; // Almacena el token obtenido de Firebase
this.router.navigate(['/']); // Redirige a la página principal tras el login
});
})
.catch((error) => {
console.error('Error al iniciar sesión:', error); // Manejo de errores de login
});
}
// Método para obtener el token actual
getIdToken() {
return this.token;
}
// Verifica si el usuario está autenticado
isAutenticado() {
return this.token != null;
}
// Método para cerrar sesión
logout() {
const auth = this.firebaseService.auth;
auth
.signOut()
.then(() => {
this.token = null; // Resetea el token al cerrar sesión
this.router.navigate(['login']); // Redirige al login después del logout
})
.catch((error) => console.log('error logout: ' + error)); // Manejo de errores de logout
}
}