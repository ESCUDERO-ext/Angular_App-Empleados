import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Empleados';

  constructor(){}

  ngOnInit(): void {

    firebase.initializeApp({

      apiKey: "AIzaSyBAyP66_dY_BY2wBmgRjR_N3G4Kz-o8suY",
      authDomain: "mis-clientes-dfd69.firebaseapp.com"

    });

  }

}
