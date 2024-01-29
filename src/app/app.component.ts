import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // isContentExpanded = false;
  isContentExpanded: boolean[] = [false, false, false, false];
  accordion(index: number) {
    // this.isContentExpanded = !this.isContentExpanded;
    this.isContentExpanded[index] = !this.isContentExpanded[index];
  }
}
