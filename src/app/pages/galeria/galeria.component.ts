import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyServiceService } from '../../services/my-service-service.service';
import 'animate.css';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  providers: [MyServiceService],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'] 
})
export class GaleriaComponent {
  weatherData: any;

  // Array de ciudades con un campo adicional para la temperatura
  ciudades = [
    {
      nombre: 'Ciudad de México',
      imagen: 'https://www.civitatis.com/blog/wp-content/uploads/2022/12/zocalo-ciudad-mexico-noche.jpg',
      descripcion: 'Una ciudad vibrante llena de historia, cultura y gastronomía.',
      temperatura: null // Campo para la temperatura
    },
    {
      nombre: 'París',
      imagen: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
      descripcion: 'La ciudad del amor, conocida por la Torre Eiffel y sus museos famosos.',
      temperatura: null
    },
    {
      nombre: 'Tokio',
      imagen: 'https://images.ecestaticos.com/svQkpRHGCpf_arlLfdRSHczlJU0=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F09b%2F94b%2F0af%2F09b94b0afe62646e72bd87ae96c0d359.jpg',
      descripcion: 'Una metrópolis futurista con una mezcla de tradición y modernidad.',
      temperatura: null
    }
  ];

  // Método para obtener el clima
  constructor(private weatherService: MyServiceService) { }

  ngOnInit() {
    this.getWeather();
  }

  // Método para obtener el clima de cada ciudad
  getWeather() {
    this.ciudades.forEach(ciudad => {
      this.weatherService.getWeatherByCity(ciudad.nombre).subscribe(data => {
        ciudad.temperatura = data.main.temp; // Asigna la temperatura al objeto de la ciudad
      });
    });
  }
}
