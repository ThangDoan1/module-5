import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  output: number = 0;
  first: number = 0;
  second: number = 0;
  operator: string  = '+';
  onFirstChange($event: Event) {

    // @ts-ignore
    this.first = Number($event.target.value)
  }
  onSecondChange($event: Event) {
    // @ts-ignore
    this.second = Number($event.target.value)
  }
  onSelectChange($event: Event) {
    // @ts-ignore
    this.operator = $event.target.value;
  }
  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }
  ngOnInit(): void {
  }


}
