import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Company from "../models/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompanyDataByName(name: string): Observable<Company> {
    return this.http.get<Company>(`https://entreprise.data.gouv.fr/api/sirene/v1/full_text/${name}?per_page=5&page=${1}`);
  }
}
