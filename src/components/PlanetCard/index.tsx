import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { IPlanetCard } from "../../types";

const PlanetCard = ({ feature, value }: IPlanetCard) => {
  return (
    <Flex
      flexDir={["row", "row", "column"]}
      px="23px"
      py="20px"
      justify={["space-between", "space-between", "flex-start"]}
      align={["center", "center", "flex-start"]}
      border={"1px solid #FFFFFF20"}
      w={["100%", "auto", "255px"]}
      gap={["", "", "6px"]}
    >
      <Text
        color={"#ffffff50"}
        fontSize="11px"
        fontWeight={"700"}
        lineHeight="25px"
      >
        {feature}
      </Text>
      <Heading textStyle="h2" fontSize={["20px", "20px", "40px"]}>
        {value}
      </Heading>
    </Flex>
  );
};

export default PlanetCard;
