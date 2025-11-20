"use client";

import { useState, useRef, useEffect } from "react";
import ChatMessages from "./chat-messages";
import ChatInput from "./chat-input";
import useChatMessage from "@/hooks/useChatMessage";

export interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hey! How can I help you today?",
      sender: "ai",
      timestamp: new Date(Date.now() - 60000),
    },
  ]);
  const { chatMessage, isPending } = useChatMessage();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    chatMessage({ message: content });

    // const aiMessage: Message = {
    //   id: (Date.now() + 1).toString(),
    //   content:
    //     response.chat?.response || "I received your message. Processing...",
    //   sender: "ai",
    //   timestamp: new Date(),
    // };
    // setMessages((prev) => [...prev, aiMessage]);
  };

  return (
    <>
      {/* Messages */}
      <ChatMessages
        messages={messages}
        messagesEndRef={messagesEndRef as any}
      />

      {/* Input */}
      <ChatInput onSendMessage={handleSendMessage} isPending={isPending} />
    </>
  );
}
