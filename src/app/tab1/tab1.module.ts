import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { OpcionesComponent } from '../modales/opciones/opciones.component';
import { ColoresComponent } from '../colores/colores.component'; // Asegúrate de ajustar la ruta al archivo del componente


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    
  ],
  declarations: [Tab1Page, OpcionesComponent,ColoresComponent ],
})
export class Tab1PageModule {}
