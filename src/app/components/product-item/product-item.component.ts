import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  //noi cho th ProductItemComponent la dau vao duoc truyen tu 1 component nao do
  //hung du lieu tu thang cha truyen vao
  @Input() product: any;
  @Output() addProductToCart :EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }

  //event binding
  //truyen 1 cai ham vao trong cai view
  //khi click --> no xe thuc thien cai ham cho minh

  addToCart(product: any) {
    this.addProductToCart.emit(product);
  }

}
