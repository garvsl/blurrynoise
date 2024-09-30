import { Button, Link, Text } from "@chakra-ui/react";
import { useState } from "react";

function Home() {
  return (
    <Link href="/project/1">
      <Button>Navigate project 1</Button>
    </Link>
  );
}

export default Home;
