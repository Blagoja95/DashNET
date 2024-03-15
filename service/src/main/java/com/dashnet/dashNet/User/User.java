package com.dashnet.dashNet.User;

import com.dashnet.dashNet.Task.Task;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.Set;

@SuppressWarnings("unused")
@Entity
@JsonInclude(JsonInclude.Include.NON_NULL)
@Table(name = "user")
public class User
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;

	@OneToMany(mappedBy = "assignedUser")
	private Set<Task> tasks;

	@OneToMany(mappedBy = "creatorUser")
	private Set<Task> ctasks;

	@NotNull(message = "First Name is required")
	private String fname;
	@NotNull(message = "Last Name is required")
	private String lname;
	@NotNull(message = "Email is required")
	private String email;

	@NotNull(message = "Password is required")
	@JsonBackReference
	private String password;

	private String src = null;

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public String getFname()
	{
		return fname;
	}

	public void setFname(String fname)
	{
		this.fname = fname;
	}

	public String getLname()
	{
		return lname;
	}

	public void setLname(String lname)
	{
		this.lname = lname;
	}

	public String getEmail()
	{
		return email;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}

	public String getPassword()
	{
		return password;
	}

	public void setPassword(String password)
	{
		this.password = password;
	}

	public String getSrc()
	{
		return src;
	}

	public void setSrc(String src)
	{
		this.src = src;
	}
}