import { QUERY_KEY } from "@/constants/query-key";
import { createChat } from "@/services/chats";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useCreateChat() {
  const queryClient = useQueryClient();
  const { mutate: chatMessage, ...rest } = useMutation({
    mutationKey: ["create-message"],
    mutationFn: async (data: { message: string }) => {
      return await createChat(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CHATS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MESSAGES] });
    },
  });

  return { chatMessage, ...rest };
}

export default useCreateChat;
