"use client";
import { QUERY_KEY } from "@/constants/query-key";
import { IChat, IChatLists } from "@/interfaces/chats";
import { getChats, getMessages } from "@/services/chats";
import { useQuery } from "@tanstack/react-query";

export function useChats() {
  return useQuery<IChatLists>({
    queryKey: [QUERY_KEY.CHATS],
    queryFn: async () => {
      const result = await getChats();
      return result;
    },
  });
}

export function useChatById(id: string) {
  return useQuery<IChat>({
    queryKey: [QUERY_KEY.CHATS, id],
    queryFn: async () => {
      const result = await getMessages(id);
      return result;
    },
  });
}
