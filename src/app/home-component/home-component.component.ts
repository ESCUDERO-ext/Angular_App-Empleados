import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empeado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit{
  titulo = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){

    //this.empleados=this.empleadosService.empleados;

  }

  ngOnInit(): void {
    //this.empleados=this.empleadosService.empleados;

    //console.log(this.empleadosService.obtenerEmpleados());
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{

      console.log(misEmpleados);

      this.empleados=Object.values(misEmpleados); // Convertir el objeto a un array de empleados

      this.empleadosService.setEmpleados(this.empleados); // Guardar los empleados en el servicio

    });
  }

  empleados:Empleado[]=[];

  agregarEmpleado(){

    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
