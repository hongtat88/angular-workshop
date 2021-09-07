import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Hero } from "./hero.model";
import { HeroService } from "./hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent {
  heroes$ = this.heroService.heroes$;
  newHero = new Hero();
  displayedColumns: string[] = ["name"];

  constructor(private heroService: HeroService) {}

  addHero(heroForm: NgForm): void {
    this.heroService.addHero(heroForm.value.name);
  }
}
