import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchbarComponent} from './components/searchbar/searchbar.component';
import {CompanyCardComponent} from './components/company/company-card.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {LoadingComponent } from './components/loading/loading.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    CompanyCardComponent,
    PaginationComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
