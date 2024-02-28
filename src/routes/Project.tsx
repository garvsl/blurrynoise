import { useParams } from "react-router-dom";

function Project() {
  const { id } = useParams();
  return <div>hi + {id}</div>;
}

export default Project;
