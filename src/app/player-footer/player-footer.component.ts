import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-footer',
  templateUrl: './player-footer.component.html',
  styleUrls: ['./player-footer.component.scss']
})
export class PlayerFooterComponent implements OnInit {

  @Input() jugador!: number;
  selectedCounter: 'life' | 'poison' | 'edh' = 'life';

  @Output() counterChanged = new EventEmitter<{jugador: number, counterType: 'life' | 'poison' | 'edh'}>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCounter(counter: 'life' | 'poison' | 'edh') {
    this.selectedCounter = counter;
    this.counterChanged.emit({jugador: this.jugador, counterType: this.selectedCounter}); // Modifica esta línea
  }
}
