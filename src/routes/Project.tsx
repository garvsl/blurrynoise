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
  const { projects } = useProject();

  useEffect(() => {
    setProject(projects.filter((proj: any) => proj.id == Number(id)));
    setLoading(false);
  }, []);

  return (
    <>
      {!loading && project.length > 0 && (
        <Flex height={"100vh"} overflow={"hidden"} direction="column">
          <Header name={project[0]?.name} />
          <Flex overflow={"hidden"}>
            <FileDrawer />
            <Flex
              overflow={"hidden"}
              flexDirection={"column"}
              h="100vh"
              w={"100vw"}
            >
              <SongScreen />
              <Player />
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
}

export default Project;
