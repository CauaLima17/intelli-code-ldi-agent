import {useRef, useState} from "react";
import {Bot, Send, Trash2} from "lucide-react";
import {Button} from "./ui/button.tsx";
import ChatAgentService from "../service/ChatAgentService.ts";

type Message = {
    id: number;
    role: "assistant" | "user";
    time: string;
    text?: string;
};

const INITIAL: Message[] = [
    {
        id: 1,
        role: "assistant",
        time: now(),
        text: "👋 Olá! Sou seu assistente de IA. Posso ajudar você a escrever, revisar e melhorar seu código Java. O que você precisa?",
    }
];

function now() {
    return new Date().toLocaleTimeString("pt-BR", {hour: "2-digit", minute: "2-digit"});
}

const ChatAgent = () => {
    const [messages, setMessages] = useState<Message[]>(INITIAL);
    const [draft, setDraft] = useState("");
    const listRef = useRef<HTMLDivElement>(null);

    const send = async  () => {
        const userQuestion = draft.trim();
        if (!userQuestion) return;

        const { data } = await ChatAgentService.callAgent({ conversationID: 1, question: draft })
        setMessages((prev)=> [
            ...prev,
            { id: 1, text: draft, role: "user", time: now() },
            { id: 1, text: data.anwser, role: "assistant", time: data.time }
        ]);

        setDraft("");
        requestAnimationFrame(() => {
            listRef.current?.scrollTo({top: listRef.current.scrollHeight, behavior: "smooth"});
        });
    }

    return (
        <aside className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex items-center justify-between gap-3 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span
                      className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Bot className="size-5"/>
                  </span>
                    <div>
                        <h2 className="font-semibold">Assistente RAG</h2>
                        <p className="text-sm text-muted-foreground">Seu assistente para desenvolvimento de scripts</p>
                    </div>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground">
                    <Button variant="ghost" size="icon" aria-label="Limpar conversa" onClick={() => setMessages([])}>
                        <Trash2 className="size-4"/>
                    </Button>
                </div>
            </div>

            <div ref={listRef} className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-5 pb-4">
                {messages.map((m) => (
                    <div
                        key={m.id}
                        className={
                            m.role === "user"
                                ? "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-accent px-4 py-3 text-accent-foreground"
                                : "mr-auto w-full max-w-[95%] rounded-2xl rounded-bl-md bg-muted px-4 py-3"
                        }
                    >
                        {m.text && <p className="mt-1 text-[15px] leading-relaxed">{m.text}</p>}
                        {/*{m.code && (*/}
                        {/*    <div*/}
                        {/*        className="relative mt-3 overflow-x-auto rounded-xl border border-border bg-code-bg p-4">*/}
                        {/*        <Copy className="absolute top-3 right-3 size-4 text-muted-foreground"/>*/}
                        {/*        <pre className="font-mono text-[12px] leading-5">*/}
                        {/*            /!*<code>{highlightJava(m.code)}</code>*!/*/}
                        {/*        </pre>*/}
                        {/*    </div>*/}
                        {/*)}div*/}
                        <p
                            className={
                                m.role === "user"
                                    ? "mt-2 text-right text-xs opacity-70"
                                    : "mt-2 text-xs text-muted-foreground"
                            }
                        >
                            {m.time}
                        </p>
                    </div>
                ))}
            </div>

            <div className="border-t border-border p-4">
                <div className="flex items-end gap-2 rounded-xl border border-border bg-background p-2">
                      <textarea
                          value={draft}
                          onChange={(e) => setDraft(e.target.value)}
                          onKeyDown={(e) => {
                              if (e.key === "Enter" && !e.shiftKey) {
                                  e.preventDefault();
                                  send();
                              }
                          }}
                          rows={2}
                          placeholder="Digite sua mensagem..."
                          aria-label="Mensagem para o assistente"
                          className="max-h-32 min-h-11 flex-1 resize-none bg-transparent px-2 py-2 text-[15px] outline-none placeholder:text-muted-foreground"
                      />
                    <Button size="icon" className="size-11 rounded-xl" aria-label="Enviar mensagem" onClick={send}>
                        <Send className="size-5"/>
                    </Button>
                </div>

                <p className="mt-2 text-xs text-muted-foreground">
                    Pressione Enter para enviar, Shift + Enter para nova linha
                </p>
            </div>
        </aside>
    );
}

export default ChatAgent;