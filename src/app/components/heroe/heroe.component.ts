import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../model/heroe.model';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;
  constructor(
    private _activateRoute: ActivatedRoute,

    private _heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params) => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }
}
