import { MessageBinaryFormat } from "@v0-sdk/react";

export interface IMessage {
  id: string;
  content: string;
  experimental_content?: MessageBinaryFormat;
  createdAt: string;
  updatedAt?: string;
  type: "message";
  role: "user" | "assistant";
  apiUrl?: string;
  authorId?: string;
  parentId?: string | null;
}

export interface IChat {
  object: "message" | "list";
  pagination: {
    hasMore: boolean;
  };
  data: IMessage[];
}

export interface IChatLists {
  object: "list";
  data: {
    id: string;
    object: string;
    shareable: boolean;
    privacy: "private" | "public";
    name: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    favorite: boolean;
    authorId: string;
    projectId: string;
    webUrl: string;
    apiUrl: string;
    latestVersion: {
      id: string;
      object: string;
      status: string;
      demoUrl: string;
      createdAt: string;
      updatedAt: string;
    };
  }[];
}
