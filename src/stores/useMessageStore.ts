import { IMessage } from "@/interfaces/chats";
import { create } from "zustand";

interface MessageStore {
  messages: IMessage[];
  getMessages: (messages: IMessage[]) => void;
  addMessage: (message: IMessage) => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  getMessages: (messages) => set({ messages: messages }),
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));
