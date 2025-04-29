import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class LoginService {

    constructor(private router:Router, private cookies:CookieService){}

    token:string;

    login(email:string, password:string){

        firebase.auth().signInWithEmailAndPassword(email, password).then(

            response=>{

                firebase.auth().currentUser?.getIdToken().then(

                    (token:string)=>{

                        this.token=token;
                        this.cookies.set('token', this.token); // Guardar el token en una cookie
                        this.router.navigate(['/']);

                    }

                )
            }

        );

    }

    getIdToken(){
        //return this.token;
        return this.cookies.get('token'); // Obtener el token de la cookie
    }

    estaLogueado(){
        //return this.token;
        return this.cookies.get('token'); // Obtener el token de la cookie
    }

    logout(){
        firebase.auth().signOut().then(()=>{
            this.token="";
            this.cookies.set("token", this.token); // Limpiar el token de la cookie
            this.router.navigate(['']);
            window.location.reload(); // Recargar la página para reflejar el cambio de estado
        });
    }


}