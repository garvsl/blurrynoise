import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FaBackward, FaForward, FaPlay } from "react-icons/fa";

export default function Player() {
  return (
    <Flex
      borderLeft={"none"}
      borderRight={"none"}
      borderBottom={"none"}
      borderWidth={"1px"}
      justifyContent={"center"}
      marginTop={"auto"}
      h={"110px"}
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
          icon={<FaPlay />}
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
