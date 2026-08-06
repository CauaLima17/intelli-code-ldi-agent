package com.github.caualima17.service;

import com.github.caualima17.dto.ChatRequestDTO;
import com.github.caualima17.dto.ChatResponseDTO;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.SystemPromptTemplate;
import org.springframework.ai.document.Document;
import org.springframework.ai.vectorstore.SearchRequest;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;


import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class RetriveService {
    private final VectorStore vectorStore;
    private final ChatClient chatClient;
    @Value("classpath:/prompts/rag-template.st")
    private Resource promptTemplate;

    @Autowired
    public RetriveService(VectorStore vectorStore, ChatClient.Builder chatClient) {
        this.vectorStore = vectorStore;
        this.chatClient = chatClient.build();
    }

    public ChatResponseDTO callAgent(ChatRequestDTO chatRequest) {
        String information = retrieveInformation(chatRequest.getQuestion());

        SystemPromptTemplate template = new SystemPromptTemplate(promptTemplate);
        Prompt prompt = new Prompt(
                template.createMessage(Map.of(
                        "information", information
                )),
                new UserMessage(chatRequest.getQuestion())
        );

        ChatResponseDTO response = chatClient.prompt(prompt).call().entity(ChatResponseDTO.class);
        response.setTime(LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm")));

        return response;
    }

    private String retrieveInformation(String question) {
        List<Document> similarContents = vectorStore
                .similaritySearch(SearchRequest.builder()
                        .query(question)
                        .topK(16)
                        .similarityThreshold(0.65)
                        .build()
        );

        return similarContents.stream()
                .map(Document::getText)
                .collect(Collectors.joining("\n"));
    }
}
