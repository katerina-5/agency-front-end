import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './components/pages/welcome-page/welcome-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'not_found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not_found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
