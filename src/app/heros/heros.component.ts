import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({ selector: 'app-heroes', templateUrl: './heros.component.html', styleUrls: ['./heros.component.scss'] })
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
    this
      .heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero); // 本地管理吗？ 不直接再次刷新页面 因为这里是模拟的数据，所以刷新会重置数据，这里还是得本地模拟添加
      });
  }
  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe()
  }
}
