import { instance } from "@/utils/axios";

export const createMessage = async (data: { message: string }) => {
  const response = await instance.post("/chat", data);
  return response.data;
};
