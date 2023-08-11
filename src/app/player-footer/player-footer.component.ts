import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-footer',
  templateUrl: './player-footer.component.html',
  styleUrls: ['./player-footer.component.scss']
})
export class PlayerFooterComponent implements OnInit {
  veneno: number = 0;
  danoComandante: number = 0;
  counterOptions: number[] = Array.from({length: 21}, (_, i) => i);  // Opciones del 0 al 20

  constructor() {}

  ngOnInit(): void {}
}
