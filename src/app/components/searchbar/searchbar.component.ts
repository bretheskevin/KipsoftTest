import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';
import {CompanyService} from "../../services/company.service";
import Company from "../../models/company";
import {SiretResponse} from "../../models/siret-response";
import Etablissement from "../../models/etablissement";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() companyChange: EventEmitter<Company> = new EventEmitter();
  @Output() activateLoading: EventEmitter<null> = new EventEmitter();
  @Output() deactivateLoading: EventEmitter<null> = new EventEmitter();
  @Output() noCompanyFound: EventEmitter<null> = new EventEmitter();
  @Output() companyFound: EventEmitter<null> = new EventEmitter();
  @Input() currentPage: number = 1;
  currentContent?: string;

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {

  }

  ngOnChanges({currentPage: currentPage}: SimpleChanges) {
    if (currentPage.currentValue !== currentPage.previousValue && currentPage.previousValue !== undefined) {
      this.searchCompany(this.currentContent!);
    }
  }

  searchCompany(newContent: string): void {
    if (this.currentContent !== newContent) {
      this.currentContent = newContent;
      this.currentPage = 1;
    }
    this.activateLoading.emit();

    // check if newContent is a number
    if (isNaN(Number(newContent))) {
      this.companyService.getCompanyDataByName(newContent, this.currentPage).subscribe(
        (company: Company) => {
          this.companyChange.emit(company);
          this.deactivateLoading.emit();
          this.companyFound.emit();
        },
        (error: any) => {
          this.deactivateLoading.emit();
          this.noCompanyFound.emit();
        }
      );
    } else {
      this.companyService.getCompanyDataBySiret(Number(newContent), this.currentPage).subscribe(
        (data: SiretResponse) => {
          this.companyChange.emit({
            page: "",
            per_page: 0,
            spellcheck: undefined,
            suggestions: [],
            total_pages: 0,
            total_results: 0,
            etablissement: [data.etablissement]
          });
          this.deactivateLoading.emit();
          this.companyFound.emit();
        },
        (error: any) => {
          this.deactivateLoading.emit();
          this.noCompanyFound.emit();
        }
      );
    }
  }
}
