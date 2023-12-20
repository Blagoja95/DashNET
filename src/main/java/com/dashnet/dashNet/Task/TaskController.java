package com.dashnet.dashNet.Task;

import com.dashnet.dashNet.Task.Exceptions.TaskNotFoundException;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping(path = "/tasks")
public class TaskController
{
	private final TaskRepository taskRepository;

	TaskController(TaskRepository taskRepository)
	{
		this.taskRepository = taskRepository;
	}

	@GetMapping(value = {"", "/"})
	public @ResponseBody Iterable<Task> getAllTasks()
	{
		return taskRepository.findAll();
	}

	@GetMapping(path = "/{id}")
	public @ResponseBody Task getOne(@PathVariable int id)
	{
		return taskRepository
			.findById(id)
			.orElseThrow(() -> new TaskNotFoundException(id));
	}

	@GetMapping("title/{param}")
	public @ResponseBody List<Task> getByParam(@PathVariable String param)
	{
		return taskRepository.findByTitleLike(param);
	}

//	@GetMapping("find/{what}/{val}")
//	public @ResponseBody List<Task> getByParam(@PathVariable String what, @PathVariable String val)
//	{
//		return taskRepository.findBy(what, val);
//	}

	@PostMapping(path = "/create")
	public @ResponseBody String createTask(@RequestParam MultiValueMap<String, String> ReqMap)
	{
		Task t = new Task();

		t.setAssagneId(Long.valueOf(String.valueOf((ReqMap.getOrDefault("creatorid", null)))));
		t.setCommentTbId(123L); // TODO: to be created
		t.setDescription(String.valueOf(ReqMap.getOrDefault("description", null)));
		t.setTitle(String.valueOf(ReqMap.getOrDefault("title", null)));
		t.setStatus(0); // TODO: default is status not in progress
		t.setTeamId(Long.valueOf(String.valueOf((ReqMap.getOrDefault("teamid", null)))));
		t.setCreatorId(Long.valueOf(String.valueOf((ReqMap.getOrDefault("creatorid", null)))));
		t.setCreatedDate(Date.valueOf(java.time.LocalDate.now()));
		t.setDeadlineDate(Date.valueOf(java.time.LocalDate.now().plusMonths(1)));

		taskRepository.save(t);

		return "Saved";
	}

	@DeleteMapping(path = "/delete/{id}")
	public @ResponseBody String deleteTask(@PathVariable int id)
	{
		taskRepository.deleteById(id);

		return "Deleted";
	}

	@PutMapping(path = "/update/{id}")
	public Task updateTask(Task nTask, @PathVariable int id)
	{

		taskRepository.findById(id)
			.ifPresent(tsk ->
			{
				nTask.setId(tsk.getId());

				taskRepository.save(nTask);
			});

		return nTask;
	}
}