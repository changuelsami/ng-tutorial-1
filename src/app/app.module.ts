import { HeroesService } from './heroes/heroes.service';
import { ProductService } from './product/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductService,
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
