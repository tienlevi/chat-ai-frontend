"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isPending: boolean;
}

export default function ChatInput({
  onSendMessage,
  isPending,
}: ChatInputProps) {
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        120
      )}px`;
    }
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
      setIsExpanded(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-border bg-card px-4 py-4 sm:px-6"
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex gap-3 rounded-lg border border-input bg-background p-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            onBlur={() => !input && setIsExpanded(false)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here... (Shift + Enter for new line)"
            className="flex-1 resize-none bg-transparent text-foreground placeholder-muted-foreground outline-none"
            rows={1}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || isPending}
            className="self-end bg-blue-600 hover:bg-blue-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Use Shift + Enter to create a new line
        </p>
      </div>
    </form>
  );
}
