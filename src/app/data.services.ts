import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empeado.model";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}

    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.post('https://mis-clientes-fa6e8-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe(


            response => console.log("Se han guardado los empleados: " + response),

            error => console.log("Error: " + error)

        );

    }

}