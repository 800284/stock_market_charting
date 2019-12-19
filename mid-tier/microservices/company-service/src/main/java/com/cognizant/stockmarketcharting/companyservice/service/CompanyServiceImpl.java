package com.cognizant.stockmarketcharting.companyservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.stockmarketcharting.companyservice.model.Company;
import com.cognizant.stockmarketcharting.companyservice.repository.CompanyRepository;

@Service
public class CompanyServiceImpl implements CompanyService {

	@Autowired
	CompanyRepository companyRepository;
	
	@Override
	public List<Company> findAllCompanies() {
		// TODO Auto-generated method stub
		return companyRepository.findAll();
	}

	public CompanyServiceImpl(CompanyRepository companyRepository) {
		super();
		this.companyRepository = companyRepository;
	}

}
