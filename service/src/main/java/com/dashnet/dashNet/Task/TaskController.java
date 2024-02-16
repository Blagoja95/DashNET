package com.dashnet.dashNet.Task;

import com.dashnet.dashNet.Task.Exceptions.TaskGenericException;
import com.dashnet.dashNet.Task.Exceptions.TaskNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
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

	@GetMapping("/allCount")
	public ResponseEntity<Map<String, Object>> getCount()
	{
		return taskService.returnOkResponse(false, "", 1, true, taskService.countTasks(taskRepository, (long) -1));
	}

	@GetMapping("/count/{teamID}")
	public ResponseEntity<Map<String, Object>> getTeamTaskCount(@PathVariable Long teamID)
	{
		return taskService.returnOkResponse(false, "", 1, true, taskService.countTasks(taskRepository, teamID));
	}

	@GetMapping("/{id}")
	public ResponseEntity<Map<String, Object>> getOne(@PathVariable Long id)
	{
		Task a = taskRepository
			.findById(id)
			.orElseThrow(() -> new TaskNotFoundException(id));

		return taskService.returnOkResponse(false, "", 1, true, a);
	}

	@GetMapping("/team/{teamId}")
	public ResponseEntity<Map<String, Object>> getByTeam(@PathVariable Long teamId)
	{
		List<Task> a = taskRepository
			.findByTeamId(teamId);

		if (a.isEmpty())
		{
			throw new TaskGenericException("No tasks found for selected team!");
		}

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
	public @ResponseBody ResponseEntity<Map<String, Object>> deleteTask(@RequestBody Task ob)
	{
		if (!taskRepository.existsById(ob.getId()))
		{
			throw new TaskNotFoundException(ob.getId());
		}

		taskRepository.deleteById(ob.getId());

		return taskService.returnOkResponse(true, "Task deleted successfully!", 1, false, null);
	}

	@PutMapping("/update")
	public ResponseEntity<Map<String, Object>> updateTask(Task nTask, @RequestParam Long id)
	{
		return taskService.updateTaskPatch(taskRepository, nTask, "update-all");
	}

	@PatchMapping("/update/status/ow")
	public ResponseEntity<Map<String, Object>> updateOneWay(@RequestBody Task ob)
	{
		return taskService.updateTaskPatch(taskRepository, ob, "status-ow");
	}

	@PatchMapping("/update/description")
	public ResponseEntity<Map<String, Object>> updateDescription(@RequestBody Task ob)
	{
		return taskService.updateTaskPatch(taskRepository, ob, "description");
	}

	@PatchMapping("/update/title")
	public ResponseEntity<Map<String, Object>> updateTitle(@RequestBody Task ob)
	{
		return taskService.updateTaskPatch(taskRepository, ob, "title");
	}

	@PatchMapping("/update/deadlineDate")
	public ResponseEntity<Map<String, Object>> updateDeadline(@RequestBody Task ob)
	{
		return taskService.updateTaskPatch(taskRepository, ob, "deadline");
	}

	@PatchMapping("/update/ttype")
	public ResponseEntity<Map<String, Object>> updateTtype(@RequestBody Task ob)
	{
		return taskService.updateTaskPatch(taskRepository, ob, "ttype");
	}
}