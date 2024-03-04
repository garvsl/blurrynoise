import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";
import { useProject } from "../../hooks/ProjectProvider";

export default function Player() {
  const { setPlaying, playing } = useProject();
  return (
    <Flex
      justifyContent={"center"}
      paddingX={"12px"}
      zIndex={"99"}
      bg={"white"}
      ml={"-1px"}
      w={"100%"}
    >
      <Flex h={"50px"} alignItems={"center"} gap={"4px"}>
        <IconButton
          variant={"outline"}
          size={"sm"}
          icon={<FaBackward />}
          aria-label={""}
        />
        <IconButton
          variant={"outline"}
          size={"sm"}
          onClick={() => {
            setPlaying(!playing);
          }}
          icon={playing ? <FaPause /> : <FaPlay />}
          aria-label={""}
        />
        <IconButton
          variant={"outline"}
          size={"sm"}
          icon={<FaForward />}
          aria-label={""}
        />
      </Flex>
    </Flex>
  );
}
