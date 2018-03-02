import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { allCountries } from '../mock-heroes';
import { allStates } from '../mock-heroes';
import { allCities } from '../mock-heroes';




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
      

  //   clickHero: Hero;

  //   heroes: Hero[];

  //   constructor(private heroService: HeroService) { }


  //   onSelect(hero: Hero): void {
  //     this.clickHero = hero;
  //   }

  //   getHeroes(): void {
  //     this.heroes = this.heroService.getHero();
  //   }

  // ngOnInit() {
  //   this.getHeroes();
  // }

  constructor() { }

  ngOnInit() {
  }

  Controller($scope) {
    $scope.country = {};
    $scope.state = {};
    $scope.city = {};

    $scope.countries = allCountries;

    $scope.$watch('country', function () {
        $scope.states = allStates.filter(function (s) {
            return s.CountryId == $scope.country.Id;
        });
        $scope.city = {};
        $scope.state = {};
        $scope.cities = [];
    });
  
    $scope.$watch('state', function () {
        $scope.cities = allCities.filter(function (c) {
            return c.StateId == $scope.state.Id;
        });
        $scope.city = {};
    });
  }
 
}
