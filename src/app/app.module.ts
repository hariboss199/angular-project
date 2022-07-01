import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NewsComponent } from './news/news.component';

import{UsersService} from './services/users.service'
  import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    PricingComponent,
    TestimonialsComponent,
    NewsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
