package com.github.caualima17.intelli_code_ldi_agent.controller;

import com.github.caualima17.intelli_code_ldi_agent.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/document")
public class DocumentController {
    private final DocumentService documentService;

    @Autowired
    public DocumentController(DocumentService documentService) {
        this.documentService = documentService;
    }

    @GetMapping("init-mapping")
    public ResponseEntity<Void> initMapping() {
        documentService.init();
        return ResponseEntity.ok().build();
    }
}
