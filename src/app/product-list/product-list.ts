import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  product = [
    { id: 1, name: "Laptop", price: 50000, stock: 1 },
    { id: 2, name: "Iphone", price: 25000, stock: 0 },
    { id: 3, name: "Headphone", price: 2000, stock: 1 },
    { id: 4, name: "Camera", price: 10000, stock: 1 },
    { id: 5, name: "Headphone", price: 100000, stock: 0 }
  ];

  cart: any[] = [];
  searchText: string = '';   // <-- THIS fixes the error

  addToCart(item: any) {
    if (item.stock > 0) {
      const existing = this.cart.find(p => p.id === item.id);
      if (existing) {
        existing.quantity++;
      } else {
        this.cart.push({ ...item, quantity: 1 });
      }
      item.stock--;
    }
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  get totalPrice() {
    return this.cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
  }

  get filteredProducts() {
    const term = this.searchText.toLowerCase();
    return this.product.filter(p => p.name.toLowerCase().includes(term));
  }
}
