import { Injectable } from '@angular/core';
// Import the functions you need from the SDKs you need
import { environment } from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  public auth: Auth;
  public firebase: Firestore;

  constructor() {
    // Usa la variable del environment
    const app = initializeApp(environment.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);
  }
}