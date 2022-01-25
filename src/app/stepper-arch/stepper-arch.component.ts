import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

export interface stepperConfig {
  selectedIndex: number,
  isDisableRipple: boolean,
  isLinear: boolean
}

@Component({
  selector: 'app-stepper-arch',
  templateUrl: './stepper-arch.component.html',
  styleUrls: ['./stepper-arch.component.scss']
})
export class StepperArchComponent implements OnInit, AfterViewInit {
  @ViewChild("stepper", { static: false }) stepper!: MatStepper;

  public readonly STEPPER_CONFIG: stepperConfig = {
    selectedIndex: 0,
    isDisableRipple: true,
    isLinear: true
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  // TODO - Will work on selected index
  ngAfterViewInit(): void {
    this.stepper.selectedIndex = this.STEPPER_CONFIG.selectedIndex;
    this.cdr.detectChanges();
  }

}
