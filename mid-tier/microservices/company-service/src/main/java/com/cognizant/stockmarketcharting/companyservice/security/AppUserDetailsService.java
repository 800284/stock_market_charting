package com.cognizant.stockmarketcharting.companyservice.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.stockmarketcharting.companyservice.model.User;
import com.cognizant.stockmarketcharting.companyservice.repository.RoleRepository;
import com.cognizant.stockmarketcharting.companyservice.repository.UserRepository;

@Service
public class AppUserDetailsService implements UserDetailsService {
	private static final Logger LOGGER = LoggerFactory.getLogger(AppUserDetailsService.class);

	@Autowired
	UserRepository userRepository;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	RoleRepository roleRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		LOGGER.info("Start");
		User user = userRepository.findByUsername(username);
		LOGGER.debug("{}", user);
		AppUser appUser = null;
		if (user == null) {
			LOGGER.debug("Throwing the exception");
			throw new UsernameNotFoundException("User doesnot exist");
		} else {
			appUser = new AppUser(user);
		}
		LOGGER.info("End");
		return appUser;
	}

	public AppUserDetailsService(UserRepository userRepository, RoleRepository roleRepository) {
		LOGGER.info("Start");
		this.roleRepository = roleRepository;
		this.userRepository = userRepository;
		LOGGER.info("End");
	}

}