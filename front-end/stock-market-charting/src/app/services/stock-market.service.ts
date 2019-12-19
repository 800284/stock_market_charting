import { Injectable } from '@angular/core';

import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StockMarketService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }
  uploadFile(formData) {

    let url = environment.baseUrl + "/excelupload-service/stock-market-charting/upload"
    let token = 'Bearer ' + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.post(url, formData);
  }
  showSummary() {
    let url = environment.baseUrl + "/excelupload-service/stock-market-charting/summary"
    let token = 'Bearer ' + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.get(url, httpOptions)
  }

  getCompanies() {
    let url = environment.baseUrl + "/company-service/stock-market-charting/company/get-companies"
    let token = 'Bearer ' + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.get(url, httpOptions)
  }

  getStockDetails(companyCode) {
    let token = "Bearer " + this.authService.getToken();
    const httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.get(environment.baseUrl + "/excelupload-service/stock-market-charting/stock-details/" + companyCode, httpOption);
  }

}
