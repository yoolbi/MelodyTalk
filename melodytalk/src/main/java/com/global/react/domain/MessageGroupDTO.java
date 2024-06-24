package com.global.react.domain;

import java.util.Date;
import lombok.Data;

@Data
public class MessageGroupDTO {
	private String message_group_id;
	private String from_user_id;
	private String to_user_id;
	private Date updatedate;
	private Integer check_read;
}
