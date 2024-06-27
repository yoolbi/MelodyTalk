package com.global.react.domain;

import java.util.Date;
import lombok.Data;

@Data
public class MessageDTO {
	private String message_id;
	private String message_group_id;
	private String user_id;
	private String content;
	private Date createdate;
}
