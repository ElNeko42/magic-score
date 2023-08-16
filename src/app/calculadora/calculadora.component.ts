import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  inputValue: string = '';

  constructor() { }

  ngOnInit(): void { }


  addToInput(value: string): void {
    this.inputValue += value;
  }
  
  calculate(): void {
    try {
      this.inputValue = eval(this.inputValue);
    } catch (err) {
      this.inputValue = 'Error';
    }
  }
  
  clearInput(): void {
    this.inputValue = '';
  }
}

