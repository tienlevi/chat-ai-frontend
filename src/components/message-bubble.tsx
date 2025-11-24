"use client";

import { IMessage } from "@/interfaces/chats";
import { formatMarkdown } from "@/utils/format";
import { format } from "date-fns";
import { CodeBlock } from "./ui/code-block";
import "katex/dist/katex.min.css"; // Required for math rendering
import { User, Bot } from "lucide-react";

interface MessageBubbleProps {
  message: IMessage;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";
  const isAssistant = message.role === "assistant";

  let content = message.content;
  try {
    if (
      typeof content === "string" &&
      (content.startsWith("{") || content.startsWith("["))
    ) {
      const parsed = JSON.parse(content);
      if (parsed.parts && Array.isArray(parsed.parts)) {
        content = parsed.parts
          .filter((p: any) => p.content)
          .map((p: any) => p.content)
          .join("\n\n");
      }
    }
  } catch (e) {
    // ignore error, keep original content
  }

  const codeProjectContentMatch = content?.match(
    /<CodeProject[^>]*>([\s\S]*?)<\/CodeProject>/
  );
  const codeProjectContent = codeProjectContentMatch
    ? codeProjectContentMatch[1].trim()
    : null;

  console.log("content", content);

  return (
    <>
      <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
        <div
          className={`flex max-w-[80%] gap-2 ${
            isUser ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {/* Avatar */}
          <div
            className={`h-8 w-8 shrink-0 rounded-full ${
              isUser
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            } flex items-center justify-center`}
          >
            {isUser ? (
              <User className="h-5 w-5" />
            ) : (
              <Bot className="h-5 w-5" />
            )}
          </div>

          <div className="flex flex-col gap-1 min-w-0">
            {/* Message Content */}
            <div
              className={`rounded-lg px-4 py-2 ${
                isUser
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground border border-border"
              }`}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: formatMarkdown(content),
                }}
              />
              {isAssistant && codeProjectContent && (
                <CodeBlock content={codeProjectContent} />
              )}
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
