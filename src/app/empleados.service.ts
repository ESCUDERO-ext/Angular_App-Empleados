import { Injectable } from "@angular/core";
import { Empleado } from "./empeado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";

@Injectable()
export class EmpleadosService{

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices){
      
  }

  setEmpleados(misEmpleados:Empleado[]){

    this.empleados=misEmpleados;

  }

  obtenerEmpleados(){

    return this.dataService.cargarEmpleados();
  }

  empleados:Empleado[]=[];

  /*empleados:Empleado[]=[
  
    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "Martín", "Directora", 5500),
    new Empleado("María", "Fernández", "Jefa sección", 3500),
    new Empleado("Laura", "López", "Administrativo", 2500)

  ];*/

  agregarEmpleadoServicio(empleado:Empleado){

    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" +
        empleado.nombre + "\n" + "Salario: " + empleado.salario);

    this.empleados.push(empleado);

    this.dataService.guardarEmpleados(this.empleados); // Guardar el empleado en la base de datos

  }

  encontrarEmpleado(indice:number){

    let empleado:Empleado=this.empleados[indice];

    return empleado;

  }

  actualizarEmpleado(indice:number, empleado:Empleado){

    let empleadoModificado=this.empleados[indice];

    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

    this.dataService.actualizarEmpleado(indice, empleado);

  }

  eliminarEmpleado(indice:number){

    this.empleados.splice(indice, 1);

    this.dataService.eliminarEmpleado(indice); // Eliminar el empleado de la base de datos

    if (this.empleados!=null) this.dataService.guardarEmpleados(this.empleados); // Guardar los empleados actualizados en la base de datos si no está vacío
    
  }
}