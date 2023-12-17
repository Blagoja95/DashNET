package com.dashnet.dashNet.Task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Date;

@Controller
@RequestMapping("/tasks")
public class TaskController
{
	private TaskRepository taskRepository;

	@GetMapping("/")
	public @ResponseBody Iterable<Task> getAllTasks()
	{
		return taskRepository.findAll();
	}

	@PostMapping("/create")
	public @ResponseBody String createTask(@RequestParam String title, @RequestParam String description)
	{
		Task t = new Task();

		t.setDescription(description);
		t.setTitle(title);
//		t.setCreatedDate(Date.valueOf(java.time.LocalDate.now()));

		taskRepository.save(t);

		return "Saved";
	}
}
