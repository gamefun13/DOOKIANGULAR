import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Carrusel
  currentIndex: number = 0;
  intervalId: any;
  slides = [
    {
      image: 'assets/images/vet1car.jpeg',
      title: 'Servicios especializados<br>a donde tu vayas',
      button: 'Nuestras especialidades',
      link: '/specialties'
    },
    {
      image: 'assets/images/vet2car.avif',
      title: 'Calidad y confianza<br>para tus mascotas',
      button: 'Conoce más',
      link: '/whoweare'
    },
    {
      image: 'assets/images/vet3car.webp',
      title: 'Cuidado integral<br>y atención 24/7',
      button: 'Reserva con nosotros',
      link: '/login'
    }
  ];

  // Testimonios
  testimonialTitle: string = 'Dooki es lo mejor';
  testimonialText: string = 'El servicio que le dieron a mi perrito Max fue excelente. Se resolvió la urgencia y salió todo bien 😊';
  selectedClient: string = 'Sergio Torres';

  clientList = [
    {
      name: 'Sergio Torres',
      image: 'assets/images/img-client-sergio-torres.png',
      title: 'Dooki es lo mejor',
      text: 'El servicio que le dieron a mi perrito Max fue excelente. Se resolvió la urgencia y salió todo bien 😊'
    },
    {
      name: 'Sabrina Carpenter',
      image: 'assets/images/img-client-sabrina.jpg',
      title: 'Agradecida con Dooki',
      text: 'Gracias a Dooki, mi gatita recibió un trato increíble. Muy recomendado 💕'
    },
    {
      name: 'Kendrick Lamar',
      image: 'assets/images/img-client-kendrick.jpg',
      title: 'No hay como Dooki',
      text: 'Servicio de primera clase, mi perro ahora está más saludable que nunca. 🔥'
    }
  ];

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  selectClient(name: string) {
    const client = this.clientList.find(c => c.name === name);
    if (!client || this.selectedClient === client.name) return;
  
    this.selectedClient = client.name;
  
    // Aplica opacidad 0 con animación
    const card = document.querySelector('.testimonial-card') as HTMLElement;
    if (card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(10px)';
  
      setTimeout(() => {
        this.testimonialTitle = client.title;
        this.testimonialText = client.text;
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 300); // Tiempo antes de reaparecer
    }
  }
  
}