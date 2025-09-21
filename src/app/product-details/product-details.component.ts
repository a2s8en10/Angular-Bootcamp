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
  constructor(
    private activeRoute: ActivatedRoute,
    private product: ProductService
  ) {}
  ngOnInit(): void {
    let value = this.activeRoute.snapshot.paramMap.get('productId');
    console.log(value);
    value &&
      this.product.getProducts(value).subscribe((result) => {
        console.log(result);
        this.showDetail = result;
      });
  }

  increase(val: string) {
    if (this.productQuantity < 20 && val == 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val == 'minus') {
      this.productQuantity -= 1;
    }
  }
}
