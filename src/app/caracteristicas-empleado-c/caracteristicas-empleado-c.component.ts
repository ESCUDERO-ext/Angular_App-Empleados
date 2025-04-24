import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  standalone: false,
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  //constructor(private miServicio:ServicioEmpleadosService){}

  agregaCaracteristicas(value:string) {
    //this.miServicio.muestraMensaje(value);
    //this.caracteristicasEmpleados.emit(value);
  }

}
