import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  servicios = [
    {
      nombre: 'Consulta General',
      imagen: 'assets/images/Consultageneral.jpg',
      descripcion: 'Atención veterinaria básica y chequeos preventivos para tu mascota.'
    },
    {
      nombre: 'Hospital 24 Horas',
      imagen: 'assets/images/hos24horas.jpg',
      descripcion: 'Cuidado continuo para emergencias y hospitalización las 24 horas.'
    },
    {
      nombre: 'Consulta Especializada',
      imagen: 'assets/images/consultaespeciali.jpg',
      descripcion: 'Servicios avanzados por especialistas en diferentes áreas.'
    },
    {
      nombre: 'Urgencia 24 Horas',
      imagen: 'assets/images/ugencia24.jpg',
      descripcion: 'Atención inmediata ante cualquier emergencia veterinaria.'
    },
    {
      nombre: 'Animales Exóticos',
      imagen: 'assets/images/vetextotico.jpg',
      descripcion: 'Cuidado integral y especializado para especies no convencionales.'
    },
    {
      nombre: 'Imágenes Diagnósticas',
      imagen: 'assets/images/diagnosticas.jpg',
      descripcion: 'Tecnología avanzada para diagnósticos precisos.'
    },
    {
      nombre: 'Cirugías',
      imagen: 'assets/images/cirujia.jpg',
      descripcion: 'Procedimientos quirúrgicos seguros y profesionales.'
    },
    {
      nombre: 'Vacunación',
      imagen: 'assets/images/vacunacion.jpg',
      descripcion: 'Protección preventiva esencial para la salud de tu mascota.'
    },
    {
      nombre: 'Esterilización',
      imagen: 'assets/images/esterilizacion.jpg',
      descripcion: 'Control responsable de reproducción y bienestar.'
    }
  ];
}
