import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MorpionComponent } from './pages/morpion/morpion.component';
import { SuperpionComponent } from './pages/superpion/superpion.component';
import { SurpionComponent } from './pages/surpion/surpion.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'morpion',
    component: MorpionComponent,
  },
  {
    path: 'superpion',
    component: SuperpionComponent,
  },
  {
    path: 'surpion',
    component: SurpionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
