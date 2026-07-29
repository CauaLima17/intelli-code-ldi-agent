import ChatAgent from "./components/ChatAgent.tsx";
import {Toaster} from "sonner";

function App() {
    return (
        <main className="h-screen max-w-4xl mx-auto p-4">
            <Toaster />
            <ChatAgent/>
        </main>
    )
}

export default App
