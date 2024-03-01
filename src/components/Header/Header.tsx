import {
  Spacer,
  Box,
  Avatar,
  IconButton,
  Flex,
  Heading,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxPinLeft } from "react-icons/rx";
import AvatarFace from "./AvatarFace";
import ProjectName from "./ProjectName";
import FileDrawer from "../Project/FileDrawer";
import { useProject } from "../../hooks/ProjectProvider";

export default function Header({ name }: any) {
  const { getButtonProps, isOpen } = useProject();
  return (
    <Box
      bg="white"
      // borderWidth="1px"
      // borderRadius="md"
      w="100%"
      p={2}
      h={12}
      alignItems={"center"}
      color="white"
      display={"flex"}
    >
      <IconButton
        variant={isOpen ? "outline" : "ghost"}
        {...getButtonProps()}
        size={"sm"}
        icon={<RxHamburgerMenu />}
        aria-label={""}
      />

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
