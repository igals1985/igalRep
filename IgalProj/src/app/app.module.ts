import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CountriesComponent } from './countries/countries.component';
import { LayoutComponent } from './layout/layout.component';
import { countryService } from 'src/app/shared/services/countries-service.services';
import { HttpClientModule } from '@angular/common/http';
const appRoutes: Routes = [
  
      { path: 'countries', component: CountriesComponent},
      { path: "home", component: MainComponent},
      {path: '',
          redirectTo: '/home',
          pathMatch: 'full'
      },
      { path: '**', component: PageNotFoundComponent }
  
  ];
  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PageNotFoundComponent,
    CountriesComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [countryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
