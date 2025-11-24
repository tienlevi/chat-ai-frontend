import { instance } from "@/utils/axios";

export const createMessage = async (data: {
  message: string;
  chatId: string;
}) => {
  const response = await instance.post("/message", data);
  return response.data;
};
