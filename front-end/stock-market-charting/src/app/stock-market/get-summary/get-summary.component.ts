import { Component, OnInit } from '@angular/core';
import { Summary } from './Summary';
import { StockMarketService } from 'src/app/services/stock-market.service';

@Component({
  selector: 'app-get-summary',
  templateUrl: './get-summary.component.html',
  styleUrls: ['./get-summary.component.css']
})
export class GetSummaryComponent implements OnInit {
  summary:any;
  summary1:Summary;
  constructor(private importExcel:StockMarketService) { }

  ngOnInit() {
  this.summary={
    noOfRecords:0,
    companyName:"",
    maxDate:new Date(),
    minDate: new Date()
  }
  
this.importExcel.showSummary().subscribe((response:any)=>{this.summary=response})
  
  }


}
