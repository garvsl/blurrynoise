import { useContext, createContext, useState, useEffect } from "react";

const ProjectContext = createContext<any>(null);

export const useProject = () => useContext(ProjectContext);

export default function ProjectProvider({ children }: any) {
  const [projects, setProjects] = useState<any>([
    {
      id: 1,
      name: "OgProject",
      files: ["null"],
    },
  ]);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        setProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
