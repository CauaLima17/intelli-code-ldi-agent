export type CallAgentRequestType = {
    conversationID: number,
    question: string
}

export type CallAgentResponseType = {
    conversationID: number,
    anwser: string,
    code: string,
    time: string
}