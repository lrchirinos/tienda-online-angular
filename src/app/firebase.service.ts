import { Injectable } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firebaseConfig = {
    apiKey: "AIzaSyCYmaCbq4VcBzMzQBDIPeUho92eqP_ZV_8",
    authDomain: "tienda-online-448cc.firebaseapp.com",
    databaseURL: "https://tienda-online-448cc-default-rtdb.firebaseio.com",
    projectId: "tienda-online-448cc",
    storageBucket: "tienda-online-448cc.firebasestorage.app",
    messagingSenderId: "872608539450",
    appId: "1:872608539450:web:4a559ec06a77510a8e6603"
  };
  public auth: Auth;
  public firebase: Firestore;

  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);
  }
}
