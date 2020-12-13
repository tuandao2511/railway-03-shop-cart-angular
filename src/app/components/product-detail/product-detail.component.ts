import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { ProductInfo } from 'src/app/model/product-info';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: ProductInfo;
  constructor(private router: ActivatedRoute, private productService: ProductService) { 

  }

  ngOnInit(): void {
    // this.router.params.subscribe(function(res: any) {

    // })
    this.router.params.subscribe((res: any) =>{
      const id = res.id;
      console.log('id ' + id);
      this.getProductDetail(id);
    })

  }

  getProductDetail(id: string) {
    this.productService.getProductDetail(id).subscribe(productInfo => {
        console.log('productInfo ' + JSON.stringify(productInfo));
        
        this.product = productInfo;
    }, err => {
      console.log('err ' + err)
    })
  }

}
