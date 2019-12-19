package com.cognizant.stockmarketcharting.authenticationservice.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.stockmarketcharting.authenticationservice.model.User;
import com.cognizant.stockmarketcharting.authenticationservice.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepository userRepository;

	@Transactional
	@Override
	public void updateDetails(User user) {
		User newUser = userRepository.findByUsername(user.getUsername());
		newUser.setContactNo(user.getContactNo());
		newUser.setPassword(user.getPassword());
		userRepository.save(newUser);

	}

}
