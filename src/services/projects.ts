import { IProject, IProjects } from "@/interfaces/projects";
import { instance } from "@/utils/axios";

export const getProjects = async (): Promise<IProjects[]> => {
  const response = await instance.get(`/projects`);
  return response.data;
};

export const getProjectById = async (id: string): Promise<IProject> => {
  const response = await instance.get(`/projects/${id}`);
  return response.data;
};
