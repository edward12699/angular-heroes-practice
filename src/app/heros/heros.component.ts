import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  heroes: Hero[];
  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}
