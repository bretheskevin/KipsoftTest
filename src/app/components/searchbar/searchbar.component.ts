import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CompanyService} from "../../services/company.service";
import Company from "../../models/company";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {

  }

  searchCompany(newContent: string): void {
    this.companyService.getCompanyDataByName(newContent).subscribe(
      (data: Company) => {
        console.log(data);
      }
    );
  }
}
