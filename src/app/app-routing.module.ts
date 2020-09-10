import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';


const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'heroes', component: HeroesComponent},
  {path : 'about', component: AboutComponent},
  {path : 'heroe/:id', component: HeroeComponent},
  {path : 'heroes/:busqueda', component: BuscarHeroeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
