import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class ImportExcelService {

  constructor(private httpClient:HttpClient,private authService:AuthenticationService) { }

showSummary(){
  let url = environment.baseUrl + "/excelupload-service/stock-market-charting/summary"
  let token = 'Bearer ' + this.authService.getToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': token
    })
  };
  return this.httpClient.get(url,httpOptions)
}

}
