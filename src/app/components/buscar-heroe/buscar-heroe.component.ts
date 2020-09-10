import { Component, OnInit,Input } from '@angular/core';
import {Heroe} from '../../model/heroe.model'
import { Router,ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: [
  ]
})
export class BuscarHeroeComponent implements OnInit {
  @Input() heroes:Heroe[]
  @Input() termino:string
  constructor(private _router:Router, private _heroesService:HeroesService,  private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params=>{
      this.termino = params['busqueda']
      this.heroes =  this._heroesService.buscarHeroes(this.termino)
     
    })
  }

  verHeroe(nombre: string) {
    this._router.navigate(['/heroe', nombre]);
   }
}
