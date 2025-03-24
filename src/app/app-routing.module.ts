import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SpecialtiesComponent } from './pages/specialties/specialties.component'; // importa tu componente
import { ExoticComponent } from './pages/exotic/exotic.component';
import { WhoweareComponent } from './pages/whoweare/whoweare.component';
import { ServicesComponent } from './pages/services/services.component'; 
const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz
  { path: 'specialties', component: SpecialtiesComponent }, // Ruta de especialidades
  { path: 'exotic', component: ExoticComponent },
  { path: 'whoweare', component: WhoweareComponent },
  { path: 'services', component: ServicesComponent },
  // Puedes agregar más rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
