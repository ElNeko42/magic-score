import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ColoresComponent } from '../colores/colores.component';
import { OpcionesComponent } from '../modales/opciones/opciones.component';
import { PlayerFooterComponent } from '../player-footer/player-footer.component';
import { DiceComponent } from '../components/dice/dice.component'

@NgModule({
  declarations: [
    CalculadoraComponent,
    ColoresComponent,
    OpcionesComponent,
    PlayerFooterComponent,
    DiceComponent ,
    

  ],
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,
  ],
  exports: [
    CalculadoraComponent,
    ColoresComponent,
    OpcionesComponent,
    PlayerFooterComponent,
     DiceComponent,


  ]
})
export class SharedModule { }