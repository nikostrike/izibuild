import { Component } from '@angular/core';
import { SuggestedBuildComponent } from '../suggested-build/suggested-build.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-builds-container',
  imports: [SuggestedBuildComponent, CommonModule],
  templateUrl: './builds-container.component.html',
  styleUrl: './builds-container.component.css',
})
export class BuildsContainerComponent {
  gamingBuild = {
    tiers: [
      {
        name: 'Gama Baja',
        components: [
          { name: 'CPU', specs: 'Intel Core i3-12100F' },
          { name: 'GPU', specs: 'NVIDIA GTX 1650' },
          { name: 'RAM', specs: '8GB DDR4 3200MHz' },
          { name: 'Almacenamiento', specs: 'SSD 256GB' },
          { name: 'Placa Base', specs: 'ASRock B560M' },
          { name: 'Fuente de Poder', specs: '450W 80 Plus Bronze' },
          { name: 'Gabinete', specs: 'Cooler Master Q300L' },
        ],
        price: 700,
      },
      {
        name: 'Gama Media',
        components: [
          { name: 'CPU', specs: 'Intel Core i5-12600K' },
          { name: 'GPU', specs: 'NVIDIA RTX 3060' },
          { name: 'RAM', specs: '16GB DDR4 3600MHz' },
          { name: 'Almacenamiento', specs: 'SSD 512GB + HDD 1TB' },
          { name: 'Placa Base', specs: 'MSI MAG B660M' },
          { name: 'Fuente de Poder', specs: '650W 80 Plus Gold' },
          { name: 'Gabinete', specs: 'NZXT H510' },
        ],
        price: 1200,
      },
      {
        name: 'Gama Alta',
        components: [
          { name: 'CPU', specs: 'Intel Core i7-13700K' },
          { name: 'GPU', specs: 'NVIDIA RTX 4070' },
          { name: 'RAM', specs: '32GB DDR5 6000MHz' },
          { name: 'Almacenamiento', specs: 'SSD 1TB + HDD 2TB' },
          { name: 'Placa Base', specs: 'ASUS ROG Strix Z690' },
          { name: 'Fuente de Poder', specs: '750W 80 Plus Platinum' },
          { name: 'Gabinete', specs: 'Corsair 4000D' },
        ],
        price: 2000,
      },
    ],
  };

  officeBuild = {
    tiers: [
      {
        name: 'Gama Baja',
        components: [
          { name: 'CPU', specs: 'AMD Ryzen 3 3200G' },
          { name: 'GPU', specs: 'Integrada Vega 8' },
          { name: 'RAM', specs: '8GB DDR4 2400MHz' },
          { name: 'Almacenamiento', specs: 'SSD 256GB' },
          { name: 'Placa Base', specs: 'MSI A320M' },
          { name: 'Fuente de Poder', specs: '400W' },
          { name: 'Gabinete', specs: 'Thermaltake Versa H15' },
        ],
        price: 400,
      },
      {
        name: 'Gama Media',
        components: [
          { name: 'CPU', specs: 'AMD Ryzen 5 5600G' },
          { name: 'GPU', specs: 'Integrada Vega 7' },
          { name: 'RAM', specs: '16GB DDR4 2666MHz' },
          { name: 'Almacenamiento', specs: 'SSD 512GB' },
          { name: 'Placa Base', specs: 'ASUS TUF B450M' },
          { name: 'Fuente de Poder', specs: '500W 80 Plus Bronze' },
          { name: 'Gabinete', specs: 'Cooler Master MasterBox Q300L' },
        ],
        price: 800,
      },
      {
        name: 'Gama Alta',
        components: [
          { name: 'CPU', specs: 'AMD Ryzen 7 5800X' },
          { name: 'GPU', specs: 'NVIDIA GTX 1660 Ti' },
          { name: 'RAM', specs: '32GB DDR4 3200MHz' },
          { name: 'Almacenamiento', specs: 'SSD 1TB + HDD 2TB' },
          { name: 'Placa Base', specs: 'Gigabyte X570 AORUS Elite' },
          { name: 'Fuente de Poder', specs: '650W 80 Plus Gold' },
          { name: 'Gabinete', specs: 'Fractal Design Meshify C' },
        ],
        price: 1400,
      },
    ],
  };

  editingBuild = {
    tiers: [
      {
        name: 'Gama Baja',
        components: [
          { name: 'CPU', specs: 'Intel Core i5-11400F' },
          { name: 'GPU', specs: 'NVIDIA GTX 1660 Super' },
          { name: 'RAM', specs: '16GB DDR4 2666MHz' },
          { name: 'Almacenamiento', specs: 'SSD 512GB' },
          { name: 'Placa Base', specs: 'ASUS B560M' },
          { name: 'Fuente de Poder', specs: '500W 80 Plus Bronze' },
          { name: 'Gabinete', specs: 'Corsair 275R' },
        ],
        price: 1000,
      },
      {
        name: 'Gama Media',
        components: [
          { name: 'CPU', specs: 'Intel Core i7-12700K' },
          { name: 'GPU', specs: 'NVIDIA RTX 3060 Ti' },
          { name: 'RAM', specs: '32GB DDR4 3200MHz' },
          { name: 'Almacenamiento', specs: 'SSD 1TB + HDD 2TB' },
          { name: 'Placa Base', specs: 'MSI MPG Z590' },
          { name: 'Fuente de Poder', specs: '650W 80 Plus Gold' },
          { name: 'Gabinete', specs: 'NZXT H510 Elite' },
        ],
        price: 1800,
      },
      {
        name: 'Gama Alta',
        components: [
          { name: 'CPU', specs: 'AMD Ryzen 9 7900X' },
          { name: 'GPU', specs: 'NVIDIA RTX 4080' },
          { name: 'RAM', specs: '64GB DDR5 5600MHz' },
          { name: 'Almacenamiento', specs: 'SSD 2TB + HDD 4TB' },
          { name: 'Placa Base', specs: 'MSI MEG X570' },
          { name: 'Fuente de Poder', specs: '850W 80 Plus Platinum' },
          { name: 'Gabinete', specs: 'Corsair 5000X' },
        ],
        price: 3000,
      },
    ],
  };
}
