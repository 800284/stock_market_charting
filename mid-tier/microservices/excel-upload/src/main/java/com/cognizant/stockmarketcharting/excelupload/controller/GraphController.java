package com.cognizant.stockmarketcharting.excelupload.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.stockmarketcharting.excelupload.model.StockPrice;
import com.cognizant.stockmarketcharting.excelupload.service.StockPriceService;


@RestController
@RequestMapping("/stock-market-charting")
public class GraphController {
	@Autowired
	StockPriceService stockPriceService;
	@GetMapping("/stock-details/{companyCode}")
	List<StockPrice> getAllStockPrice(@PathVariable long companyCode) {
		return stockPriceService.getAllStrockPrice(companyCode);		
	}

}
