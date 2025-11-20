"use client";

import { useState, useRef, useEffect } from "react";
import ChatMessages from "./chat-messages";
import ChatInput from "./chat-input";
import useChatMessage from "@/hooks/useChatMessage";

import { useChatById } from "@/hooks/useChats";

export interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export default function ChatInterface({ id }: { id: string }) {
  const { data: chats } = useChatById(id);

  const { chatMessage, isPending } = useChatMessage();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const handleSendMessage = (content: string) => {
    chatMessage({ message: content });
  };

  return (
    <>
      {/* Messages */}
      <ChatMessages messages={[]} messagesEndRef={messagesEndRef as any} />

      {/* Input */}
      <ChatInput onSendMessage={handleSendMessage} isPending={isPending} />
    </>
  );
}
