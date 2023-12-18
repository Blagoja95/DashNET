package com.dashnet.dashNet.Task;

import org.springframework.data.repository.CrudRepository;

import com.dashnet.dashNet.Task.Task;

public interface TaskRepository extends CrudRepository<Task, Integer> {

}