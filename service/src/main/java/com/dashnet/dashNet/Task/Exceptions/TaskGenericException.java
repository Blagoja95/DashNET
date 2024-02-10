package com.dashnet.dashNet.Task.Exceptions;

public class TaskGenericException extends RuntimeException
{
	public TaskGenericException(String msg)
	{
		super(msg.isEmpty() ? "Generic error!" : msg);
	}
}
