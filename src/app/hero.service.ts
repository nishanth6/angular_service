import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // constructor() { }
  constructor(private messageService5: MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // getting data from the server with the RxJS of() function.
  getHeroes(): Observable<Hero[]> {
    this.messageService5.add('HeroService: fetched heroes');
    console.log('hdsfsdfsdfsffsfdf');
    return of(HEROES);
  }
  
}
