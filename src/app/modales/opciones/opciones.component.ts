import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.scss'],
})
export class OpcionesComponent {

  constructor(private modalCtrl: ModalController) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}
