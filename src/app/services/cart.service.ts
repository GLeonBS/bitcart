import { BehaviorSubject, map } from 'rxjs';
import { Product } from '../interfaces/product';
import { Injectable } from '@angular/core';

@Injectable(
  {providedIn: 'root'}
)
export class CartService {
  #items = new BehaviorSubject<Product[]>([]);
  items$ = this.#items.asObservable();

  total$ = this.items$.pipe(map((items) => items.length));

  add(...product: Product[]) {
    this.#items.next([...this.#items.value, ...product]);
  }
}
