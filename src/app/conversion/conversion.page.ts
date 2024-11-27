import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage {
  quetzales: number = 0;
  resultado: number | null = null;
  ciudades: any[] = [];

  constructor(private http: HttpClient) {}

  convertir() {
    const tasaCambio = 8;
    this.resultado = this.quetzales / tasaCambio;

    // Obtener ciudades más bellas
    this.http.get('https://restcountries.com/v3.1/all').subscribe((data: any) => {
      // Filtrar ciudades por ejemplo
      this.ciudades = data.slice(0, 5).map((pais: any) => ({
        nombre: pais.name.common,
        capital: pais.capital ? pais.capital[0] : 'No disponible',
        bandera: pais.flags.png,
      }));
    });
  }
}

