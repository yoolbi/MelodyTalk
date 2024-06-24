package com.global.react.domain;

import java.util.Date;
import lombok.Data;

@Data
public class MessageDTO {
	private String messageID;
	private String messageGroupID;
	private String userID;
	private String content;
	private Date date;
}
