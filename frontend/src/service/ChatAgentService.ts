import { httpClient } from "./HttpClient.ts";
import type {AxiosInstance, AxiosResponse} from "axios";
import type {CallAgentRequestType, CallAgentResponseType} from "../types/CallAgentTypes.ts";

class ClientAgentService {
    private readonly httpClient;

    constructor(httpClient: AxiosInstance) {
        this.httpClient = httpClient;
    }

    public callAgent(message: CallAgentRequestType): Promise<AxiosResponse<CallAgentResponseType>> {
        return this.httpClient.post("/chat/code-help", message);
    }
}

export default new ClientAgentService(httpClient);