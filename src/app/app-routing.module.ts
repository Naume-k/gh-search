import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
// import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "SearchFormComponent", component: SearchFormComponent },
  { path: "", component: SearchFormComponent },
  { path: "search-details/:id", component: SearchDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
