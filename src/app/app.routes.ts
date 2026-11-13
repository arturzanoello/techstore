import { Routes } from '@angular/router';
import { ProductsList } from './features/products/pages/products-list/products-list';
import { Cart } from '@/features/cart/pages/cart';

export const routes: Routes = [
  {
    path: '',
    component: ProductsList,
  },
  {
    path: 'cart',
    component: Cart,
  },
];
