import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Retail } from './retail-item/retail.model';

import { AppComponent } from './app.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { LoginComponent } from './header/login/login.component';
import { RetailItemComponent } from './retail-item/retail-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HatComponent } from './hat/hat.component';
import { GlovesComponent } from './gloves/gloves.component';
import { CartComponent } from './retail-item/cart/cart.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RetailItemComponent,
    SidebarComponent,
    FooterComponent,
    HatComponent,
    GlovesComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule, AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RetailItemComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class AppModule { }
