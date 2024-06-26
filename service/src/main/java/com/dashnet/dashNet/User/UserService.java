package com.dashnet.dashNet.User;

import com.dashnet.dashNet.Security.JwtUtils;
import com.dashnet.dashNet.User.Exceptions.UserGenericException;
import com.dashnet.dashNet.User.Exceptions.UserNotFoundByIdException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService
{
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;

	@Autowired
	public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder)
	{
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	public ResponseEntity<UserResponse> getUsers()
	{
		List<User> users = userRepository.findAll();

		if (!users.iterator().hasNext())
		{
			throw new UserGenericException("No users found.");
		}

		return ResponseEntity.status(HttpStatus.OK).body(new UserResponse(users));
	}


	public ResponseEntity<UserResponse> getUser(Long userId)
	{
		User userById = userRepository.findUserById(userId);

		if (userById == null)
		{
			throw new UserNotFoundByIdException(userId);
		}
		else
		{
			return ResponseEntity.status(HttpStatus.OK).body(new UserResponse(userById));
		}
	}

	public ResponseEntity<UserResponse> getAuthUser(String authHeader)
	{
		String email = JwtUtils.getEmail(authHeader.substring(7));
		User userByEmail = userRepository.findUserByEmail(email);

		if (userByEmail == null)
		{
			throw new UserGenericException("Token has expired");
		}

		return ResponseEntity.status(HttpStatus.OK).body(new UserResponse(userByEmail));
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

	public ResponseEntity<UserResponse> deleteUser(Long userId)
	{
		boolean exists = userRepository.existsById(userId);

		if (!exists)
		{
			throw new UserNotFoundByIdException(userId);
		}

		userRepository.deleteById(userId);

		return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new UserResponse("User deleted successfully.", 1));
	}

	public ResponseEntity<UserResponse> updateUser(Long userId, User user)
	{
		User userById = userRepository.findUserById(userId);

		if (userById == null)
		{
			throw new UserNotFoundByIdException(userId);
		}

		user.setId(userId);
		user.setPassword(userById.getPassword());
		userRepository.save(user);

		return ResponseEntity.status(HttpStatus.OK).body(new UserResponse(user));
	}
}