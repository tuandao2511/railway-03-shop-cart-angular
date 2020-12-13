import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : any [] = [
  ]
  hide: boolean = false;
  prod = {};

  constructor(private productService: ProductService, private router: ActivatedRoute) { 
    
  }

  ngOnInit(): void {

    this.router.queryParams.subscribe(() => {
      this.getProduct();
    })

    this.router.params.subscribe(() => {
      this.getProduct();
    })
  }
  // xu ly xu kien
  addToCartParent(product: any) {
    this.prod = product;
    this.hide = true;
  }

  getProduct() {
    const path = this.router.snapshot.url[0].path;
    console.log('url1 ' + path);

    if(path == 'dashboard') {
      this.productService.getProduct(1, 3).subscribe(
        data => {
          // console.log('products ' + JSON.stringify(data));
          this.products = data?.content;
        }
      , err => {
        console.log('error ' + err);
      })
    } else {
      const type : string = this.router.snapshot.url[1].path;
      this.productService.getCategory(+type, 1, 3).subscribe(
        data => {
          // console.log('products ' + JSON.stringify(data));
          this.products = data?.page?.content;
        }
      , err => {
        console.log('error ' + err);
      });
    }
  }
}
