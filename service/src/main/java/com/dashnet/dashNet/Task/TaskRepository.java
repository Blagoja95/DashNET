package com.dashnet.dashNet.Task;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskRepository extends CrudRepository<Task, Long> {
	<T> List<T> findByTitleContaining(String title, Class<T> type);
	<T> List<T> findByDescriptionContaining(String description, Class<T> type);
	<T> List<T> findByTeamId(Long teamid, Class<T> type);
}