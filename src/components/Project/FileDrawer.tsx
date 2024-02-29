import { IconButton, Flex, Heading, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxUpload } from "react-icons/rx";
import { useProject } from "../../hooks/ProjectProvider";
import File from "./File";
import { useEffect } from "react";

export default function FileDrawer() {
  const { getDisclosureProps, setHidden, hidden, isOpen } = useProject();

  return (
    <motion.div
      {...getDisclosureProps()}
      hidden={hidden}
      initial={false}
      onAnimationStart={() => setHidden(false)}
      onAnimationComplete={() => setHidden(isOpen)}
      animate={{ width: !isOpen ? 300 : 0, opacity: !isOpen ? 1 : 0.3 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        ease: [0, 0.71, 0.2, 1.01],
        duration: 2,
      }}
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
      <Flex
        direction="column"
        gap={"8px"}
        paddingX={"10px"}
        paddingTop={"12px"}
      >
        <Flex marginBottom={"18px"} alignItems={"flex-end"}>
          <Heading letterSpacing={"-0.5px"} size={"md"}>
            Files
          </Heading>
          <Spacer />
          <IconButton
            variant={"outline"}
            zIndex={"99"}
            size={"sm"}
            icon={<RxUpload />}
            aria-label={""}
          />
        </Flex>
        <File
          title={"The Voice of the best ever in the world, okas"}
          length={"3:00"}
          color={"blue"}
        />
        <File title={"The Voice"} length={"3:00"} color={"red"} />
        <File title={"The Voice"} length={"3:00"} color={"orange"} />
      </Flex>
    </motion.div>
  );
}
