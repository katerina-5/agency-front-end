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

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NotFoundComponent,
    CustomerSignInComponent,
    CustomerSignUpComponent
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
