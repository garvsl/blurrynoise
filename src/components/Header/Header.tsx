import {
  Spacer,
  Box,
  Avatar,
  IconButton,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import AvatarFace from "./AvatarFace";
import ProjectName from "./ProjectName";

export default function Header({ name }: any) {
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
      <IconButton size={"sm"} icon={<RxHamburgerMenu />} aria-label={""} />
      <Spacer />
      <Flex alignItems={"center"}>
        <Heading
          fontWeight={"45px"}
          letterSpacing={"-1px"}
          color={"black"}
          fontSize="xl"
        >
          <ProjectName projectName={name} />
        </Heading>
      </Flex>
      <Spacer />
      <AvatarFace />
    </Box>
  );
}
