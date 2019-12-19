package com.cognizant.stockmarketcharting.excelupload.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.stockmarketcharting.excelupload.model.StockPrice;
import com.cognizant.stockmarketcharting.excelupload.repository.ExcelUploadRepository;

@Service
public class StockPriceServiceImpl implements StockPriceService {

	@Autowired
	ExcelUploadRepository excelUploadRepository;

	@Transactional
	@Override
	public List<StockPrice> getAllStrockPrice(long companyCode) {
		return excelUploadRepository.findByCompanyCode(companyCode);
	}

}