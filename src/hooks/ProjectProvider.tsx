import { useDisclosure } from "@chakra-ui/react";
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
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
  const [hidden, setHidden] = useState(isOpen);
  const [changed, setChanged] = useState(false);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        setProjects,
        isOpen,
        getButtonProps,
        getDisclosureProps,
        hidden,
        setHidden,
        changed,
        setChanged,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
