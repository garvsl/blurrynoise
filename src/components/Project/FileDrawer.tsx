import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  DrawerFooter,
  Box,
  IconButton,
  Flex,
  Heading,
  Card,
  CardBody,
  Text,
  CardHeader,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useProject } from "../../hooks/ProjectProvider";

export default function FileDrawer() {
  const { getDisclosureProps, setHidden, hidden, isOpen } = useProject();

  return (
    <motion.div
      {...getDisclosureProps()}
      hidden={hidden}
      initial={false}
      onAnimationStart={() => setHidden(false)}
      onAnimationComplete={() => setHidden(!isOpen)}
      animate={{ width: isOpen ? 300 : 0 }}
      style={{
        borderWidth: "1px",
        borderTop: "1px solid white",
        marginTop: "-1px",
        zIndex: -1,
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        left: "0",
        height: "100vh",
        top: "0",
      }}
    >
      <Flex
        direction="column"
        gap={"12px"}
        paddingX={"8px"}
        paddingTop={"16px"}
      >
        <Heading size={"md"}>Files</Heading>
        <Card size={"sm"}>
          <CardHeader>
            <Text>View a summar</Text>
          </CardHeader>
        </Card>
      </Flex>
    </motion.div>
  );
}
