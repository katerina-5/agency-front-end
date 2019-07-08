import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './components/pages/welcome-page/welcome-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { CustomerSignInComponent } from './components/pages/customer-sign-in/customer-sign-in.component';
import { CustomerSignUpComponent } from './components/pages/customer-sign-up/customer-sign-up.component';
import { ManagerSignInComponent } from './components/pages/manager-sign-in/manager-sign-in.component';
import { CustomerMainPageComponent } from './components/pages/customer_pages/customer-main-page/customer-main-page.component';
import { ManagerMainPageComponent } from './components/pages/manager_pages/manager-main-page/manager-main-page.component';
import { ManagerSignUpComponent } from './components/pages/manager-sign-up/manager-sign-up.component';
import { ObjectsCatalogComponent } from './components/pages/objects-catalog/objects-catalog.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'not_found', component: NotFoundComponent },
  { path: 'sign_in', component: CustomerSignInComponent },
  { path: 'sign_up', component: CustomerSignUpComponent },
  { path: 'admin/sign_in', component: ManagerSignInComponent },
  { path: 'admin/sign_up', component: ManagerSignUpComponent },
  { path: 'customer', component: CustomerMainPageComponent },
  { path: 'manager', component: ManagerMainPageComponent },
  { path: 'objects', component: ObjectsCatalogComponent },
  { path: '**', redirectTo: 'not_found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
