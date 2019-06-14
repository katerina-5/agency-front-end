import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// material modules
import { MatCardModule } from '@angular/material/card';

// component modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/pages/welcome-page/welcome-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
