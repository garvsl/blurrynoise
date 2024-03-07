import { Card, CardBody, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useProject } from "../../hooks/ProjectProvider";
import Marker from "./Marker";
import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const Wave = ({
  height,
  cardRef,
  audio,
  setDuration,
  setCurrentTime,
  setLoading,
  children,
}: any) => {
  const effectCalled = useRef(false);
  const waveSurferRef: any = useRef();

  const waveSurfer: any = (ref: any) => ({
    container: ref,
    waveColor: "white",
    progressColor: "black",
    barWidth: 2,
    responsive: true,
    height: 15,
    // autoCenter: true,
    normalize: true,
    backend: "WebAudio",
  });

  const formatTime = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemainder = Math.round(seconds) % 60;
    const paddedSeconds = `0${secondsRemainder}`.slice(-2);
    return `${minutes}:${paddedSeconds}`;
  };

  useEffect(() => {
    if (effectCalled.current) return;
    if (audio) {
      const options = waveSurfer(cardRef.current);
      waveSurferRef.current = WaveSurfer.create(options);
      waveSurferRef.current.loadBlob(audio.blob);

      // waveSurferRef.current.on("decode", (duration: any) =>
      //   setDuration(formatTime(duration))
      // );
      // waveSurferRef.current.on("timeupdate", (currentTime: any) =>
      //   setCurrentTime(formatTime(currentTime))
      // );
      setTimeout(() => {
        setLoading(false);
      }, 500);
      effectCalled.current = true;
    }
  }, [audio]);
  return <>{children}</>;
};

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
            flexDirection={"column"}
            justifyContent={"center"}
            // alignItems={"center"}
            h={"100%"}
            bg={`${audio ? audio.color : "blackAlpha"}.100`}
            variant={"outline"}
            padding={"16px"}
            size={"md"}
          >
            <CardBody ref={cardRef}></CardBody>
          </Card>
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

  // useEffect(() => {

  // },[])

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
      {/* <Marker gridRef={gridRef} gridClient={gridClient} isChanged={changed} />
      {files.map((file: any, index: any) => {
        return <Song key={index} audio={file} />;
      })}
      {[...Array(8 - files.length)].map((e, i) => {
        return <Song key={i} />;
      })} */}
    </Grid>
  );
}
