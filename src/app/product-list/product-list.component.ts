import { Component, Input } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {
  products = products;
  notify: any;

  share(price: number) {
    window.alert('The product has been shared at a price of ' + price + '€');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
