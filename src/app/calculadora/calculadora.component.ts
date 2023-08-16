import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  @Input() vidaActual: number=0;
  @Output() nuevaVida = new EventEmitter<number>();
  inputValue: string = '';
  

  constructor() { }

  ngOnInit(): void {
    this.inputValue = this.vidaActual.toString();
  }

  addToInput(value: string): void {
    if (this.inputValue === this.vidaActual.toString()) {
        this.inputValue = value;
    } else {
        this.inputValue += value;
    }
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

  addLife(): void {
    // Convertimos la entrada a un número y sumamos a la vida actual
    const result = this.vidaActual + parseInt(this.inputValue, 10);
    this.inputValue = result.toString();
    this.nuevaVida.emit(result); // Emitimos el nuevo valor
}

subtractLife(): void {
    // Convertimos la entrada a un número y restamos de la vida actual
    const result = this.vidaActual - parseInt(this.inputValue, 10);
    this.inputValue = result.toString();
    this.nuevaVida.emit(result); // Emitimos el nuevo valor
}

}
