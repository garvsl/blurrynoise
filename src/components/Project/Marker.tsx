import { Box, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { motion, useDragControls } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { TbCaretDownFilled } from "react-icons/tb";
export default function Marker({ gridRef, gridClient, isChanged }: any) {
  const [grid, setGrid] = useState<any>();
  const [markerX, setMarkerX] = useState(0);
  const dragControls = useDragControls();
  const markerRef: any = useRef();

  function startDrag(event: any) {
    dragControls.start(event, { snapToCursor: true });
  }

  useEffect(() => {
    setGrid(gridRef?.current?.getBoundingClientRect());
    setMarkerX(markerRef?.current?.getBoundingClientRect().x);
  }, [gridClient, gridRef, isChanged, markerRef]);

  return (
    <Flex
      // bg={"blackAlpha.300"}
      onPointerDown={(e) => {
        startDrag(e);
        setMarkerX(e.clientX);
      }}
      style={{ touchAction: "none" }}
      // bg="blackAlpha.100"
      w={"100%"}
      h={"10px"}
      zIndex={9}
      position={"absolute"}
    >
      <Flex
        ml={"-8px"}
        mt={"-14px"}
        // bg={"red "}
        flexDirection={"column"}
        alignItems={"center"}
        ref={markerRef}
        position={"absolute"}
        // style={{ }}
        animate={{
          x:
            markerX > grid?.width - 17
              ? grid?.width - 17
              : markerX < 0
              ? 0
              : "",
        }}
        // onDrag={(event: any, info: any) => {
        //   console.log(markerRef?.current?.getBoundingClientRect().x);
        //   // console.log(markerRef?.current);
        // }}
        drag="x"
        dragElastic={0}
        dragConstraints={{ left: 0, right: grid?.width - 17 }}
        dragControls={dragControls}
        as={motion.div}
        dragMomentum={false}
      >
        <IconButton
          // opacity={0.8}
          aria-label="Marker"
          size={"sm"}
          variant={"unstyled"}
          icon={<TbCaretDownFilled />}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        />
        <Box
          // borderRadius={"xl"}
          cursor={"pointer"}
          p={"0px"}
          mt={"-13px"}
          opacity={0.3}
          w={"1px"}
          bg="black"
          h={"100vh"}
          // transform="translateX(-0.500px)"
        ></Box>
      </Flex>
    </Flex>
  );
}
