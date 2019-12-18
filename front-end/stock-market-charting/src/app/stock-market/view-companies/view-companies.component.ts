import { Component, OnInit } from '@angular/core';
import { StockMarketService } from 'src/app/services/stock-market.service';
import { Company } from '../model/Company';

@Component({
  selector: 'app-view-companies',
  templateUrl: './view-companies.component.html',
  styleUrls: ['./view-companies.component.css']
})
export class ViewCompaniesComponent implements OnInit {
  companyList:Company[]=[];
  companyListFilter:Company[]=[];
  search:string;
  emptyFlag:boolean=false;
  searchFlag:boolean
  constructor(private stockMarketService:StockMarketService) { }

  ngOnInit() {
    this.stockMarketService.getCompanies().subscribe((response:Company[])=>{
      this.companyList=response;
    this.companyListFilter=response;})
  }

  searchCompany(){
    this.searchFlag = true;
      this.companyList = this.companyListFilter;
      this.companyList = this.companyList.filter((company:Company)=>
       company.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase())!=-1);
       if(this.companyList.length==0){
        this.companyList = this.companyListFilter;
        this.companyList = this.companyList.filter((company:Company)=>
         company.companyCode.toString().toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase())!=-1);
        
        if(this.companyList.length==0){
         this.emptyFlag =true;
        }else{
          this.emptyFlag=false;
        }
       }else{
         this.emptyFlag=false;
       }
  }


}
