import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MorpionComponent } from './pages/morpion/morpion.component';
import { SurpionComponent } from './pages/surpion/surpion.component';
import { SuperpionComponent } from './pages/superpion/superpion.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MorpionComponent,
    SurpionComponent,
    SuperpionComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
