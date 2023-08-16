import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  inputValue: string = '';
  @Input() vidaActual: number = 0;
  @Output() nuevaVida = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.inputValue = this.vidaActual.toString();
  }

  addToInput(value: string): void {
    if (this.inputValue === this.vidaActual.toString()) {
      this.inputValue = '';
    }
    // Evitamos agregar el signo + o - al inputValue
    if (value !== '+' && value !== '-') {
      this.inputValue += value;
    }
  }

  addLife(): void {
    const result = Number(this.inputValue);
    this.nuevaVida.emit(this.vidaActual + result);
  }

  subtractLife(): void {
    const result = Number(this.inputValue);
    this.nuevaVida.emit(this.vidaActual - result);
  }
  
  clearInput(): void {
    this.inputValue = '';
  }
}
