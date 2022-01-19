import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperArchComponent } from './stepper-arch.component';

describe('StepperArchComponent', () => {
  let component: StepperArchComponent;
  let fixture: ComponentFixture<StepperArchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperArchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperArchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
