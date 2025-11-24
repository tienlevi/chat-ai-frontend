import { instance } from "@/utils/axios";

export const getChats = async () => {
  const response = await instance.get(`/chat`);
  return response.data;
};

export const getChatById = async (id: string) => {
  const response = await instance.get(`/chat/${id}`);
  return response.data;
};

export const createChat = async (data: { message: string }) => {
  const response = await instance.post(`/chat`, data);
  return response.data;
};
