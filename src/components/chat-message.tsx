import type { Message } from "./chat-interface";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex max-w-2xl gap-3 ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}
        <div
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          }`}
        >
          {isUser ? "U" : "AI"}
        </div>

        {/* Message Content */}
        <div
          className={`px-4 py-3 rounded-lg ${
            isUser
              ? "bg-primary text-primary-foreground rounded-br-none"
              : "bg-secondary text-secondary-foreground rounded-bl-none"
          }`}
        >
          <p className="text-sm leading-relaxed">{message.content}</p>
          <span
            className={`text-xs mt-2 block ${
              isUser
                ? "text-primary-foreground/70"
                : "text-secondary-foreground/70"
            }`}
          >
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
