import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  vidaJugador1: number = 20;
  vidaJugador2: number = 20;

  constructor() {}

  disminuirVida(jugador: number) {
    if (jugador === 1) {
      this.vidaJugador1--;
    } else {
      this.vidaJugador2--;
    }
    this.lifeChanged(jugador);
  }

  aumentarVida(jugador: number) {
    if (jugador === 1) {
      this.vidaJugador1++;
    } else {
      this.vidaJugador2++;
    }
    this.lifeChanged(jugador);
  }

  lifeChanged(player: number) {
    if (player === 1) {
        const player1Element = document.querySelector('.player1');
        if (player1Element) {
            player1Element.classList.add('life-changed');
            setTimeout(() => {
                player1Element.classList.remove('life-changed');
            }, 300);
        }
    } else {
        const player2Element = document.querySelector('.player2');
        if (player2Element) {
            player2Element.classList.add('life-changed');
            setTimeout(() => {
                player2Element.classList.remove('life-changed');
            }, 300);
        }
    }
}

}
