import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SpecialtiesComponent } from './pages/specialties/specialties.component';
import { ExoticComponent } from './pages/exotic/exotic.component';
import { WhoweareComponent } from './pages/whoweare/whoweare.component';
import { ServicesComponent } from './pages/services/services.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpecialtiesComponent,
    ExoticComponent,
    WhoweareComponent,
    ServicesComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
