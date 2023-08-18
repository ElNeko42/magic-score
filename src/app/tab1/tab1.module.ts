import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { OpcionesComponent } from '../modales/opciones/opciones.component';
import { ColoresComponent } from '../colores/colores.component';
import { PlayerFooterComponent } from '../player-footer/player-footer.component'
import { CalculadoraComponent } from '../calculadora/calculadora.component'
import { DiceComponent } from '../components/dice/dice.component'


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,

  ],
  declarations: [
    Tab1Page,
    OpcionesComponent,
    ColoresComponent,
    PlayerFooterComponent,
    CalculadoraComponent,
    DiceComponent],
})
export class Tab1PageModule { }
