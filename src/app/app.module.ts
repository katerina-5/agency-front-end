import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// component modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/pages/welcome-page/welcome-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { CustomerSignInComponent } from './components/pages/customer-sign-in/customer-sign-in.component';
import { CustomerSignUpComponent } from './components/pages/customer-sign-up/customer-sign-up.component';
import { ManagerSignInComponent } from './components/pages/manager-sign-in/manager-sign-in.component';
import { CustomerHeaderComponent } from './components/shared/customer-header/customer-header.component';
import { ManagerHeaderComponent } from './components/shared/manager-header/manager-header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CustomerMainPageComponent } from './components/pages/customer_pages/customer-main-page/customer-main-page.component';
import { ManagerMainPageComponent } from './components/pages/manager_pages/manager-main-page/manager-main-page.component';
import { ManagerSignUpComponent } from './components/pages/manager-sign-up/manager-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NotFoundComponent,
    CustomerSignInComponent,
    CustomerSignUpComponent,
    ManagerSignInComponent,
    CustomerHeaderComponent,
    ManagerHeaderComponent,
    FooterComponent,
    CustomerMainPageComponent,
    ManagerMainPageComponent,
    ManagerSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
