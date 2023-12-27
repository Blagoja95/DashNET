package com.dashnet.dashNet.Task;

import com.dashnet.dashNet.Task.Exceptions.TaskNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

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
	public ResponseEntity<Map<String, Object>> getAllTasks()
	{
		return taskService.returnOkResponse(false, "", 1, true, taskRepository.findAll());
	}

	@GetMapping("/count")
	public ResponseEntity<Map<String, Object>> getCount()
	{
		return taskService.returnOkResponse(false, "", 1, true, taskService.countTasks(taskRepository));
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<Map<String, Object>> getOne(@PathVariable int id)
	{
		Task a = taskRepository
			.findById(id)
			.orElseThrow(() -> new TaskNotFoundException(id));

		return taskService.returnOkResponse(false, "", 1, true, a);
	}

	@GetMapping("title/{param}")
	public ResponseEntity<Map<String, Object>> getByTitle(@PathVariable String param)
	{
		return taskService.returnOkResponse(false, "", 1, true, taskRepository.findByTitleContaining(param));
	}

	@GetMapping("description/{param}")
	public ResponseEntity<Map<String, Object>> getByDescription(@PathVariable String param)
	{
		return taskService.returnOkResponse(false, "", 1, true, taskRepository.findByDescriptionContaining(param));
	}

	@PostMapping(path = "/create")
	public ResponseEntity<Map<String, Object>> createTask(@RequestParam HashMap<String, String> ReqMap)
	{
		Task t = taskRepository.save(taskService.createTask(ReqMap));

		return taskService.returnOkResponse(true, "Task created successfully!", 1, true, t);
	}

	@DeleteMapping(path = "/delete")
	public @ResponseBody ResponseEntity<Map<String, Object>> deleteTask(@RequestParam int id)
	{
		if (!taskRepository.existsById(id))
		{
			return taskService.returnOkResponse(true, "Task with id:" + id + " is not found!", 0, false, null);
		}

		taskRepository.deleteById(id);

		return taskService.returnOkResponse(true, "Task deleted successfully!", 1, false, null);
	}

	@PutMapping("/update")
	public ResponseEntity<Map<String, Object>> updateTask(Task nTask, @RequestParam int id)
	{
		return taskRepository
			.findById(id)
			.map(tsk ->
			{
				nTask.setId(tsk.getId());

				taskRepository.save(nTask);

				return taskService.returnOkResponse(true, "Task updated successfully!", 1, true, nTask.getId());
			})
			.orElse(taskService.returnOkResponse(false, "Can't find task with id: " + id + "!", 0, false, null));
	}
}