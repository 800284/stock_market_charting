package com.cognizant.stockmarketcharting.authenticationservice;

import java.util.HashSet;
import java.util.Set;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import com.cognizant.stockmarketcharting.authenticationservice.model.Role;
import com.cognizant.stockmarketcharting.authenticationservice.model.User;
import com.cognizant.stockmarketcharting.authenticationservice.security.AppUserDetailsService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;

@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
@SpringBootTest
public class AuthenticationMockMVCTest {

//	@Autowired
//	AppUserDetailsService appUserDetailsService;
//	@Autowired
//	private MockMvc mockMvc;
//
//	
//	@Test
//	public void addUser() throws Exception {
//
//		Set<Role> role = new HashSet<Role>();
//		role.add(new Role(2, "USER"));
//		
//		mockMvc.perform(MockMvcRequestBuilders.post("/stock-market-charting/users")
//				.content(asJsonString(new User(45, "users", "abcd", "1234567890", "ssss@sss.com",true, role)))
//				.contentType(MediaType.APPLICATION_JSON)
//				.accept(MediaType.APPLICATION_JSON))
//					.andExpect(status().isOk());
//				
//	}
//	
////	@Test
////	public void getUser() throws Exception{
////		mockMvc.perform(MockMvcRequestBuilders.get("/blood-bank/users/get-user")).andExpect(status().isOk());
////	}
//
//	public static String asJsonString(final Object obj) {
//		try {
//			return new ObjectMapper().writeValueAsString(obj);
//		} catch (Exception e) {
//			throw new RuntimeException(e);
//		}
//	}
}