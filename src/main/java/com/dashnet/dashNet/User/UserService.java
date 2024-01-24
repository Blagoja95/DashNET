package com.dashnet.dashNet.User;

import com.dashnet.dashNet.Security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService implements CommandLineRunner {
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;

	@Autowired
	public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	public void run(String... args) throws Exception {
		for (int i = 1; i < 5; i++) {
			User user = new User();
			String email = "johndoe" + i + "@gmail.com";
			if (userRepository.findUserByEmail(email) == null) {
				user.setEmail(email);
				user.setFname("John");
				user.setLname("Doe");
				user.setPassword(passwordEncoder.encode("johndoe123"));

				userRepository.save(user);
			}
		}
	}

	public ResponseEntity<UserResponse> getUsers() {
		List<User> users = userRepository.findAll();

		if (!users.iterator().hasNext()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new UserResponse("No users found.", 0));
		}
		return ResponseEntity.status(HttpStatus.OK).body(new UserResponse(users));
	}


	public ResponseEntity<UserResponse> getUser(Integer userId) {
		User userById = userRepository.findUserById(userId);
		if (userById == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new UserResponse("User does not exist.", 0));
		} else {
			return ResponseEntity.status(HttpStatus.OK).body(new UserResponse(userById));
		}

	}

	public ResponseEntity<UserResponse> register(User user) {
		try {
			User userByEmail = userRepository.findUserByEmail(user.getEmail());

			if (user.getFname() == null || user.getFname().isBlank())
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new UserResponse("First Name is required!", 0));

			if (user.getLname() == null || user.getLname().isBlank())
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new UserResponse("Last Name is required!", 0));

			if (user.getEmail() == null || user.getEmail().isBlank())
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new UserResponse("Email is required!", 0));

			if (user.getPassword() == null || user.getPassword().isBlank())
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new UserResponse("Password is required!", 0));

			if (userByEmail != null)
				return ResponseEntity.status(HttpStatus.CONFLICT).body(new UserResponse("User with that email already exists.", 0));

			String hashedPassword = passwordEncoder.encode(user.getPassword());
			user.setPassword(hashedPassword);
			userRepository.save(user);

			return ResponseEntity.status(HttpStatus.CREATED).body(new UserResponse("User registered successfully.", 1));
		} catch (jakarta.validation.ConstraintViolationException e) {
			return ResponseEntity.status(HttpStatus.CREATED).body(new UserResponse(e.getMessage(), 1));
		}
	}

	public ResponseEntity<UserResponse> login(User user) {
		User userByEmail = userRepository.findUserByEmail(user.getEmail());

		if (user.getEmail() == null || user.getEmail().isBlank())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new UserResponse("Email is required!", 0));

		if (user.getPassword() == null || user.getPassword().isBlank())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new UserResponse("Password is required!", 0));

		if (userByEmail == null)
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new UserResponse("Account with that email doesn't exist!", 0));

		if (!passwordEncoder.matches(user.getPassword(), userByEmail.getPassword()))
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new UserResponse("Incorrect password!", 0));
		String token = JwtUtils.generateToken(user.getEmail());

		return ResponseEntity.status(HttpStatus.OK).body(new UserResponse("Successfully logged in", token, userByEmail, 1));
	}

	public ResponseEntity<UserResponse> deleteUser(Integer userId) {
		boolean exists = userRepository.existsById(userId);

		if (!exists) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new UserResponse("User with that id does not exist", 0));
		}

		userRepository.deleteById(userId);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new UserResponse("User deleted successfully.", 1));

	}

	public ResponseEntity<UserResponse> updateUser(Integer userId, User user) {
		User userById = userRepository.findUserById(userId);

		if (userById == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new UserResponse("User with that id does not exist.", 0));
		}
		user.setId(userId);
		userRepository.save(user);

		return ResponseEntity.status(HttpStatus.OK).body(new UserResponse(user));
	}
}