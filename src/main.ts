import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { RoundProgressComponent } from './round-progress/round-progress.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RoundProgressComponent],
  template: `
    <app-round-progress />
  `,
})
export class App {}

bootstrapApplication(App);
