import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  standalone: false,
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregaCaracteristicas(value:string) {
    this.caracteristicasEmpleados.emit(value);
  }

}
