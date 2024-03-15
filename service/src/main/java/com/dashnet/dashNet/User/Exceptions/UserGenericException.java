package com.dashnet.dashNet.User.Exceptions;

public class UserGenericException extends RuntimeException
{
	public UserGenericException(String msg)
	{
		super(msg == null || msg.isEmpty() ? "Generic exception!" : msg);
	}
}