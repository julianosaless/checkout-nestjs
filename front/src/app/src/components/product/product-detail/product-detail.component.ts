import { Component, OnInit, OnDestroy } from "@angular/core";

import { Product } from '../../../shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { take, tap } from 'rxjs/operators';
import Promotion from 'src/shared/models/promotion';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  product: Product;
  promotions: Promotion[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {
    this.product = new Product();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      const id = params.id;
      this.getProductDetail(id);
      this.getAllPromotions();
    });
  }

  getProductDetail(id: string): void {
    this.productService.getById(id)
      .pipe(
        tap(response => console.log(response)),
        take(1)
      )
      .subscribe(
        product => {
          this.product = product;
        },
        error => console.log(error));
  }

  getAllPromotions(): void {
    this.productService.getAllPromotions()
      .pipe(
        tap(response => console.log(response)),
        take(1)
      )
      .subscribe(
        promotions => {
          this.promotions = promotions;
        },
        error => console.log(error));
  }

  save(product: Product): void {

    const promotionId = product.promotionId === null ? '' : product.promotionId;

    this.productService.changePromotion(product.id, promotionId)
      .subscribe(error => console.log(error));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
