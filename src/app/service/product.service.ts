import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';
import { Observable, from, of } from 'rxjs';
import { ProductInfo } from '../model/product-info';
import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 
    
  }

  getProduct(page: number, size: number) : Observable<any>{
    const url = `${apiUrl}/product?page=${page}&size=${size}`
    return this.http.get(url).pipe()
  }

  getProductDetail(id: string) : Observable<ProductInfo>{
    const url = `${apiUrl}/product/${id}`
    return this.http.get<ProductInfo>(url).pipe(
      catchError(_ => {
        console.log('get detail failed');
        return of(new ProductInfo());
      })
    );
  }

  getCategory(categoryType: number, page: number, size: number) : Observable<any>{
    const url = `${apiUrl}/category/${categoryType}?page=${page}&size=${size}`
    return this.http.get(url).pipe();
  }
}
