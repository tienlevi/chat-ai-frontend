"use client";

import React, { useState } from "react";
import Sidebar from "../sidebar";
import ChatHeader from "../chat-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <ChatHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content */}
        <main className="flex-1 overflow-hidden flex flex-col">{children}</main>
      </div>
    </div>
  );
}
