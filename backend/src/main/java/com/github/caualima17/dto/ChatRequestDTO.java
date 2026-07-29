package com.github.caualima17.dto;

import lombok.Data;

@Data
public class ChatRequestDTO {
    private Long conversationID;
    private String question;
}
