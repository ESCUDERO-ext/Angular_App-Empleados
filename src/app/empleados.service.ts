import { Injectable } from "@angular/core";
import { Empleado } from "./empeado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){
        
    }

    empleados:Empleado[]=[
    
        new Empleado("Juan", "Díaz", "Presidente", 7500),
        new Empleado("Ana", "Martín", "Directora", 5500),
        new Empleado("María", "Fernández", "Jefa sección", 3500),
        new Empleado("Laura", "López", "Administrativo", 2500)
    
      ];

      agregarEmpleadoServicio(empleado:Empleado){

        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" +
            empleado.nombre + "\n" + "Salario: " + empleado.salario);

        this.empleados.push(empleado);

      }
}