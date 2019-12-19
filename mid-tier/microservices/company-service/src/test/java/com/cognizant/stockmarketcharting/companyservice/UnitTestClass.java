package com.cognizant.stockmarketcharting.companyservice;

//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.when;
//
//import java.sql.Time;
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.HashSet;
//import java.util.List;
//import java.util.Set;
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.Mockito;
//import org.mockito.junit.MockitoJUnitRunner;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.cognizant.stockmarketcharting.companyservice.model.BoardOfDirectors;
//import com.cognizant.stockmarketcharting.companyservice.model.Company;
//import com.cognizant.stockmarketcharting.companyservice.model.Sector;
//import com.cognizant.stockmarketcharting.companyservice.model.StockExchange;
//import com.cognizant.stockmarketcharting.companyservice.repository.CompanyRepository;
//import com.cognizant.stockmarketcharting.companyservice.service.CompanyServiceImpl;
//
//
//@RunWith(MockitoJUnitRunner.class)
//@SpringBootTest
public class UnitTestClass {
	
//	CompanyRepository companyRepository = Mockito.mock(CompanyRepository.class);
//	
//	CompanyServiceImpl companyService= new CompanyServiceImpl(companyRepository);
//	
//	
//	public Company createCompany() {
//		BoardOfDirectors boardOfDirectors = new BoardOfDirectors(1,"mackinson",1); 
//		List<BoardOfDirectors> listOfDirectors = new ArrayList<BoardOfDirectors>();
//		listOfDirectors.add(boardOfDirectors);
//		StockExchange stockExchange = new StockExchange(1,"BSE","Bombay","nill","nill");
//		Set<StockExchange> stockExchangeList = new HashSet<StockExchange>();
//		stockExchangeList.add(stockExchange);
//		Sector sector = new Sector(1,"Banking","bank");
//		Company company = new Company(1,500112L,"BOI",54123L,"guru",listOfDirectors,true,sector,"nil", stockExchangeList);
//		return company;
//		}
//	
//	public List<Company> createCompanyList(){
//		List<Company> companyList = new ArrayList<Company>();
//		companyList.add(createCompany());
//		return companyList;
//	}
//	
//
//	
//	@Test
//	public void mockGetAllCompanies() {
//		when(companyRepository.findAll()).thenReturn(createCompanyList());
//		List<Company> companyList = companyService.findAllCompanies();
//		assertEquals(companyList.get(0).getCeo(), createCompanyList().get(0).getCeo());
//	}
//	
	

}