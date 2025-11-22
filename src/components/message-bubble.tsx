"use client";

import { IMessage } from "@/interfaces/chats";
import { format } from "date-fns";

interface MessageBubbleProps {
  message: IMessage;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex max-w-xs gap-3 sm:max-w-sm lg:max-w-md ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}
        <div
          className={`h-8 w-8 shrink-0 rounded-full ${
            isUser
              ? "bg-linear-to-br from-blue-500 to-blue-600"
              : "bg-linear-to-br from-purple-500 to-purple-600"
          } flex items-center justify-center text-xs font-bold text-white`}
        >
          {isUser ? "U" : "AI"}
        </div>

        {/* Message Bubble */}
        <div className="flex flex-col gap-1">
          <div
            className={`rounded-lg px-4 py-2.5 text-sm break-all ${
              isUser
                ? "bg-blue-600 text-white"
                : "bg-card text-foreground border border-border"
            }`}
          >
            {message.content}
          </div>
          <span
            className={`text-xs text-muted-foreground ${
              isUser ? "text-right" : "text-left"
            }`}
          >
            {format(message.createdAt, "HH:mm")}
          </span>
        </div>
      </div>
    </div>
  );
}
