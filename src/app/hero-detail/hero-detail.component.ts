import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  @Input() hero: Hero;

  heroes3:Hero[];
  // getHeroes(): void {
  //   this.heroes3 = this.heroService.getHeroes();
  // }

  // Observables
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes3 = heroes);
  }

  ngOnInit() {
    this.getHeroes;
  }

}
