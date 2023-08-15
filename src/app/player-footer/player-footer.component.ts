import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-footer',
  templateUrl: './player-footer.component.html',
  styleUrls: ['./player-footer.component.scss']
})
// player-footer.component.ts

export class PlayerFooterComponent implements OnInit {

  selectedCounter: 'life' | 'poison' | 'edh' | 'energy' = 'life'; 

  // Emitir solo el tipo de contador
  @Output() counterChanged = new EventEmitter<{jugador: number, counterType: 'life' | 'poison' | 'edh' | 'energy'}>();
  @Input() jugador!: number;

  constructor() { }

  ngOnInit(): void {
  }


  selectCounter(counter: 'life' | 'poison' | 'edh' | 'energy') {
    this.selectedCounter = counter;  // Añade esta línea
    this.counterChanged.emit({jugador: this.jugador, counterType: counter});
  }
  
}

