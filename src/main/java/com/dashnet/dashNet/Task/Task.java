package com.dashnet.dashNet.Task;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.sql.Date;
import java.util.Objects;

@Entity
public class Task
{
	private @Id
	@GeneratedValue Long id;
	private Long creatorId;
	private Long assagneId;
	private Long teamId;
	private Long commentTbId;
	private int status;
	private Date createdDate;
	private Date deadlineDate;
	private String title;
	private String description;

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public Long getCreatorId()
	{
		return creatorId;
	}

	public void setCreatorId(Long creatorId)
	{
		this.creatorId = creatorId;
	}

	public Long getAssagneId()
	{
		return assagneId;
	}

	public void setAssagneId(Long assagneId)
	{
		this.assagneId = assagneId;
	}

	public Long getTeamId()
	{
		return teamId;
	}

	public void setTeamId(Long teamId)
	{
		this.teamId = teamId;
	}

	public Long getCommentTbId()
	{
		return commentTbId;
	}

	public void setCommentTbId(Long commentTbId)
	{
		this.commentTbId = commentTbId;
	}

	public int getStatus()
	{
		return status;
	}

	public void setStatus(int status)
	{
		this.status = status;
	}

	public Date getCreatedDate()
	{
		return createdDate;
	}

	public void setCreatedDate(Date createdDate)
	{
		this.createdDate = createdDate;
	}

	public Date getDeadlineDate()
	{
		return deadlineDate;
	}

	public void setDeadlineDate(Date deadlineDate)
	{
		this.deadlineDate = deadlineDate;
	}

	public String getTitle()
	{
		return this.title;
	}

	public void setTitle(String title)
	{
		this.title = title;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public Task()
	{

	}

	@Override
	public boolean equals(Object o)
	{
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Task task = (Task) o;
		return status == task.status && Objects.equals(id, task.id) && Objects.equals(creatorId, task.creatorId) && Objects.equals(assagneId, task.assagneId) && Objects.equals(teamId, task.teamId) && Objects.equals(commentTbId, task.commentTbId) && Objects.equals(createdDate, task.createdDate) && Objects.equals(deadlineDate, task.deadlineDate) && Objects.equals(title, task.title) && Objects.equals(description, task.description);
	}

	@Override
	public int hashCode()
	{
		return Objects.hash(id, creatorId, assagneId, teamId, commentTbId, status, createdDate, deadlineDate, title, description);
	}

	@Override
	public String toString()
	{
		return "Task{" +
			"id=" + id +
			", creatorId=" + creatorId +
			", assagneId=" + assagneId +
			", teamId=" + teamId +
			", commentTbId=" + commentTbId +
			", status=" + status +
			", createdDate=" + createdDate +
			", deadlineDate=" + deadlineDate +
			", title='" + title + '\'' +
			", description='" + description + '\'' +
			'}';
	}
}
