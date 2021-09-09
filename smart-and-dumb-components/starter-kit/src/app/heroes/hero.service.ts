import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Hero } from "./hero.model";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  heroes: Hero[] = [
    { name: "Hulk" },
    { name: "Iron Man" },
    { name: "Black Widow" },
    { name: "Captain America" },
    { name: "Thor" },
  ];

  private heroesSubject = new BehaviorSubject<Hero[]>(this.heroes);
  heroes$ = this.heroesSubject.asObservable();

  addHero(name: string): void {
    this.heroesSubject.next([...this.heroesSubject.value, { name } as Hero]);
  }
}
