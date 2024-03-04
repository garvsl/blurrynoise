import { Card, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useProject } from "../../hooks/ProjectProvider";
import Marker from "./Marker";
import { createRef, useEffect, useLayoutEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

const Song = ({ audio }: any) => {
  const cardRef: any = useRef();
  return (
    <Card
      ref={cardRef}
      bg={`${audio ? audio.color : "blackAlpha"}.100`}
      variant={"outline"}
      padding={"16px"}
      size={"md"}
    ></Card>
  );
};

export default function SongScreen({ files }: any) {
  const { isOpen, changed, projects } = useProject();
  let gridRef: any = useRef();
  let gridClient = gridRef?.current?.getBoundingClientRect();

  return (
    <Grid
      flexGrow={1}
      ref={gridRef}
      borderWidth={"1px"}
      borderRadius={isOpen ? "0px" : "md"}
      borderLeft={isOpen && "0px"}
      borderRight={isOpen && "0px"}
      borderRightRadius={"0px"}
      padding={"7px"}
      paddingTop={"18px"}
      flexDirection={"column"}
      gap={"5px"}
      // bg={"red"}
      position={"relative"}
      overflow={"hidden"}
    >
      <Marker gridRef={gridRef} gridClient={gridClient} isChanged={changed} />
      {files.map((file: any, index: any) => {
        return <Song key={index} audio={file} />;
      })}
      {[...Array(8 - files.length)].map((e, i) => {
        return <Song key={i} />;
      })}
    </Grid>
  );
}
