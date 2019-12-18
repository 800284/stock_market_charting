package com.cognizant.stockmarketcharting.companyservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.stockmarketcharting.companyservice.model.Company;
import com.cognizant.stockmarketcharting.companyservice.service.CompanyService;

@RestController
@RequestMapping("/stock-market-charting/company")
public class CompanyController {
	
	@Autowired
	CompanyService companyService;
	
	@GetMapping("/get-companies")
	public List<Company> getAllCompanies(){
		return companyService.findAllCompanies();
	}
	
}
