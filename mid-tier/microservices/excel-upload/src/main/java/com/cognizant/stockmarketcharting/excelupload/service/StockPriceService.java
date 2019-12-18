package com.cognizant.stockmarketcharting.excelupload.service;

import java.util.List;

import com.cognizant.stockmarketcharting.excelupload.model.StockPrice;

public interface StockPriceService {
	public List<StockPrice> getAllStrockPrice(long companyCode);

}
