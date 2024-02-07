package com.dashnet.dashNet.Task;

import org.springframework.http.ResponseEntity;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TaskService
{
	TaskService() { }

	protected Task createTask(HashMap<String, String> ReqMap)
	{
		Task t = new Task();

		t.setAssagneId(Long.valueOf(ReqMap.getOrDefault("assagneid", "0")));
		t.setCommentTbId(0L); // TODO: to be created
		t.setDescription(ReqMap.getOrDefault("description", "empty description"));
		t.setTitle(ReqMap.getOrDefault("title", "empty title"));
		t.setStatus(Integer.parseInt(ReqMap.getOrDefault("status", "0")));
		t.setTeamId(Long.valueOf(ReqMap.getOrDefault("teamid", "0")));
		t.setCreatorId(Long.valueOf(ReqMap.getOrDefault("createid", "0")));
		t.setCreatedDate(Date.valueOf(java.time.LocalDate.now()));
		t.setDeadlineDate(Date.valueOf(java.time.LocalDate.now().plusMonths(1)));

		return t;
	}

	protected HashMap<String, Integer> countTasks(TaskRepository taskRepository, Long teamID)
	{
		HashMap<String, Integer> res = new HashMap<>();
		List<Task> a;

		if (teamID != -1)
		{
			a = taskRepository.findByTeamId(teamID);
		}
		else
		{
			a = (List<Task>) taskRepository.findAll();
		}

		res.put("total", a.size());

		int notStarted = 0;
		int review = 0;
		int inProgress = 0;
		int done = 0;

		for (Task t : a)
		{
			switch (t.getStatus())
			{
				case 0 -> notStarted++;
				case 1 -> inProgress++;
				case 2 -> review++;
				case 3 -> done++;
				default -> {}
			}
		}

		res.put("notStarted", notStarted);
		res.put("review", review);
		res.put("inProgress", inProgress);
		res.put("done", done);

		return res;
	}

	protected ResponseEntity<Map<String, Object>> returnOkResponse(boolean inclMsg, String msg, int status, boolean inclData, Object data)
	{
		Map<String, Object> res = new HashMap<String, Object>();

		res.put("status", status);

		if (inclMsg)
		{
			res.put("info", msg);
		}

		if(inclData)
		{
			res.put("data", data);
		}

		return ResponseEntity.ok().body(res);
	}
}