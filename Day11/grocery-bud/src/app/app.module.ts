import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';
import { GroceryFormComponent } from './grocery-form/grocery-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroceryFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
