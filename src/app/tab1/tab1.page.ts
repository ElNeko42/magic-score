import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  vidaJugador1: number = 20;
  vidaJugador2: number = 20;
  vidaCambioJugador1: number = 0;
  vidaCambioJugador2: number = 0;
  timeoutJugador1: any;
  timeoutJugador2: any;
  mostrarColoresJugador1: boolean = false;
  mostrarColoresJugador2: boolean = false;
  animationTimeoutJugador1: any;
  animationTimeoutJugador2: any;
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
      if (this.vidaJugador1 >= 1) {
        this.textColor1 = this.colorSave1;
      }
      this.handleLifeChange(jugador, 1);
    } else {
      this.vidaJugador2++;
      if (this.vidaJugador2 >= 1) {
        this.textColor2 = this.colorSave2;
      }
      this.handleLifeChange(jugador, 1);
    }
  }
  
  disminuirVida(jugador: number) {
    if (jugador === 1) {
      this.vidaJugador1--;
      if (this.vidaJugador1 <= 0) {
        this.textColor1 = 'red';
      }
      this.handleLifeChange(jugador, -1);
    } else if (jugador === 2) {
      this.vidaJugador2--;
      if (this.vidaJugador2 <= 0) {
        this.textColor2 = 'red';
      }
      this.handleLifeChange(jugador, -1);
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
private handleLifeChange(jugador: number, change: number) {
  if (jugador === 1) {
    this.vidaCambioJugador1 += change;
    clearTimeout(this.animationTimeoutJugador1);
    this.animationTimeoutJugador1 = setTimeout(() => {
      this.vidaCambioJugador1 = 0;
      // Ocultar la animación
      const vidaCambioElement = document.querySelector('.vidaCambioJugador1');
      if (vidaCambioElement) {
        vidaCambioElement.classList.remove('show-animation');
      }
    }, 2000);
    // Mostrar la animación
    const vidaCambioElement = document.querySelector('.vidaCambioJugador1');
    if (vidaCambioElement) {
      vidaCambioElement.classList.add('show-animation');
    }
  } else {
    this.vidaCambioJugador2 += change;
    clearTimeout(this.animationTimeoutJugador2);
    this.animationTimeoutJugador2 = setTimeout(() => {
      this.vidaCambioJugador2 = 0;
 // Ocultar la animación
const vidaCambioElement = document.querySelector('.vidaCambioJugador1');
if (vidaCambioElement) {
  vidaCambioElement.classList.remove('show-animation');
}
    }, 2000);
   // Mostrar la animación
   const vidaCambioElement = document.querySelector('.vidaCambioJugador1');
   if (vidaCambioElement) {
     vidaCambioElement.classList.add('show-animation');
     console.log('Clase show-animation agregada');  // Agrega este log
   } else {
     console.log('Elemento vidaCambioJugador1 no encontrado');  // Agrega este log
   }
  }
}

}
