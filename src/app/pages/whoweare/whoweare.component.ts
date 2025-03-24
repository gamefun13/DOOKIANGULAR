import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.component.html',
  styleUrls: ['./whoweare.component.css']
})
export class WhoweareComponent implements OnInit {

  // Lista de doctores (con claves en español)
  doctors = [
    {
      nombre: 'Doctor Pérez',
      especialidad: 'Cirugía',
      experiencia: '12 años',
      exito: 95,
      imagen: 'assets/images/user.png'
    },
    {
      nombre: 'Doctora Carolina',
      especialidad: 'Pediatría',
      experiencia: '8 años',
      exito: 98,
      imagen: 'assets/images/user.png'
    },
    {
      nombre: 'Doctor Restrepo',
      especialidad: 'Cardiología',
      experiencia: '15 años',
      exito: 97,
      imagen: 'assets/images/user.png'
    },
    {
      nombre: 'Doctora Marta',
      especialidad: 'Dermatología',
      experiencia: '10 años',
      exito: 96,
      imagen: 'assets/images/user.png'
    }
  ];

  // Tarjetas de iconos
  iconCards = [
    {
      img: 'assets/images/img-shopping-bag-Servicios.png',
      titulo: 'Servicios',
      texto: 'Descubre nuestros amplios servicios para cuidar a tus mascotas.',
      link: '/Services'
    },
    {
      img: 'assets/images/imgEspecialidades.png',
      titulo: 'Especialidades',
      texto: 'Conoce nuestras especialidades en salud animal.',
      link: '/specialties'
    },
    {
      img: 'assets/images/img-exotic-pet.png',
      titulo: 'Animales Exóticos',
      texto: 'Atendemos también a animales exóticos.',
      link: '/exotic'
    },
    {
      img: 'assets/images/pet-house-Nosotros.png',
      titulo: 'Nosotros',
      texto: 'Conoce nuestro equipo y nuestra historia.',
      link: '/whoweare'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.animateStats();
  }

  // Animación de estadísticas
  animateStats(): void {
    setTimeout(() => {
      const counters = document.querySelectorAll(".stat-number, .stat-percentage");

      counters.forEach(counter => {
        const el = counter as HTMLElement;
        const target = +el.getAttribute("data-target")!;
        let current = 0;
        const increment = target / 100;

        const update = () => {
          if (current < target) {
            current += increment;
            el.innerText = el.classList.contains("stat-percentage")
              ? `⬆ ${Math.ceil(current)}%`
              : `${Math.ceil(current)}`;
            setTimeout(update, 20);
          } else {
            el.innerText = el.classList.contains("stat-percentage")
              ? `⬆ ${target}%`
              : `${target}`;
          }
        };

        update();
      });
    }, 100); // pequeña pausa al iniciar
  }
}
