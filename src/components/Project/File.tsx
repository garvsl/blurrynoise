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

export default function File({ title, length, color, audio }: any) {
  const [loading, setLoading] = useState(true);
  const waveSurferRef: any = useRef();
  const cardRef: any = useRef();

  console.log(cardRef.current);
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
    if (audio) {
      var reader = new FileReader();

      reader.onload = function (evt: any) {
        console.log(evt);

        //Need to make a blob so the audio file is recognized by waveSurfer
        var blob = new window.Blob([new Uint8Array(evt.target.result)]);
        const options = waveSurfer(cardRef.current);

        waveSurferRef.current = WaveSurfer.create(options);
        waveSurferRef.current.loadBlob(blob);
        setLoading(false);
      };
      reader.readAsArrayBuffer(audio);
    }
  }, [audio]);

  return (
    <Skeleton isLoaded={!loading}>
      <Card ref={cardRef} bg={`${color}.300`} size={"sm"}>
        <CardHeader>
          <Flex alignItems={"flex-end"}>
            <Text
              color={"white"}
              fontSize={"14px"}
              letterSpacing={"-0.5px"}
              isTruncated={true}
              fontWeight={"500px"}
            >
              {title}
            </Text>
            <Spacer />
            <Text
              paddingLeft={"10px"}
              fontSize={"14px"}
              letterSpacing={"-0.5px"}
              color={"gray.200"}
            >
              {length}
            </Text>
          </Flex>
        </CardHeader>
      </Card>
    </Skeleton>
  );
}
