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

	@ManyToOne
	@JoinColumn(name = "creator_id")
	private User creatorUser;

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
	private String ttype;

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public User getAssagnedUser()
	{
		return assagnedUser;
	}

	public void setAssagnedUser(User assagnedUser)
	{
		this.assagnedUser = assagnedUser;
	}
	public User getCreatorUser()
	{
		return creatorUser;
	}

	public void setCreatorUser(User creatorUser)
	{
		this.creatorUser = creatorUser;
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

	public String getTtype()
	{
		return ttype;
	}

	public void setTtype(String ttype)
	{
		this.ttype = ttype;
	}

	public Task()
	{
	}

	@Override
	public int hashCode()
	{
		return Objects.hash(id, creatorUser.getId(), assagnedUser.getId(), teamId, commentTbId, status, createdDate, deadlineDate, title, description);
	}
}
