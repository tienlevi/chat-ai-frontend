import { createMessage } from "@/services/chats";
import { useMutation } from "@tanstack/react-query";
import { ChatsCreateResponse, ChatsCreateStreamResponse } from "v0-sdk";

function useChatMessage() {
  const { mutate: chatMessage, ...rest } = useMutation({
    mutationKey: ["create-message"],
    mutationFn: async (data: {
      message: string;
    }): Promise<ChatsCreateResponse | ChatsCreateStreamResponse> => {
      return await createMessage(data);
    },
    onSuccess: () => {},
  });

  return { chatMessage, ...rest };
}

export default useChatMessage;
