import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  vidaJugador1: number = 20;
  vidaJugador2: number = 20;

  mostrarColoresJugador1: boolean = false;
  mostrarColoresJugador2: boolean = false;

  constructor() {}

  aumentarVida(jugador: number) {
    if (jugador === 1) {
      this.vidaJugador1++;
    } else {
      this.vidaJugador2++;
    }
  }

  disminuirVida(jugador: number) {
    if (jugador === 1 && this.vidaJugador1 > 0) {
      this.vidaJugador1--;
    } else if (jugador === 2 && this.vidaJugador2 > 0) {
      this.vidaJugador2--;
    }
  }

  toggleColores(jugador: number) {
    if (jugador === 1) {
      this.mostrarColoresJugador1 = !this.mostrarColoresJugador1;
    } else {
      this.mostrarColoresJugador2 = !this.mostrarColoresJugador2;
    }
  }

  changePlayerColor(jugador: number, color: string) {
    const playerElement = jugador === 1 ? document.querySelector('.player1') : document.querySelector('.player2');
    if (playerElement instanceof HTMLElement) {
      playerElement.style.backgroundColor = color;
    }
  }
}
