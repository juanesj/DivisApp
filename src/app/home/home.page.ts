import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  quetzales: number = 0;
  resultado: number | null = null;

  convertir() {
    const tasaCambio = 8; // 8 Quetzales por Dólar
    this.resultado = this.quetzales / tasaCambio;
  }
}
