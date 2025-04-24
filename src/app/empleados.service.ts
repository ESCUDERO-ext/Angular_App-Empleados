import { Empleado } from "./empeado.model";

export class EmpleadosService{

    empleados:Empleado[]=[
    
        new Empleado("Juan", "Díaz", "Presidente", 7500),
        new Empleado("Ana", "Martín", "Directora", 5500),
        new Empleado("María", "Fernández", "Jefa sección", 3500),
        new Empleado("Laura", "López", "Administrativo", 2500)
    
      ];

      agregarEmpleadoServicio(empleado:Empleado){
        this.empleados.push(empleado);
      }
}