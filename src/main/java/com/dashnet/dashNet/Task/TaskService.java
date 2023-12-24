package com.dashnet.dashNet.Task;

import java.sql.Date;
import java.util.HashMap;

public class TaskService
{
	TaskService() {}

	protected Task createTask(HashMap<String, String> ReqMap)
	{
		Task t = new Task();

		t.setAssagneId(Long.valueOf(ReqMap.getOrDefault("assagneid", "0")));
		t.setCommentTbId(0L); // TODO: to be created
		t.setDescription(ReqMap.getOrDefault("description", "empty description"));
		t.setTitle(ReqMap.getOrDefault("title", "empty title"));
		t.setStatus(0); // TODO: default is status not in progress
		t.setTeamId(Long.valueOf(ReqMap.getOrDefault("teamid", "0")));
		t.setCreatorId(Long.valueOf(ReqMap.getOrDefault("createid", "0")));
		t.setCreatedDate(Date.valueOf(java.time.LocalDate.now()));
		t.setDeadlineDate(Date.valueOf(java.time.LocalDate.now().plusMonths(1)));

		return t;
	}

	protected HashMap<String, Integer> countTasks(TaskRepository taskRepository)
	{
		HashMap<String, Integer> res = new HashMap<>();

		res.put("total", (int) taskRepository.count());

		int notStarted = 0;
		int todo = 0;
		int inProgress = 0;
		int done = 0;

		for (Task t : taskRepository.findAll())
		{
			switch (t.getStatus())
			{
				case 0:
					notStarted++;
					break;

				case 1:
					todo++;
					break;

				case 2:
					inProgress++;
					break;

				case 3:
					done++;
					break;

				default:
					break;
			}
		}

		res.put("notStarted", notStarted);
		res.put("todo", todo);
		res.put("inProgress", inProgress);
		res.put("done", done);

		return res;
	}
}