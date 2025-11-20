import { instance } from "@/utils/axios";

export const createMessage = async (data: { message: string }) => {
  const response = await instance.post("/chat", data);
  return response.data;
};

export const getMessages = async (id: string) => {
  const response = await instance.get(`/chat/${id}`);
  return response.data;
};

export const getChats = async () => {
  const response = await instance.get(`/chat`);
  return response.data;
};
