import { Component } from '@angular/core';
import Company from "./models/company";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean = false;
  showErrorMessage: boolean = false;
  company?: Company;
  currentPage: number = 1;

  ngOnInit() {
    console.log("AppComponent.ngOnInit()");
  }

  setCompany(company: Company) {
    this.company = company;
  }

  setPage(page: number) {
    this.currentPage = page;
  }
}
