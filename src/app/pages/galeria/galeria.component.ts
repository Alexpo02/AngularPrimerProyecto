import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'animate.css';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'] // Corregí 'styleUrl' a 'styleUrls'
})
export class GaleriaComponent {
  ciudades = [
    {
      nombre: 'Ciudad de México',
      imagen: 'https://www.civitatis.com/blog/wp-content/uploads/2022/12/zocalo-ciudad-mexico-noche.jpg',
      descripcion: 'Una ciudad vibrante llena de historia, cultura y gastronomía.'
    },
    {
      nombre: 'París',
      imagen: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
      descripcion: 'La ciudad del amor, conocida por la Torre Eiffel y sus museos famosos.'
    },
    {
      nombre: 'Tokio',
      imagen: 'https://images.ecestaticos.com/svQkpRHGCpf_arlLfdRSHczlJU0=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F09b%2F94b%2F0af%2F09b94b0afe62646e72bd87ae96c0d359.jpg',
      descripcion: 'Una metrópolis futurista con una mezcla de tradición y modernidad.'
    }
  ];
}
