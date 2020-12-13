import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignUpComponent } from './components/signup/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login/login.component';
import { CookieService } from "ngx-cookie-service";
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { JwtInterceptorService } from './service/jwt-interceptor.service';
import { ErrorInterceptorService } from './service/error-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductItemComponent,
    ProductDetailComponent,
    SignUpComponent,
    LoginComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService,
  {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
