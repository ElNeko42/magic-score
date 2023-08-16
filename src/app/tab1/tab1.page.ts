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
    blue: '#00F6FE',
    black: '#000000',
    yellow: '#FFFF00',
    purple: '#800080',
    pink: '#FFC0CB'
  };
  textColor1: string = 'white';
  textColor2: string = 'white';
  colorSave1: string = 'white'
  colorSave2: string = 'white'
  iconColor1: string = 'white';
  iconColor2: string = 'white';
  vidaCambioTextColor1: string = 'white';
  vidaCambioTextColor2: string = 'white';
  contadoresJugador1 = {
    life: 20,
    poison: 0,
    edh: 0,
    energy: 0
  };
  contadoresJugador2 = {
    life: 20,
    poison: 0,
    edh: 0,
    energy: 0
  };
  selectedCounterJugador1: 'life' | 'poison' | 'edh' | 'energy' = 'life';
  selectedCounter2: 'life' | 'poison' | 'edh' | 'energy' = 'life';
  mostrarCalculadoraJugador1: boolean = false;
  mostrarCalculadoraJugador2: boolean = false;
  showDropdown = false;
  isDropdownOpen = false;


  constructor() { }

  aumentarVida(jugador: number) {
    if (jugador === 1) {
      this.actualizarContador(jugador, this.selectedCounterJugador1, 1);
    } else {
      this.actualizarContador(jugador, this.selectedCounter2, 1);
    }
  }

  disminuirVida(jugador: number) {
    if (jugador === 1) {
      this.actualizarContador(jugador, this.selectedCounterJugador1, -1);
    } else {
      this.actualizarContador(jugador, this.selectedCounter2, -1);
    }
  }

  actualizarContador(jugador: number, counterType: 'life' | 'poison' | 'edh' | 'energy', change: number) {
    if (jugador === 1) {
      if (counterType === 'life') {
        this.vidaJugador1 += change;
        if (this.vidaJugador1 <= 0) {
          this.textColor1 = 'red';
        } else {
          this.textColor1 = this.colorSave1;
        }
      } else if (counterType === 'poison') {
        this.contadoresJugador1.poison += change;
        if (this.contadoresJugador1.poison < 0) {
          this.contadoresJugador1.poison = 0;
        } else if (this.contadoresJugador1.poison > 10) {
          this.contadoresJugador1.poison = 10;
        }
      } else if (counterType === 'edh') {
        this.contadoresJugador1.edh += change;
        if (this.contadoresJugador1.edh < 0) {
          this.contadoresJugador1.edh = 0;
        } else if (this.contadoresJugador1.edh > 21) {
          this.contadoresJugador1.edh = 21;
        }
      }
      this.handleLifeChange(jugador, change);
    } else {
      if (counterType === 'life') {
        this.vidaJugador2 += change;
        if (this.vidaJugador2 <= 0) {
          this.textColor2 = 'red';
        } else {
          this.textColor2 = this.colorSave2;
        }
      } else if (counterType === 'poison') {
        this.contadoresJugador2.poison += change;
        if (this.contadoresJugador2.poison < 0) {
          this.contadoresJugador2.poison = 0;
        } else if (this.contadoresJugador2.poison > 10) {
          this.contadoresJugador2.poison = 10;
        }
      } else if (counterType === 'edh') {
        this.contadoresJugador2.edh += change;
        if (this.contadoresJugador2.edh < 0) {
          this.contadoresJugador2.edh = 0;
        } else if (this.contadoresJugador2.edh > 21) {
          this.contadoresJugador2.edh = 21;
        }
      } else if (counterType === 'energy') {
        if (jugador === 1) {
          this.contadoresJugador1.energy += change;
        } else {
          this.contadoresJugador2.energy += change;

        }
      }

      this.handleLifeChange(jugador, change);
    }
  }


  toggleColores(jugador: number) {
    if (jugador === 1) {
      this.mostrarColoresJugador1 = !this.mostrarColoresJugador1;
      this.mostrarCalculadoraJugador1 = false
    } else {
      this.mostrarColoresJugador2 = !this.mostrarColoresJugador2;
      this.mostrarCalculadoraJugador2 = false
    }
  }
  changePlayerColor(player: number, color: string) {
    const textColor = (color === this.colors.white || color === this.colors.yellow) ? 'black' : 'white';
    if (player === 1) {
      const player1 = document.querySelector('.player1') as HTMLElement;
      if (player1) {
        player1.style.backgroundColor = color;

      }
    } else {
      const player2 = document.querySelector('.player2') as HTMLElement;
      if (player2) {
        player2.style.backgroundColor = color;

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
      }, 500);
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
      }, 500);
      // Mostrar la animación
      const vidaCambioElement = document.querySelector('.vidaCambioJugador1');
      if (vidaCambioElement) {
        vidaCambioElement.classList.add('show-animation');
      } else {
      }
    }
  }
  handleCounterChange(event: { jugador: number, counterType: 'life' | 'poison' | 'edh' | 'energy' }) {
    if (event.jugador === 1) {
      this.selectedCounterJugador1 = event.counterType;
    } else if (event.jugador === 2) {
      this.selectedCounter2 = event.counterType;
    }
  }
  toggleCalculadora(jugador: number): void {
    if (jugador === 1) {
      this.mostrarCalculadoraJugador1 = !this.mostrarCalculadoraJugador1;
      this.mostrarColoresJugador1 = false; // Asegurarse de que los colores no se muestren
    }
    else if (jugador === 2) {
      this.mostrarCalculadoraJugador2 = !this.mostrarCalculadoraJugador2;
      this.mostrarColoresJugador2 = false; // Asegurarse de que los colores no se muestren
    }
    // Puedes añadir lógica similar para otros jugadores si es necesario
  }
  handleSomeOutput(event: any): void {
    // Lógica para manejar el evento de salida
  }
  actualizarVida(jugador: number, nuevaVida: number) {
    if (jugador === 1) {
      this.vidaJugador1 = nuevaVida;
    } else if (jugador === 2) {
      this.vidaJugador2 = nuevaVida;
    }
    this.mostrarCalculadoraJugador1 = false;
    this.mostrarCalculadoraJugador2 = false;
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  
}
