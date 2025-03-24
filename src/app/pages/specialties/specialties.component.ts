import { Component } from '@angular/core';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.css']
})
export class SpecialtiesComponent {
  icons = [
    {
      title: 'Servicios',
      image: '/assets/images/img-shopping-bag-Servicios.png',
      description: 'Descubre nuestros amplios servicios para cuidar a tus mascotas.',
      link: '/services'
    },
    {
      title: 'Especialidades',
      image: '/assets/images/imgEspecialidades.png',
      description: 'Conoce nuestras especialidades en salud animal.',
      link: '/specialties'
    },
    {
      title: 'Animales Exóticos',
      image: '/assets/images/img-exotic-pet.png',
      description: 'Atendemos también a animales exóticos.',
      link: '/exotic'
    },
    {
      title: 'Nosotros',
      image: '/assets/images/pet-house-Nosotros.png',
      description: 'Conoce nuestro equipo y nuestra historia.',
      link: '/whoweare'
    }
  ];
}
