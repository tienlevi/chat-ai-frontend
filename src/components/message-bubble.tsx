"use client";

import { IMessage } from "@/interfaces/chats";
import { formatMarkdown } from "@/utils/format";
import { format } from "date-fns";

interface MessageBubbleProps {
  message: IMessage;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  let content = message.content;
  try {
    if (
      typeof content === "string" &&
      (content.startsWith("{") || content.startsWith("["))
    ) {
      const parsed = JSON.parse(content);
      if (parsed.version && Array.isArray(parsed.parts)) {
        content = parsed.parts.map((p: any) => p.content).join("");
      }
    }
  } catch (e) {
    // ignore error, keep original content
  }

  return (
    <>
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

          <div className="flex flex-col gap-1">
            <div
              className={`rounded-lg px-4 py-2.5 text-sm break-all ${
                isUser
                  ? "bg-blue-600 text-white"
                  : "bg-card text-foreground border border-border"
              }`}
            >
              <div
                dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
              />
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
    </>
  );
}
