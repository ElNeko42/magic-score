import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {
  diceValue: number = 1;

  ngOnInit() {
    this.rollDice();
  }

  rollDice() {
    const interval = setInterval(() => {
      this.diceValue = Math.floor(Math.random() * 6) + 1;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      this.diceValue = Math.floor(Math.random() * 6) + 1;
      // Aquí puedes agregar un evento para detectar el toque en la pantalla y volver al componente principal
    }, 1000);
  }
}
