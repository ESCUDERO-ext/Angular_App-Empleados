import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empeado.model';

@Component({
  selector: 'app-actualiza-component',
  standalone: false,
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.css'
})
export class ActualizaComponentComponent implements OnInit {
  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){}

  empleados:Empleado[]=[];

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }

  volverHome() {
  
    this.router.navigate(['']); //Para volver al home es vacío '' porque así es como lo hemos declarado

  }

  agregarEmpleado(){
  
      let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
      this.empleadosService.agregarEmpleadoServicio(miEmpleado);

      this.router.navigate(['']);

    }
  
    cuadroNombre:string="";
    cuadroApellido:string="";
    cuadroCargo:string="";
    cuadroSalario:number=0;

}
