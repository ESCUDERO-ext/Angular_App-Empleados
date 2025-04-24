import { Component, Input } from '@angular/core';
import { Empleado } from '../empeado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  standalone: false,
  templateUrl: './empleado-hijo-c.component.html',
  styleUrl: './empleado-hijo-c.component.css'
})
export class EmpleadoHijoCComponent {

  @Input() empleadoDeLista:Empleado;

  @Input() indice:number;

}
