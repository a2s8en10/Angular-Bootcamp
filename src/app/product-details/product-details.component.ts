import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  showDetail: undefined | product;
  productQuantity: number = 1;
  removeCart = false;
  constructor(
    private activeRoute: ActivatedRoute,
    private product: ProductService
  ) {}
  ngOnInit(): void {
    let value = this.activeRoute.snapshot.paramMap.get('productId');
    // console.log(value);
    value &&
      this.product.getProducts(value).subscribe((result) => {
        // console.log(result);
        this.showDetail = result;
      });

    let cartData = localStorage.getItem('localCart');
    if (value && cartData) {
      let item = JSON.parse(cartData);
      item = item.filter((item: product) => value == item.id.toString());
      if (item.length) {
        this.removeCart = true;
      } else {
        this.removeCart = false;
      }
    }
  }

  increase(val: string) {
    if (this.productQuantity < 20 && val == 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val == 'minus') {
      this.productQuantity -= 1;
    }
  }

  AddToCart() {
    if (this.showDetail) {
      this.showDetail.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        console.log(this.showDetail);
        this.product.localAddToCart(this.showDetail);
        this.removeCart = true;
      }
    }
  }
  removeToCart(value: number) {
    this.product.removeItemFromCart(value);
    this.removeCart = false;
    setTimeout(() => {
      alert("Cart Item Remove Successfully");
    }, 1000);
  }
}
