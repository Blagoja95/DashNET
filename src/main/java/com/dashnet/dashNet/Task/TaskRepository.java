package com.dashnet.dashNet.Task;

import org.springframework.data.repository.CrudRepository;

import com.dashnet.dashNet.Task.Task;

import java.util.List;

public interface TaskRepository extends CrudRepository<Task, Integer> {
	List<Task> findByTitleLike(String title);

//	List<Task> findBy(String name, String value);
}