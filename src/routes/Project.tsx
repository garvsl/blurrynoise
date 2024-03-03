import {
  Box,
  Card,
  CardBody,
  Collapse,
  Flex,
  Slide,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { useProject } from "../hooks/ProjectProvider";
import { motion } from "framer-motion";
import FileDrawer from "../components/Project/FileDrawer";
import Player from "../components/Project/Player";
import SongScreen from "../components/Project/SongScreen";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const { projects, setProjects, files, setFiles } = useProject();

  useEffect(() => {
    const proj = projects.filter((proj: any) => proj.id == Number(id));
    setProject(proj);
    setFiles(proj[0].files ? proj[0].files : []);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (project && project.length > 0) {
      let array = projects.filter((e: any) => e.id != Number(id));
      array.push({
        id: Number(id),
        name: project[0]?.name,
        files: files ? files : [],
      });
      setProjects(array);
    }
  }, [files]);

  return (
    <>
      {!loading && project.length > 0 && (
        <Flex h={"100vh"} direction="column">
          <Header name={project[0]?.name} />
          <Flex flex={1}>
            <FileDrawer files={files} setFiles={setFiles} />
            <Flex flexDirection={"column"} w={"100%"}>
              <SongScreen files={files} setFiles={setFiles} />
              <Player />
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
}

export default Project;
