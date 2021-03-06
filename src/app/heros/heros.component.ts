import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


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

    heroes = HEROES;

    clickHero: Hero;

    onSelect(hero: Hero): void {
      this.clickHero = hero;
    }

  constructor() { }

  ngOnInit() {
  }

}
