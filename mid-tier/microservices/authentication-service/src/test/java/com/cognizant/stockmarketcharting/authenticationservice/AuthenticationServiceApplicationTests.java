package com.cognizant.stockmarketcharting.authenticationservice;

//import java.util.HashSet;
//import java.util.Set;
//import static org.mockito.Mockito.when;
//import org.junit.jupiter.api.Test;
//import org.junit.runner.RunWith;
//import org.mockito.junit.MockitoJUnitRunner;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
//import static org.junit.Assert.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertThrows;
//import com.cognizant.stockmarketcharting.authenticationservice.exception.UserAlreadyExistsException;
//import com.cognizant.stockmarketcharting.authenticationservice.model.Role;
//import com.cognizant.stockmarketcharting.authenticationservice.model.User;
//import com.cognizant.stockmarketcharting.authenticationservice.repository.RoleRepository;
//import com.cognizant.stockmarketcharting.authenticationservice.repository.UserRepository;
//import com.cognizant.stockmarketcharting.authenticationservice.security.AppUserDetailsService;
//@RunWith(MockitoJUnitRunner.class)
//@SpringBootTest
class AuthenticationServiceApplicationTests {

//private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationServiceApplicationTests.class);
//	
//	@Autowired
//	PasswordEncoder encoder;
//	
//	@MockBean 
//	UserRepository usersRepository;
//	
//	@Autowired
//	AppUserDetailsService userDetailsService;
//
//	@MockBean
//	RoleRepository roleRepository;
//	
//	public User newUser() {
//		
//		LOGGER.info("Start");
//		Set<Role> role = new HashSet<Role>();
//		role.add(new Role(2, "USER"));
//		User user = new User(44, "user1", "abcd", "1234567890", "ssss@sss.com",true, role);
//		return user;
//	}
//	
//	public User createUser(){
//		Set<Role> role = new HashSet<Role>();
//		role.add(new Role(2, "USER"));
//		User user = new User(44, "user1", "abcd", "1234567890", "ssss@sss.com",true, role);
//		return user;
//	}
//	@Test
// 	public void mockTestLoadUserByUsername() {
// 		LOGGER.info("Start");
// 		when( usersRepository.findByUsername("user1")).thenReturn(createUser());
// 		UserDetails user = userDetailsService.loadUserByUsername("user1");
// 		String expected = "abcd";
// 		assertEquals(expected, user.getPassword());
// 		LOGGER.info("End");
// 	}
//	@Test
//	public void userDetailsSignUpTestException() {
//		Role role = new Role();
//		role.setId(2);
//		role.setName("USER");
//		when(usersRepository.findByUsername(newUser().getUsername())).thenReturn(createUser());
//		when(roleRepository.findByName("user1")).thenReturn(role);
//		assertThrows(UserAlreadyExistsException.class, () -> 
//						userDetailsService.signup(createUser()));
//	}
//	
//	@Test
//	public void userDetailsSignUpTest() {
//		when(usersRepository.findByUsername(newUser().getUsername())).thenReturn(null);
//		assertDoesNotThrow(() -> userDetailsService.signup(createUser()));
//	}

}