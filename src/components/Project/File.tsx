import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Skeleton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

export default function File({ color, audio }: any) {
  const [loading, setLoading] = useState(true);
  const waveSurferRef: any = useRef();
  const cardRef: any = useRef();
  const effectCalled = useRef(false);
  const [duration, setDuration] = useState<any>(0);

  const waveSurfer: any = (ref: any) => ({
    container: ref,
    waveColor: "#fff",
    progressColor: "#0178ff",
    cursorColor: "transparent",
    responsive: true,
    // width: ref.scrollWidth,
    height: 20,
    normalize: true,
    backend: "WebAudio",
  });

  useEffect(() => {
    if (effectCalled.current) return;
    if (audio) {
      const options = waveSurfer(cardRef.current);
      waveSurferRef.current = WaveSurfer.create(options);
      waveSurferRef.current.loadBlob(audio.blob);

      waveSurferRef.current.on("ready", () => {
        setDuration(`${Math.round(waveSurferRef.current.getDuration())}s`);
      });
      setLoading(false);
      effectCalled.current = true;
    }
  }, [audio]);

  return (
    // <Skeleton isLoaded={!loading}>
    <Card
      paddingBottom={"5px"}
      padding={"5px"}
      ref={cardRef}
      bg={`${color}.300`}
      size={"sm"}
    >
      <CardHeader>
        <Flex alignItems={"flex-end"}>
          <Text
            color={"white"}
            fontSize={"14px"}
            marginLeft={"-5px"}
            paddingRight={"15px"}
            letterSpacing={"-0.5px"}
            isTruncated={true}
            fontWeight={"500px"}
          >
            {audio.name}
          </Text>
          <Spacer />
          <Text
            paddingLeft={"15x"}
            fontSize={"14px"}
            letterSpacing={"-0.5px"}
            color={"gray.200"}
          >
            {duration}
          </Text>
        </Flex>
      </CardHeader>
    </Card>
    // </Skeleton>
  );
}
