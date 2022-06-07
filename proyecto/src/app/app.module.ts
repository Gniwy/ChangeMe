import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { SliderComponent } from './components/slider/slider.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SliderCardComponent } from './components/slider-card/slider-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    SliderComponent,
    InicioComponent,
    SliderCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
