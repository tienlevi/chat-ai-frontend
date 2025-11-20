import { QUERY_KEY } from "@/constants/query-key";
import { getMessages } from "@/services/chats";
import { useQuery } from "@tanstack/react-query";

export function useMessages(id: string) {
  return useQuery({
    queryKey: [QUERY_KEY.MESSAGES, id],
    queryFn: async () => {
      const result = await getMessages(id);
      return result;
    },
    enabled: !!id,
  });
}
