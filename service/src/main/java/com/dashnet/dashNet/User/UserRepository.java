package com.dashnet.dashNet.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	List<User> findAll();
	User findUserById(Long id);

	User findUserByEmail(String email);
}