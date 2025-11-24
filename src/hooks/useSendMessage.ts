import { QUERY_KEY } from "@/constants/query-key";
import { createMessage } from "@/services/messages";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useSendMessage() {
  const queryClient = useQueryClient();
  const { mutate: sendMessage, ...rest } = useMutation({
    mutationKey: ["create-message"],
    mutationFn: async (data: { message: string; chatId: string }) => {
      return await createMessage(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CHATS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MESSAGES] });
    },
  });

  return { sendMessage, ...rest };
}

export default useSendMessage;
