import { Box, Flex, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiSolidDownArrow } from "react-icons/bi";
export default function Marker() {
  return (
    <Flex
      drag
      dragElastic={0}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 725, //How can I know the exact value? Also remove scrolling
        bottom: 0,
      }}
      zIndex={9}
      as={motion.div}
      mt={"-29px"}
      ml={"-15px"}
      position={"absolute"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <IconButton
        padding={"0px"}
        aria-label="Marker"
        size={"sm"}
        variant={"unstyled"}
        // size={"8px"}
        icon={<BiSolidDownArrow />}
        // width={"12px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        // height={"14px"}
      />
      <Box
        // borderRadius={"xl"}
        cursor={"pointer"}
        p={"0px"}
        mt={"-10px"}
        w={"1px"}
        bg="black"
        h={"100vh"}
        transform="translateX(0.475px)"
      ></Box>
    </Flex>
  );
}
