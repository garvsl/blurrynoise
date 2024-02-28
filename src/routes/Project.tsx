import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {}, []);
  return <Header />;
}

export default Project;
