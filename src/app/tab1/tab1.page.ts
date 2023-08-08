import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { OpcionesComponent } from '../modales/opciones/opciones.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  vidaJugador1: number = 20;
  vidaJugador2: number = 20;

  constructor(private modalController: ModalController) {}

  aumentarVida(jugador: number) {
    if (jugador === 1) {
      this.vidaJugador1++;
      this.animateLifeChange('.player1');
    } else {
      this.vidaJugador2++;
      this.animateLifeChange('.player2');
    }
  }

  disminuirVida(jugador: number, event: Event) {
    if (jugador === 1) {
      this.vidaJugador1--;
      this.animateLifeChange('.player1');
    } else {
      this.vidaJugador2--;
      this.animateLifeChange('.player2');
    }
  }

  animateLifeChange(selector: string) {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.add('life-changed');
      setTimeout(() => {
        element.classList.remove('life-changed');
      }, 500);
    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: OpcionesComponent
    });
    return await modal.present();
  }
}
