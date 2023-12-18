package com.dashnet.dashNet.Task;

import com.dashnet.dashNet.Task.Exceptions.TaskNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;

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

	@PostMapping(path = "/create")
	public @ResponseBody String createTask(@RequestParam String title, @RequestParam String description)
	{
		Task t = new Task();

		t.setAssagneId(123431432L);
		t.setCommentTbId(123L);
		t.setDescription(description);
		t.setTitle(title);
		t.setStatus(0);
		t.setTeamId(10101L);
		t.setCreatorId(123L);
		t.setCreatedDate(Date.valueOf(java.time.LocalDate.now()));
		t.setDeadlineDate(Date.valueOf(java.time.LocalDate.now()));

		taskRepository.save(t);

		return "Saved";
	}

	@DeleteMapping(path = "/delete/{id}")
	public @ResponseBody String deleteTask(@PathVariable int id)
	{
		taskRepository.deleteById(id);

		return "Deleted";
	}
}