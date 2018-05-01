import { HeroesService } from './heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes;
  selectedHero;
  constructor(service: HeroesService) { 
    this.heroes = service.getHeroes();
   }
  selectHero(hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
