package com.dashnet.dashNet.Task.Projections;

import com.dashnet.dashNet.User.User;

import java.sql.Date;

public interface ShortTasksProjection
{
	Long getId();
	String getTitle();
	Date getDeadlineDate();
	int getStatus();
	User getAssagnedUser();
}
