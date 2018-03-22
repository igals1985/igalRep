import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComp } from './header/header.component';
import { MainComp } from './main/main.component';
import { FooterComp } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComp,
    MainComp,
    FooterComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
