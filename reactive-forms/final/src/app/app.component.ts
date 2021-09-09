import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GenericValidator } from './generic.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  heroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.heroForm = this.formBuilder.group({
      heroName: ['', Validators.required, GenericValidator.isHeroNameTaken],
      powerLevel: [0, GenericValidator.range(1, 10)],
      powersAndAbilities: this.formBuilder.array([]),
    });

    this.heroForm.patchValue({
      heroName: 'Vision',
      powerLevel: 7,
    });
  }

  get powersAndAbilities(): FormArray {
    return this.heroForm.get('powersAndAbilities') as FormArray;
  }

  addPowerAndAbility(): void {
    const powersAndAbilitiesFormControls = this.heroForm.get(
      'powersAndAbilities'
    ) as FormArray;

    powersAndAbilitiesFormControls.push(this.buildPowersAndAbilities());
  }

  buildPowersAndAbilities(): FormControl {
    return new FormControl('', Validators.required);
  }

  deletePowerAndAbility(index: number): void {
    const powersAndAbilitiesFormControls = this.heroForm.get(
      'powersAndAbilities'
    ) as FormArray;

    powersAndAbilitiesFormControls.removeAt(index);
  }

  addHero(): void {
    console.log(this.heroForm.value);
  }
}
