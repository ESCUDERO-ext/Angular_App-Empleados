import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empeado.model";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}

    cargarEmpleados() {
        return this.httpClient.get('https://mis-clientes-fa6e8-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
    }

    // Método ACTUALIZADO: Se cambió el formato de subscribe porque el uso de múltiples argumentos (next, error, complete)
    // está deprecated en RxJS. Ahora se utiliza un observer como argumento, que es más legible y compatible con futuras versiones.
    guardarEmpleados(empleados: Empleado[]) {
        this.httpClient.put('https://mis-clientes-fa6e8-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe({
            next: (response) => console.log("Se han guardado los empleados: " + response),
            error: (error) => console.log("Error: " + error),
            complete: () => console.log("Operación completada")
        });
    }

    /*Método ANTIGUO (deprecated):
    Este formato de subscribe con múltiples argumentos fue reemplazado por el uso de un observer.
    Se recomienda usar el formato de observer para mejorar la legibilidad y la gestión de errores.
    Además, el método subscribe ahora acepta un objeto con las propiedades next, error y complete.
    Esto permite manejar cada uno de estos casos de manera más clara y estructurada.
    
    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.put('https://mis-clientes-fa6e8-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe(
            response => console.log("Se han guardado los empleados: " + response),
            error => console.log("Error: " + error)
        );
    }*/

    actualizarEmpleado(indice:number, empleado:Empleado){

        let url='https://mis-clientes-fa6e8-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

        this.httpClient.put(url, empleado).subscribe({
            next: (response) => console.log("Se ha modificado correctamente el empleado: " + response),
            error: (error) => console.log("Error: " + error),
            complete: () => console.log("Operación completada")
        });

    }
}