package com.dashnet.dashNet.Task;

import com.dashnet.dashNet.User.User;
import jakarta.persistence.*;

import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "task")
public class Task
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;

	private Long creatorId;

	@ManyToOne
	@JoinColumn(name = "assagne_id")
	private User assagnedUser;

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

	public User getAssagnedUser()
	{
		return assagnedUser;
	}

	public void setAssagnedUser(User assagnedUser)
	{
		this.assagnedUser = assagnedUser;
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
	public int hashCode()
	{
		return Objects.hash(id, creatorId, assagnedUser.getId(), teamId, commentTbId, status, createdDate, deadlineDate, title, description);
	}
}
