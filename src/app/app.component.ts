import { Component } from '@angular/core';
import { Empleado } from './empeado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService){}

  empleados:Empleado[]=[

    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "Martín", "Directora", 5500),
    new Empleado("María", "Fernández", "Jefa sección", 3500),
    new Empleado("Laura", "López", "Administrativo", 2500)

  ];

  agregarEmpleado(){

    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleados.push(miEmpleado);

  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;


}
