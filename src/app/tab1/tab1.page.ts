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
  colors = {
    orange: '#FFA500',
    white: '#FFFFFF',
    green: '#008000',
    red: '#900000',
    blue: '#0000FF',
    black: '#000000',
    yellow: '#FFFF00',
    purple: '#800080',
    pink: '#FFC0CB'
};
textColor1: string = 'white';
textColor2: string = 'white';
colorSave1: string='white'
colorSave2: string='white'
iconColor1: string = 'white';
iconColor2: string = 'white';

  constructor() {}

  aumentarVida(jugador: number) {
    if (jugador === 1) {
      this.vidaJugador1++;
      if(this.vidaJugador1>=1){
        this.textColor1=this.colorSave1;
      }
    } else {
      this.vidaJugador2++;
      if(this.vidaJugador2>=1){
        this.textColor2=this.colorSave2;
      }
    }
  }

  disminuirVida(jugador: number) {
    if (jugador === 1) {
        this.vidaJugador1--;
        if(this.vidaJugador1<=0){
          this.textColor1='red';
        }
    } else if (jugador === 2 ) {
        this.vidaJugador2--;
        if(this.vidaJugador2<=0){
          this.textColor2='red';
        }
    }
}

  toggleColores(jugador: number) {
    if (jugador === 1) {
      this.mostrarColoresJugador1 = !this.mostrarColoresJugador1;
    } else {
      this.mostrarColoresJugador2 = !this.mostrarColoresJugador2;
    }
  }
  changePlayerColor(player: number, color: string) {
    const textColor = (color === this.colors.white || color === this.colors.yellow) ? 'black' : 'white';
    if (player === 1) {
        const player1 = document.querySelector('.player1') as HTMLElement;
        if (player1) {
            player1.style.backgroundColor = color;
            this.textColor1 = textColor;
            this.colorSave1 =textColor;
            this.iconColor1 = textColor;
        }
    } else {
        const player2 = document.querySelector('.player2') as HTMLElement;
        if (player2) {
            player2.style.backgroundColor = color;
            this.textColor2 = textColor;
            this.colorSave2 =textColor;
            this.iconColor2 = textColor;
        }
    }
}

}
