import { useDisclosure } from "@chakra-ui/react";
import { useContext, createContext, useState, useEffect } from "react";

const ProjectContext = createContext<any>(null);

export const useProject = () => useContext(ProjectContext);

export default function ProjectProvider({ children }: any) {
  const [projects, setProjects] = useState<any>([
    {
      id: 1,
      name: "OgProject",
      files: [],
    },
    {
      id: 2,
      name: "NewProject",
      files: [],
    },
  ]);
  const [files, setFiles] = useState<any>([]);
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
  const [hidden, setHidden] = useState(isOpen);
  const [changed, setChanged] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState<any>(0);
  const [curent, setCurrent] = useState<any>(0);

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
        playing,
        setPlaying,
        duration,
        setDuration,
        curent,
        setCurrent,
        files,
        setFiles,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
