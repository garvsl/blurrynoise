import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";

export default function File({ title, length }: any) {
  return (
    <Card bg={"blue.200"} size={"sm"}>
      <CardHeader>
        <Flex>
          <Text fontWeight={"medium"}>{title}</Text>
          <Spacer />
          <Text color={"white"}>{length}</Text>
        </Flex>
      </CardHeader>
    </Card>
  );
}
