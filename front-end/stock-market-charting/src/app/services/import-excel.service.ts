import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImportExcelService {

  constructor(private httpClient:HttpClient) { }

showSummary(){
  return this.httpClient.get("http://localhost:8087/stock-market-charting/summary")
}

}
