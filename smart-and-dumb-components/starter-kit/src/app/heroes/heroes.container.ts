import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes-container',
  templateUrl: './heroes.container.html',
  styleUrls: ['./heroes.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesContainer {
  heroes$ = this.heroService.heroes$;

  constructor(private heroService: HeroService) {}

  addHero(heroName: string): void {
    this.heroService.addHero(heroName);
  }
}
