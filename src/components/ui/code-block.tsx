"use client";

import * as React from "react";
import { Badge, CheckCircle } from "lucide-react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}

export function CodeBlock({ content }: Props) {
  if (!content) return null;
  const codeBlockRegex = /```(\w+)?\s*file="([^"]+)"([\s\S]*?)```/g;
  const matches = Array.from(content.matchAll(codeBlockRegex));

  if (matches.length === 0) {
    return (
      <div className="whitespace-pre-wrap text-gray-300 text-xs">{content}</div>
    );
  }

  return (
    <div className="space-y-1">
      {matches.map((match, index) => {
        const [, , fileName] = match;
        const uniqueKey = `${fileName}-${index}`;
        return (
          <div
            key={uniqueKey}
            className="flex items-center justify-between rounded-lg border border-gray-700 bg-gray-800/50 px-2 py-1.5"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-full bg-gray-400 p-0.5">
                <CheckCircle className="size-2" />
              </div>
              <span className="font-mono text-gray-300 text-xs">
                {fileName}
              </span>
            </div>
            <Badge className="bg-gray-700 text-gray-300 text-xs hover:bg-gray-700">
              Generated
            </Badge>
          </div>
        );
      })}
    </div>
  );
}
