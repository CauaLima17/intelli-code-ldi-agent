package com.github.caualima17.intelli_code_ldi_agent.dto;

import lombok.Data;

@Data
public class ChatRequestDTO {
    private Long conversationID;
    private String question;
}
