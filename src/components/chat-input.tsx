import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        onSend(input);
        setInput("");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message here... (Shift+Enter for new line)"
        disabled={isLoading}
        className="flex-1 resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
        rows={3}
      />
      <Button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="self-end"
      >
        {isLoading ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
