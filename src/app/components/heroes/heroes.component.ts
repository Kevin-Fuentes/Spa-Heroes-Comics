import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../model/heroe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  // tslint:disable-next-line:variable-name
  constructor(private _heroesService: HeroesService, private _router: Router) {}

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    
  }
  // tslint:disable-next-line:typedef
  verHeroe(id: number) {
   this._router.navigate(['/heroe', id]);
  }
}
