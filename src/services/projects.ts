import { instance } from "@/utils/axios";

export const getProjects = async () => {
  const response = await instance.get(`/projects`);
  return response.data;
};

export const getProjectById = async (id: string) => {
  const response = await instance.get(`/projects/${id}`);
  return response.data;
};
