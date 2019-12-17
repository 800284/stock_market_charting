import { Injectable } from '@angular/core';

import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StockMarketService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }
uploadFile(formData){

  let url = environment.baseUrl + "/excelupload-service/stock-market-charting/upload"
  let token = 'Bearer ' + this.authService.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': token
    })
  };
  return this.httpClient.post(url,formData);
}

}
