import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
// hero: Hero = {
//     id: 1,
//     name: 'Windstorm'
// }
      

    clickHero: Hero;

    heroes: Hero[];

    constructor(private heroService: HeroService) { }


    onSelect(hero: Hero): void {
      this.clickHero = hero;
    }

    getHeroes(): void {
      this.heroes = this.heroService.getHero();
    }

  ngOnInit() {
    this.getHeroes();
  }
 
}
