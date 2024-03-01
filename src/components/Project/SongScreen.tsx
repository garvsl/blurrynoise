import { Card, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useProject } from "../../hooks/ProjectProvider";
import Marker from "./Marker";
import { useRef } from "react";

const Song = () => {
  return (
    // <GridItem>
    <Card
      bg={"blackAlpha.100"}
      // bg={"gray.100"}
      // shadow={"xs"}
      variant={"outline"}
      padding={"16px"}
      // h={"100%"}
      size={"md"}
      // w={"100%"}
    ></Card>
    // </GridItem>
  );
};

export default function SongScreen() {
  const { isOpen } = useProject();
  let gridRef: any = useRef();
  return (
    <Grid
      flexGrow={1}
      ref={gridRef}
      borderWidth={"1px"}
      borderRadius={isOpen ? "0px" : "md"}
      borderLeft={isOpen && "0px"}
      borderRight={isOpen && "0px"}
      borderRightRadius={"0px"}
      // templateRows="repeat(8, 3fr)"
      padding={"7px"}
      paddingTop={"18px"}
      flexDirection={"column"}
      gap={"5px"}
    >
      <Marker gridRef={gridRef} />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
    </Grid>
  );
}
