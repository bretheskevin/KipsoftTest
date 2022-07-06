import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Company from "../models/company";
import Etablissement from "../models/etablissement";
import {SiretResponse} from "../models/siret-response";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompanyDataByName(name: string, page: number): Observable<Company> {
    return this.http.get<Company>(`https://entreprise.data.gouv.fr/api/sirene/v1/full_text/${name}?per_page=5&page=${page}`);
  }

  getCompanyDataBySiret(siret: number, page: number): Observable<SiretResponse> {
    return this.http.get<SiretResponse>(`https://entreprise.data.gouv.fr/api/sirene/v1/siret/${siret}?per_page=5&page=${page}`);
  }
}
