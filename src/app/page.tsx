"use client";

import { useState } from "react";

type Message = {
  id: number,
  role: "user" | "assistant",
  content: string
};

export default function Home(){
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role:"assistant",
      content: "Hello, I am ResonanceAI. For now, I can reply with mock responses. Soon, I will support real AI and voice conversations."
    }
  ]);

  const [input , setInput] = useState("")

  function handleSendMessage(){
    const trimmedInput = input.trim();

    if(!trimmedInput){
      return ;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: trimmedInput,
    }

    const mockAssistantMessage:Message = {
      id: Date.now() + 1,
      role: "assistant",
      content:  "This is a mock response from ResonanceAI. In the next milestone, this will be replaced with a real AI response from the backend.",
    };  

    setMessages((previousmessages) => [
      ...previousmessages,
      userMessage,
      mockAssistantMessage,
    ]);

    setInput(""); 
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>){
    if(event.key === "Enter"){
      handleSendMessage()
    }
  }
  
  return (
    <main className="min-h-screen bg-black text-white flex justify-center px-4 py-8">
      <section className="w-full max-w-4xl flex flex-col">
        <header className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            ResonanceAI
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            Real-Time Voice-to-Voice AI Agent
          </h1>

          <p className="mt-4 text-gray-300">
            Day 2 milestone: basic chat interface with local mock responses.
          </p>
        </header>

        <div className="flex-1 rounded-2xl border border-gray-800 bg-gray-950 p-4 md:p-6">
          <div className="h-[500px] overflow-y-auto space-y-4 pr-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm md:text-base ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-100"
                  }`}
                >
                  <p className="mb-1 text-xs uppercase tracking-wide opacity-70">
                    {message.role === "user" ? "You" : "ResonanceAI"}
                  </p>
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 rounded-xl border border-gray-700 bg-black px-4 py-3 text-white outline-none focus:border-blue-500"
            />

            <button
              onClick={handleSendMessage}
              className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

