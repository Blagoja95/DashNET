package com.dashnet.dashNet.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/users")
public class UserController {
	private final UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	@GetMapping(path = "")
	public @ResponseBody ResponseEntity<UserResponse> getAllUsers() {
		return userService.getUsers();
	}

	@GetMapping(path="{userId}")
	public @ResponseBody ResponseEntity<UserResponse> getUser(@PathVariable("userId") Long userId) {
		return userService.getUser(userId);
	}

	@GetMapping("/token")
	public @ResponseBody ResponseEntity<UserResponse> getAuthUser(@RequestHeader (HttpHeaders.AUTHORIZATION) String authHeader) {
		return userService.getAuthUser(authHeader);
	}

	@PostMapping(path = "/register")
	public @ResponseBody ResponseEntity<UserResponse> registerNewUser(@RequestBody User user){
		return userService.register(user);
	}

	@PostMapping(path = "/login")
	public ResponseEntity<UserResponse> loginUser(@RequestBody User user) {
		return userService.login(user);
	}

	@DeleteMapping(path = "{userId}")
	public ResponseEntity<UserResponse> deleteUser(@PathVariable("userId") Long userId) {
		return userService.deleteUser(userId);
	}

	@PutMapping(path= "{userId}")
	public @ResponseBody ResponseEntity<UserResponse> updateUser(@PathVariable("userId") Long userId, @RequestBody User user) {
		return userService.updateUser(userId, user);
	}
}