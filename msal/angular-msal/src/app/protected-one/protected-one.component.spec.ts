import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedOneComponent } from './protected-one.component';

describe('ProtectedOneComponent', () => {
  let component: ProtectedOneComponent;
  let fixture: ComponentFixture<ProtectedOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectedOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
