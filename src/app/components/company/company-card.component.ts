import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import Etablissement from "../../models/etablissement";

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.css']
})
export class CompanyCardComponent implements OnInit {
  moreDetailHidden: boolean = true;
  moreDetailText: string = "Show more";
  @Input() Etablissement?: Etablissement;

  constructor() {
  }

  ngOnInit() {
    this.checkRequiredFields(this.Etablissement);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkRequiredFields(this.Etablissement);
  }

  switchMoreDetail() {
    this.moreDetailHidden = !this.moreDetailHidden;
    this.moreDetailText = this.moreDetailHidden ? "Show more" : "Show less";
  }

  checkRequiredFields(etablissement?: Etablissement) {
    if (etablissement === null) {
      throw new Error("Attribute 'Etablissement' is required");
    }
  }
}
