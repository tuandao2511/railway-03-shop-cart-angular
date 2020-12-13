import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/signup/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch:'full'
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'dashboard',
    component: HomeComponent
  },
  {
    path: 'category/:id',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
