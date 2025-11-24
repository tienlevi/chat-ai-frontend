"use client";

import { Plus, MessageSquare, Trash2, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useChats } from "@/hooks/useChats";

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

export default function Sidebar({ open, onToggle }: SidebarProps) {
  const { data: chats } = useChats();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 transform bg-card transition-transform duration-300 ease-in-out lg:static lg:z-0 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        } flex flex-col border-r border-border`}
      >
        {/* New Chat Button */}
        <div className="border-b border-border p-4">
          <Button
            className="w-full gap-2 bg-blue-600 hover:bg-blue-700"
            size="sm"
          >
            <Plus className="h-4 w-4" />
            New Chat
          </Button>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <div className="space-y-2">
            {chats?.data.map((chat) => (
              <Link
                href={`/chat/${chat.id}`}
                key={chat.id}
                className="group w-full px-3 py-2.5 text-left text-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 flex-1 items-start gap-2">
                    <MessageSquare className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium text-foreground">
                        {chat.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {chat.createdAt}
                      </p>
                    </div>
                  </div>
                  <Trash2 className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="border-t border-border p-4">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2"
            size="sm"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </div>
      </aside>
    </>
  );
}
