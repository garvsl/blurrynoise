import { IconButton, Flex, Heading, Spacer, Input } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxUpload } from "react-icons/rx";
import { useProject } from "../../hooks/ProjectProvider";
import File from "./File";
import { useEffect, useRef } from "react";

export default function FileDrawer({ files, setFiles }: any) {
  const { getDisclosureProps, setHidden, hidden, isOpen, setChanged, changed } =
    useProject();

  const inputRef: any = useRef(null);

  const color = [
    "orange",
    "blue",
    "red",
    "green",
    "purple",
    "pink",
    "cyan",
    "teal",
  ];

  const handleUpload = (e: any) => {
    const file = e[0];

    if (files.length >= 8) {
      return;
    }

    if (e) {
      let reader: any = new FileReader();
      reader.onload = function (evt: any) {
        //Need to make a blob so the audio file is recognized by waveSurfer
        let blob = new window.Blob([new Uint8Array(evt.target.result)]);
        setFiles([
          ...files,
          { name: file.name, blob: blob, color: color[files.length] },
        ]);
      };
      reader.readAsArrayBuffer(file);
      inputRef.current.value = [];
    }
  };

  return (
    <motion.div
      {...getDisclosureProps()}
      hidden={hidden}
      initial={false}
      onAnimationStart={() => setHidden(false)}
      onAnimationComplete={() => {
        setHidden(isOpen);
        setChanged(!changed);
      }}
      animate={{ width: !isOpen ? 300 : 0, opacity: !isOpen ? 1 : 0.3 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
        ease: [0, 0.71, 0.2, 1.01],
        duration: 2,
      }}
      style={{
        // borderWidth: "1px",
        // borderTop: "1px solid white",
        marginTop: "-1px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        left: "0",
        top: "0",
      }}
    >
      <Flex direction="column" gap={"8px"} paddingX={"16px"} paddingTop={"4px"}>
        <Flex marginBottom={"18px"} alignItems={"flex-end"}>
          <Heading fontWeight={"medium"} letterSpacing={"-0.5px"} size={"md"}>
            Files
          </Heading>
          <Spacer />

          <IconButton
            variant={"outline"}
            zIndex={"99"}
            size={"sm"}
            onClick={() => inputRef.current.click()}
            icon={<RxUpload />}
            aria-label={""}
          />
          <Input
            accept="audio/*"
            multiple={false}
            display={"none"}
            onChange={(e: any) => {
              handleUpload(e.target.files);
            }}
            ref={inputRef}
            size={"sm"}
            variant={"unstyled"}
            type="file"
          />
        </Flex>
        {files.map((file: any, index: any) => {
          return <File key={index} audio={file} />;
        })}
        {/* <File
          title={"The Voice of the best ever in the world, okas"}
          length={"3:00"}
          color={"blue"}
        />
        <File title={"The Voice"} length={"3:00"} color={"red"} />
        <File title={"The Voice"} length={"3:00"} color={"orange"} /> */}
      </Flex>
    </motion.div>
  );
}
