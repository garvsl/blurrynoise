import { Spacer, Box, Avatar } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderRadius="md"
      w="100%"
      p={2}
      h={12}
      alignItems={"center"}
      color="white"
      display={"flex"}
      //   justifyContent={"space-between"}
    >
      {/* <Flex alignItems={"center"}>
          <Heading
            fontWeight={"45px"}
            letterSpacing={"-1px"}
            color={"black"}
            fontSize="xl"
          >
            Blurry
          </Heading>
          <Heading
            fontWeight={"thick"}
            letterSpacing={"-1px"}
            color={"black"}
            as={"s"}
            fontSize="xl"
          >
            Noise
          </Heading>
        </Flex> */}
      <Spacer />
      <Avatar size={"sm"} bg="gray.500" />
    </Box>
  );
}
