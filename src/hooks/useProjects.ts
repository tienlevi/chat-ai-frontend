import { QUERY_KEY } from "@/constants/query-key";
import { IProject, IProjects } from "@/interfaces/projects";
import { getProjectById, getProjects } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";

export function useProjects() {
  return useQuery<IProjects>({
    queryKey: [QUERY_KEY.PROJECTS],
    queryFn: async () => {
      const result = await getProjects();
      return result as unknown as IProjects;
    },
  });
}

export function useProjectById(id: string) {
  return useQuery<IProject>({
    queryKey: [QUERY_KEY.PROJECTS, id],
    queryFn: async () => {
      const result = await getProjectById(id);
      return result as IProject;
    },
    enabled: !!id,
  });
}
