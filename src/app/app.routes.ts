import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { ProductList } from './product-list/product-list';

export const routes: Routes = [
  {path: "", component: ProductList},
  {path: "cart", component: Cart}
];
