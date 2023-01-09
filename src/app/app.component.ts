import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() number1: number = 0;
  @Input() number2: number = 2;

  @Output() onCalculation = new EventEmitter<number>();

  onCalculate() {
    this.onCalculation.emit(+this.number1 + +this.number2);
  }
}
