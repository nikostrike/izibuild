import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SearchBarComponent } from '../shared/components/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-product',
  imports: [HeaderComponent, SearchBarComponent, CommonModule],
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.css',
})
export class SearchProductComponent {
  isSidebarHidden = false;
  selectedComponents = [
    // Ejemplo de componentes seleccionados
    { name: 'CPU: Intel Core i5-12600K' },
    { name: 'GPU: NVIDIA RTX 3060' },
    { name: 'RAM: 16GB DDR4 3600MHz' },
  ];

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }
}
