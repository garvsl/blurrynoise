import { Card, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useProject } from "../../hooks/ProjectProvider";
import Marker from "./Marker";
import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import Wave from "./Wave";

const Song = ({ audio }: any) => {
  const [loading, setLoading] = useState(true);
  const cardRef: any = useRef();
  const [duration, setDuration] = useState<any>("0:00");
  const [currentTime, setCurrentTime] = useState<any>("0:00");
  return (
    <>
      {audio ? (
        <Wave
          height={50}
          cardRef={cardRef}
          audio={audio}
          setDuration={setDuration}
          setCurrentTime={setCurrentTime}
          setLoading={setLoading}
        >
          <Card
            display={"flex"}
            justifyContent={"center"}
            h={"100%"}
            ref={cardRef}
            bg={`${audio ? audio.color : "blackAlpha"}.100`}
            variant={"outline"}
            padding={"16px"}
            size={"md"}
          ></Card>
        </Wave>
      ) : (
        <Card
          ref={cardRef}
          bg={`${audio ? audio.color : "blackAlpha"}.100`}
          variant={"outline"}
          padding={"16px"}
          size={"md"}
        ></Card>
      )}
    </>
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
