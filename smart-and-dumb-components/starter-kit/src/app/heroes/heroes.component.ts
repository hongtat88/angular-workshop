import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent {
  @Input() heroes!: Hero[] | null;

  @Output() onAddHero = new EventEmitter<string>();

  newHero = new Hero();
  displayedColumns: string[] = ['name'];

  addHero(heroForm: NgForm): void {
    this.onAddHero.emit(heroForm.value.name);
  }
}
