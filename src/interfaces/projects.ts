export interface IProject {
  id: string;
  object: "project";
  name: string;
  privacy: "private" | "public";
  createdAt: string;
  updatedAt: string;
  apiUrl: string;
  webUrl: string;
  chats?: {
    id: string;
    object: "chat";
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
  }[];
}

export interface IProjects {
  object: "list";
  data: {
    id: string;
    object: string;
    privacy: "private" | "public";
    name: string;
    createdAt: string;
    updatedAt: string;
    webUrl: string;
    apiUrl: string;
  }[];
}
