package com.dashnet.dashNet.User;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;

@SuppressWarnings("unused")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserResponse {
	private User user;
	private List<User> users;
	private String message;

	private String token;
	private final Integer status;

	public UserResponse(User user) {
		user.setPassword(null);
		this.user = user;
		this.status = 1;
	}

	public UserResponse(List<User> users) {
		for(User u: users)
			u.setPassword(null);
		this.users = users;
		this.status = 1;
	}

	public UserResponse(String message, Integer status) {
		this.message = message;
		this.status = status;
	}

	public UserResponse(String message, String token, User user, Integer status) {
		user.setPassword(null);

		this.message = message;
		this.token = token;
		this.status = status;
		this.user = user;
	}
	public User getUser() {
		return user;
	}
	public String getMessage() {
		return message;
	}
	public Integer getStatus() {
		return status;
	}

	public List<User> getUsers() {
		return users;
	}

	public String getToken() {
		return token;
	}
}