package com.github.caualima17.intelli_code_ldi_agent.service;

import com.github.caualima17.intelli_code_ldi_agent.dto.ChatRequestDTO;
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

    public String callAgent(ChatRequestDTO chatRequest) {
        String information = retrieveInformation(chatRequest.getQuestion());

        SystemPromptTemplate template = new SystemPromptTemplate(promptTemplate);
        Prompt prompt = new Prompt(template.createMessage(Map.of("information", information, "question", new UserMessage(chatRequest.getQuestion()))));

        return chatClient.prompt(prompt).call().content();
    }

    private String retrieveInformation(String question) {
        List<Document> similarContents = vectorStore.similaritySearch(
                SearchRequest.builder()
                        .query(question)
                        .topK(4)
                        .similarityThreshold(0.70)
                .build()
        );

        return similarContents.stream()
                .map(Document::getText)
                .collect(Collectors.joining("\n"));
    }
}
