import { Card, Flex, Grid, GridItem } from "@chakra-ui/react";

const Song = () => {
  return (
    <GridItem>
      <Card
        // bg={"gray.100"}
        shadow={"xs"}
        // variant={""}
        padding={"16px"}
        h={"100%"}
        size={"md"}
        w={"100%"}
      ></Card>
    </GridItem>
  );
};

export default function SongScreen() {
  return (
    <Grid
      h={"100%"}
      templateRows="repeat(8, 3fr)"
      padding={"4px"}
      flexDirection={"column"}
      gap={"5px"}
    >
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
    </Grid>
  );
}
