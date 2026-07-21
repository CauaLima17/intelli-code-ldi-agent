package com.github.caualima17.intelli_code_ldi_agent.service;

import org.springframework.ai.document.Document;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import org.springframework.web.server.ResponseStatusException;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class DocumentService {
    private final VectorStore vectorStore;
    @Value("classpath:/docs/*.md")
    private final Resource[] files;

    @Autowired
    public DocumentService(VectorStore vectorStore, Resource[] files) {
        this.vectorStore = vectorStore;
        this.files = files;
    }

    public void init() {
        List<Document> documents = new ArrayList<>();

        for (Resource file : files) {
            String[] fileContent = readFile(file.getFilename()).split("#### ");

            for (String fileBlock : fileContent) {
                documents.add(new Document(fileBlock, Map.of("classe", file.getFilename())));
            }
        }

        vectorStore.add(documents);
    }

    private String readFile(String fileName) {
        try {
            ClassPathResource resource = new ClassPathResource("docs/" + fileName);
            return StreamUtils.copyToString(resource.getInputStream(), StandardCharsets.UTF_8);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Deu erro ao ler o arquivo: " + e.getMessage());
        }
    }
}
