package com.dashnet.dashNet.Task;

import org.springframework.http.ResponseEntity;
import com.dashnet.dashNet.Task.Exceptions.TaskNotFoundException;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TaskService
{
	TaskService() {}

	protected Task createTask(HashMap<String, String> ReqMap)
	{
		Task t = new Task();

//		t.setAssagneId(Long.valueOf(ReqMap.getOrDefault("assagneid", "0")));
		t.setCommentTbId(0L); // TODO: to be created
		t.setDescription(ReqMap.getOrDefault("description", "empty description"));
		t.setTitle(ReqMap.getOrDefault("title", "empty title"));
		t.setStatus(Integer.parseInt(ReqMap.getOrDefault("status", "0")));
		t.setTeamId(Long.valueOf(ReqMap.getOrDefault("teamid", "0")));
//		t.setCreatorId(Long.valueOf(ReqMap.getOrDefault("createid", "0")));
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
			a = taskRepository.findByTeamId(teamID, Task.class);
		} else
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

		if (inclData)
		{
			res.put("data", data);
		}

		return ResponseEntity.ok().body(res);
	}

	protected ResponseEntity<Map<String, Object>> updateTaskPatch(TaskRepository taskRepository, Task ob, String type)
	{
		return taskRepository
			.findById(ob.getId())
			.map(tsk ->
			{
				String msg = "";

				switch (type)
				{
					case "ttype" ->
					{
						tsk.setTtype(ob.getTtype());

						msg = "Task type changed successfully!";
					}
					case "deadline" ->
					{
						tsk.setDeadlineDate(ob.getDeadlineDate());

						msg = "Task deadline changed successfully!";
					}
					case "title" ->
					{
						tsk.setTitle(ob.getTitle());

						msg = "Task title changed successfully!";
					}
					case "description" ->
					{
						tsk.setDescription(ob.getDescription());

						msg = "Task description changed successfully!";
					}
					case "status-ow" ->
					{
						tsk.setStatus(tsk.getStatus() >= 3 ? 0 : tsk.getStatus() + 1);

						msg = "Task status changed successfully!";
					}
					case "update-all" ->
					{
						msg = "Task updated successfully!";

						tsk = ob;
					}
					default -> {}
				}

				taskRepository.save(tsk);

				return this.returnOkResponse(true, msg, 1, true, tsk);
			})
			.orElseThrow(() -> new TaskNotFoundException(ob.getId()));
	}
}