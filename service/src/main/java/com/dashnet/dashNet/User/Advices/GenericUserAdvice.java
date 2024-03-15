package com.dashnet.dashNet.User.Advices;

import com.dashnet.dashNet.User.Exceptions.UserGenericException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GenericUserAdvice
{
	@ResponseBody
	@ExceptionHandler(UserGenericException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	Map<String, Object> handler(UserGenericException ex)
	{
		Map<String, Object> a = new HashMap<String, Object>();
		a.put("status", 0);
		a.put("info", ex.getMessage());

		return a;
	}
}