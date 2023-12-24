package com.dashnet.dashNet.Task;

import com.dashnet.dashNet.Task.Exceptions.TaskNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController
{
	private final TaskRepository taskRepository;

	private final TaskService taskService;

	TaskController(TaskRepository taskRepository)
	{
		this.taskRepository = taskRepository;

		this.taskService = new TaskService();
	}

	@GetMapping(value = {"", "/"})
	public @ResponseBody Iterable<Task> getAllTasks()
	{
		return taskRepository.findAll();
	}

	@GetMapping("/count")
	public HashMap<String, Integer> getCount()
	{
		return taskService.countTasks(taskRepository);
	}

	@GetMapping(path = "/{id}")
	public Task getOne(@PathVariable int id)
	{
		return taskRepository
			.findById(id)
			.orElseThrow(() -> new TaskNotFoundException(id));
	}

	@GetMapping("title/{param}")
	public List<Task> getByTitle(@PathVariable String param)
	{
		return taskRepository.findByTitleContaining(param);
	}

	@GetMapping("description/{param}")
	public List<Task> getByDescription(@PathVariable String param)
	{
		return taskRepository.findByDescriptionContaining(param);
	}

	@PostMapping(path = "/create")
	public ResponseEntity<Object> createTask(@RequestParam HashMap<String, String> ReqMap)
	{
		Task t = taskRepository.save(taskService.createTask(ReqMap));

		HashMap<String, Object> res = new HashMap<String, Object>();

		res.put("status", 1);
		res.put("taskid", t.getId());
		res.put("info", "Task created successfully!");

		return ResponseEntity
			.ok(new HashMap<>().put("tasks", res));
	}

	@DeleteMapping(path = "/delete")
	public @ResponseBody ResponseEntity<Object> deleteTask(@RequestParam int id)
	{
		HashMap<String, Object> res = new HashMap<String, Object>();

		taskRepository.deleteById(id);

		res.put("status", 1);
		res.put("taskid", id);
		res.put("info", "Task deleted successfully!");

		return ResponseEntity
			.ok(new HashMap<String, Object>().put("tasks", res));
	}

	@PutMapping(path = "/update/{id}")
	public ResponseEntity<Object> updateTask(Task nTask, @RequestParam int id)
	{
		HashMap<String, Object> res = new HashMap<String, Object>();

		res.put("info", "Something went wrong!");

		return taskRepository.findById(id)
			.map(tsk ->
			{
				nTask.setId(tsk.getId());

				taskRepository.save(nTask);

				res.put("status", 1);
				res.put("taskid", nTask.getId());
				res.replace("info", "Task deleted successfully!");

				return ResponseEntity
					.ok(new HashMap<>().put("tasks", res));
			})
			.orElse(ResponseEntity
				.ok(new HashMap<>().put("tasks", res.put("status", 0))));
	}
}