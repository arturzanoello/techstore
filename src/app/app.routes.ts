import { Routes } from '@angular/router';
import { ProductsList } from './features/products/pages/products-list/products-list';
import { Cart } from '@/features/cart/pages/cart';
import { Checkout } from '@/features/checkout/pages/checkout';
import { About } from '@/features/about/about';

export const routes: Routes = [
  {
    path: '',
    component: ProductsList,
  },
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: 'checkout',
    component: Checkout,
  },
  {
    path: 'about',
    component: About,
  },
];
