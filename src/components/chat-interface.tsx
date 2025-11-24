"use client";

import { useRef, useEffect } from "react";
import ChatMessages from "./chat-messages";
import ChatInput from "./chat-input";

import { useChatById } from "@/hooks/useChats";
import useCreateChat from "@/hooks/useCreateChat";
import useSendMessage from "@/hooks/useSendMessage";
import { useMessageStore } from "@/stores/useMessageStore";
import { IMessage } from "@/interfaces/chats";

export interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export default function ChatInterface({ id }: { id: string }) {
  const { data: chats } = useChatById(id);
  const { addMessage, getMessages, messages } = useMessageStore();
  const { chatMessage, isPending } = useCreateChat();
  const { sendMessage, isPending: isSendPending } = useSendMessage();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (content: string) => {
    if (id) {
      addMessage({
        id: id,
        content: content,
        role: "user",
        createdAt: new Date().toString(),
        type: "message",
      });
      sendMessage({ message: content, chatId: id });
    } else {
      chatMessage({ message: content });
    }
  };

  const message =
    chats?.data.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    ) || [];

  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    getMessages(message);
  }, [message]);

  return (
    <>
      {/* Messages */}
      <ChatMessages
        messages={messages}
        messagesEndRef={messagesEndRef as any}
      />

      {/* Input */}
      <ChatInput
        onSendMessage={handleSendMessage}
        isPending={isPending || isSendPending}
      />
    </>
  );
}
