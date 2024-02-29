import {
  useEditableControls,
  ButtonGroup,
  IconButton,
  Flex,
  Editable,
  EditableInput,
  EditablePreview,
  Input,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiCheck, BiX, BiEdit } from "react-icons/bi";

export default function ProjectName({ projectName }: any) {
  return (
    <Editable defaultValue={projectName}>
      <Tooltip label="Click to edit" shouldWrapChildren={true}>
        <EditablePreview
          py={2}
          px={4}
          _hover={{
            background: useColorModeValue("gray.100", "gray.700"),
          }}
        />
      </Tooltip>
      <Input py={2} px={4} as={EditableInput} />
      {/* <EditableInput /> */}
    </Editable>
  );
}
