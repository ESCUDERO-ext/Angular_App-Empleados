import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private router:Router, private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){}

  empleados:Empleado[]=[];

  accion:number;

  ngOnInit(): void {

    this.accion=parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados=this.empleadosService.empleados;

    this.indice=this.route.snapshot.params['id'];

    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre=empleado.nombre;

    this.cuadroApellido=empleado.apellido;

    this.cuadroCargo=empleado.cargo;

    this.cuadroSalario=empleado.salario;

  }

  volverHome() {
  
    this.router.navigate(['']); //Para volver al home es vacío '' porque así es como lo hemos declarado

  }

/*actualizaEmpleado(){
  
  let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
  //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
  this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);

  this.router.navigate(['']);

}
  
eliminaEmpleado(){

  this.empleadosService.eliminarEmpleado(this.indice);

  this.router.navigate(['']);

}*/
  
actualizaEmpleado(){
  
  if(this.accion==1){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);

  }else{
    this.empleadosService.eliminarEmpleado(this.indice);
  }

  // Recargar los datos desde la base de datos
  this.empleadosService.obtenerEmpleados().subscribe(misEmpleados => {
    this.empleadosService.setEmpleados(Object.values(misEmpleados)); // Sincronizar la lista local
    this.router.navigate(['']); // Navegar de vuelta al home
  });

}

cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;

indice:number;

}
