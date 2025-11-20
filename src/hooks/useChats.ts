"use client";
import { QUERY_KEY } from "@/constants/query-key";
import { IProjects } from "@/interfaces/projects";
import { getChats, getMessages } from "@/services/chats";
import { useQuery } from "@tanstack/react-query";

export function useChats() {
  return useQuery<IProjects>({
    queryKey: [QUERY_KEY.CHATS],
    queryFn: async () => {
      const result = await getChats();
      return result;
    },
  });
}

export function useChatById(id: string) {
  return useQuery<IProjects>({
    queryKey: [QUERY_KEY.CHATS, id],
    queryFn: async () => {
      const result = await getMessages(id);
      return result;
    },
  });
}
