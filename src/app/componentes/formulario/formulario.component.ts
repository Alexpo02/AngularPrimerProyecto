import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  standalone: true,
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre = 'alex';
  contrasenya = '123';

  constructor(private router: Router) {}

  onSubmit(event: Event, username: string, password: string) {
    event.preventDefault();
    if (username === this.nombre && password === this.contrasenya) {
      Swal.fire({
        icon: 'success',
        title: 'Credenciales correctas',
    
        showConfirmButton: true
      });
      this.router.navigate(['/galeria']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Credenciales incorrectas',
        showConfirmButton: true
      });
    }
  }
}
