import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { allCountries } from './mock-heroes';
import { allStates } from './mock-heroes';
import { allCities } from './mock-heroes';
// import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  // getHero(): Hero[] {
  //   return HEROES;
  // }
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
