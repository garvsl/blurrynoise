import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { useProject } from "../hooks/ProjectProvider";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const { projects } = useProject();

  useEffect(() => {
    setProject(projects.filter((proj: any) => proj.id == Number(id)));
    setLoading(false);
  }, []);

  console.log(project);
  return (
    <>
      {!loading && project.length > 0 && (
        <>
          <Header name={project[0]?.name} />
          <Text color={"black"} marginTop={20}>
            Welcome
          </Text>
        </>
      )}
    </>
  );
}

export default Project;
