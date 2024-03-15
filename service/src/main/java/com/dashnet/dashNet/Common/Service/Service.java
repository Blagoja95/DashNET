package com.dashnet.dashNet.Common.Service;

import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class Service
{
	public ResponseEntity<Map<String, Object>> returnOkResponse(boolean inclMsg, String msg, int status, boolean inclData, Object data)
	{
		Map<String, Object> res = new HashMap<String, Object>();

		res.put("status", status);

		if (inclMsg)
		{
			res.put("info", msg);
		}

		if (inclData)
		{
			res.put("data", data);
		}

		return ResponseEntity.ok().body(res);
	}
}
