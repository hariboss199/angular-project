import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NewsComponent } from './news/news.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

{ path: '', redirectTo: '/AboutUs', pathMatch: 'full' },
{path:'Home',component:HeaderComponent},
{path:'AboutUs',component:AboutComponent},
{path:'Pricing',component:PricingComponent},
{path:'Tesimonials',component:TestimonialsComponent},
{path:'News',component:NewsComponent},
{ path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
