import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss']
})
export class ColoresComponent {

  colors: { [key: string]: string } = {
    orange: '#FFA500',
    white: '#FFFFFF',
    green: '#008000',
    red: '#FF0000',
    blue: '#0000FF',
    black: '#000000',
    yellow: '#FFFF00',
    purple: '#800080',
    pink: '#FFC0CB'
  };

  @Output() selectedColor = new EventEmitter<string>();

  setColor(color: keyof typeof this.colors) {
    this.selectedColor.emit(this.colors[color]);
}

  get colorKeys(): string[] {
    return Object.keys(this.colors);
  }
}
