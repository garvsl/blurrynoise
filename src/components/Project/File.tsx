import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";

export default function File({ title, length, color }: any) {
  return (
    <Card bg={`${color}.300`} size={"sm"}>
      <CardHeader>
        <Flex alignItems={"flex-end"}>
          <Text
            fontSize={"14px"}
            letterSpacing={"-0.5px"}
            isTruncated={true}
            fontWeight={"500px"}
          >
            {title}
          </Text>
          <Spacer />
          <Text
            paddingLeft={"10px"}
            fontSize={"14px"}
            letterSpacing={"-0.5px"}
            color={"white"}
          >
            {length}
          </Text>
        </Flex>
      </CardHeader>
    </Card>
  );
}
