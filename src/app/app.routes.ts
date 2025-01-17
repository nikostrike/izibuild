import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'search-product',
    loadComponent: () =>
      import('./search-product/search-product.component').then(
        (m) => m.SearchProductComponent
      ),
  },
  {
    path: 'product-detail',
    loadComponent: () =>
      import('./product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent
      ),
  },
  {
    path: 'product-list',
    loadComponent: () =>
      import('./product-list/product-list.component').then(
        (m) => m.ProductListComponent
      ),
  },
];
