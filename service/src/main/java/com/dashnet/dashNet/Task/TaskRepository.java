package com.dashnet.dashNet.Task;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskRepository extends CrudRepository<Task, Integer> {
	List<Task> findByTitleContaining(String title);
	List<Task> findByDescriptionContaining(String description);
	List<Task> findByTeamId(Long teamid);
}