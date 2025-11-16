import { QUERY_KEY } from "@/constants/query-key";
import { getProjectById, getProjects } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";

function useProjects(id?: string) {
  return useQuery({
    queryKey: [QUERY_KEY.PROJECTS, id],
    queryFn: async () => {
      if (id) {
        return getProjectById(id);
      } else {
        return getProjects();
      }
    },
  });
}

export default useProjects;
