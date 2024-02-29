import { IconButton, Flex, Heading, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxUpload } from "react-icons/rx";
import { useProject } from "../../hooks/ProjectProvider";
import File from "./File";

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
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        left: "0",
        height: "100vh",
        top: "0",
      }}
    >
      <Flex direction="column" gap={"8px"} paddingX={"8px"} paddingTop={"16px"}>
        <Flex marginBottom={"16px"} alignItems={"center"}>
          <Heading size={"md"}>Files</Heading>
          <Spacer />
          <IconButton
            zIndex={"99"}
            size={"sm"}
            icon={<RxUpload />}
            aria-label={""}
          />
        </Flex>
        <File title={"The Voice"} length={"3:00"} />
        <File title={"The Voice"} length={"3:00"} />
        <File title={"The Voice"} length={"3:00"} />
      </Flex>
    </motion.div>
  );
}
