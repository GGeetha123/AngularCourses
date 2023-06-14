import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/home/details/details.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"contacts",component:ContactComponent},
  {path:"services/:id",component: DetailsComponent} //handing routing parameters //according to the appropriate component will be loaded in the router-outlet
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
