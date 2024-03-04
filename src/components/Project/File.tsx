import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  IconButton,
  Skeleton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import WaveSurfer from "wavesurfer.js";
import Wave from "./Wave";

export default function File({ color, audio }: any) {
  const [loading, setLoading] = useState(true);

  const cardRef: any = useRef();

  const [duration, setDuration] = useState<any>();
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Wave
        audio={audio}
        setLoading={setLoading}
        setDuration={setDuration}
        cardRef={cardRef}
        height={15}
      >
        <Skeleton
          borderRadius={"md"}
          height={"70px"}
          display={loading ? "block" : "none"}
        />
        <Card
          paddingBottom={"5px"}
          padding={"5px"}
          display={!loading ? "block" : "none"}
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
      </Wave>
    </>
  );
}
