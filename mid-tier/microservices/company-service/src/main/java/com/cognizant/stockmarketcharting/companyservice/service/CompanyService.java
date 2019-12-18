package com.cognizant.stockmarketcharting.companyservice.service;

import java.util.List;

import com.cognizant.stockmarketcharting.companyservice.model.Company;

public interface CompanyService {
	public List<Company> findAllCompanies();
}
