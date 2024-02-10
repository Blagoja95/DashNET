package com.dashnet.dashNet.Task.Exceptions;

public class TaskNotFoundException extends RuntimeException
{
	public TaskNotFoundException(Long id)
	{
		super("Task with id " + id + " could not be found!");
	}
}
