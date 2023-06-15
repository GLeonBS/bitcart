import { Component } from '@angular/core';
import { CartService } from '../services/cart.service'
import { ItemsPipe } from '../pipes/items.pipe'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(readonly cartService: CartService){}
  items = this.cartService.items$
  
}
