package com.github.caualima17.controller;

import com.github.caualima17.dto.ChatRequestDTO;
import com.github.caualima17.dto.ChatResponseDTO;
import com.github.caualima17.service.RetriveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/chat")
public class ChatController {
    private final RetriveService retriveService;

    @Autowired
    public ChatController(RetriveService retriveService) {
        this.retriveService = retriveService;
    }

    @PostMapping("/code-help")
    public ResponseEntity<ChatResponseDTO> chatCodeHelp(@RequestBody ChatRequestDTO data) {
        return ResponseEntity.ok(retriveService.callAgent(data));
    }
}
