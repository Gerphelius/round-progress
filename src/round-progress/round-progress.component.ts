import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-round-progress',
  templateUrl: './round-progress.component.html',
  styleUrls: ['./round-progress.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class RoundProgressComponent implements AfterViewInit {
  public progress = 0;

  ngAfterViewInit() {
    interval(2000).subscribe(() => {
      const min = Math.ceil(0);
      const max = Math.floor(100);

      this.progress = Math.floor(Math.random() * (max - min + 1) + min);
    });
  }
}
