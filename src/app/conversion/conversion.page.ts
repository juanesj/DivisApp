import { Component } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage {
  quetzales: number = 0;
  resultado: number | null = null;

  convertir() {
    const tasaCambio = 8; // 8 Quetzales por Dólar
    this.resultado = this.quetzales / tasaCambio;
  }
}
