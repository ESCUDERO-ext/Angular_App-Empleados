import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Empleados';

  constructor(private loginService:LoginService){}

  ngOnInit(): void {

    firebase.initializeApp({

      apiKey: "AIzaSyBAyP66_dY_BY2wBmgRjR_N3G4Kz-o8suY",
      authDomain: "mis-clientes-dfd69.firebaseapp.com"

    });

  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }
  
  logout(){
    this.loginService.logout();
  }

}
