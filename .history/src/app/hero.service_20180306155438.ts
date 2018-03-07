import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';



@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHero(): Observable<Hero[]>{
    //TODO -  send the message after fetching the heroes
    this.messageService.add('Heros fetched');
    return of (HEROES);
  }
}
