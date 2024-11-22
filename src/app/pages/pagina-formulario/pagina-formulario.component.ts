import { Component } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";

@Component({
  selector: 'app-pagina-formulario',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './pagina-formulario.component.html',
  styleUrl: './pagina-formulario.component.css'
})
export class PaginaFormularioComponent {

}
