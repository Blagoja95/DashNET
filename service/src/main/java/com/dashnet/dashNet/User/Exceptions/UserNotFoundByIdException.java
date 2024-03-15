package com.dashnet.dashNet.User.Exceptions;

public class UserNotFoundByIdException extends RuntimeException
{
	public UserNotFoundByIdException(Long id)
	{
		super("User with id " + id + " does not exist!");
	}
}
