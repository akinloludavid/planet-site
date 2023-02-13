import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { RiExternalLinkLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import db from "../../data.json";
import { useEffect, useState } from "react";
import { colors } from "../../stylesConfig/customComponents/colors";
import PlanetCard from "../../components/PlanetCard";
const tabs = [
  {
    label: "OVERVIEW",
    slug: "overview",
    mobile: "OVERVIEW",
  },
  {
    label: "INTERNAL STRUCTURE",
    slug: "structure",
    mobile: "STRUCTURE",
  },
  {
    label: "SURFACE GEOLOGY",
    slug: "geology",
    mobile: "SURFACE",
  },
];

const MercuryPage = () => {
  const { planet = "" } = useParams();
  const planetDetails = db.filter((item) =>
    item.name.toLowerCase().includes(planet)
  )[0];
  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    setTabIndex(0);
  }, [planet]);
  return (
    <Box
      px={["24px", "24px", "50px", "90px", "165px"]}
      mt={["0"]}
      w="100%"
      position={"relative"}
    >
      <Flex
        borderBottom={"1px solid #ffffff20"}
        justify="space-between"
        w="100vw"
        mx="auto"
        display={["flex", "flex", "none"]}
        position={"absolute"}
        left="0"
        px={6}
      >
        {tabs.map((el, idx) => (
          <Box
            py={["20px"]}
            position="relative"
            onClick={() => setTabIndex(idx)}
          >
            <Box
              position={"absolute"}
              h="4px"
              w="100%"
              bgColor={colors[planet]}
              bottom={0}
              display={[tabIndex === idx ? "" : "none"]}
            />
            <Text fontSize={"9px"} fontWeight="700">
              {el.mobile}
            </Text>
          </Box>
        ))}
      </Flex>
      <Flex
        flexDir={["column", "column", "column", "row"]}
        justify={"space-between"}
        align="center"
        gap={["40px"]}
        pt={["80px", "80px", 0]}
      >
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          w={["auto", "auto", "700px"]}
          h={["auto", "auto", "700px"]}
        >
          {tabIndex === 0 && (
            <Image w="auto" h="auto" src={planetDetails.images.planet} />
          )}
          {tabIndex === 1 && (
            <Image w="auto" h="auto" src={planetDetails.images.internal} />
          )}
          {tabIndex === 2 && (
            <Image w="auto" h="auto" src={planetDetails.images.geology} />
          )}
        </Box>
        <Flex
          maxW={["100%", "100%", "100%", "350px"]}
          flexDir={["column", "column", "row", "column"]}
          align={["center", "center", "center", "flex-start"]}
          gap="24px"
        >
          <Box>
            <Heading
              textStyle={"h1"}
              textAlign={["center", "center", "left"]}
              mb={["16px", "16px", "24px"]}
            >
              {planetDetails.name.toUpperCase()}
            </Heading>
            <Text fontSize={["11px"]} textAlign={["center", "center", "left"]}>
              {tabIndex === 0 && planetDetails.overview.content}
              {tabIndex === 1 && planetDetails.structure.content}
              {tabIndex === 2 && planetDetails.geology.content}
            </Text>
            <Flex
              lineHeight={"25px"}
              fontSize={"14px"}
              fontWeight="400px"
              mt={["32px", "32px"]}
              gap="2px"
              justify={["center", "center", "flex-start"]}
            >
              <Text as="span">Source:</Text>
              <Flex
                as="a"
                href={planetDetails.overview.source}
                fontWeight={"700"}
                target="_blank"
                align="center"
                gap="4px"
              >
                <Text color="#ffffff50" textDecor="underline">
                  Wikipedia
                </Text>
                <RiExternalLinkLine color="#ffffff50" />
              </Flex>
            </Flex>
          </Box>
          <Flex
            gap={["16px"]}
            flexDir={["column"]}
            display={["none", "none", "flex"]}
          >
            {tabs.map((el, idx) => (
              <Grid
                key={nanoid()}
                gap={["28px"]}
                w={["auto", "281px", "281px", "281px", "100%"]}
                templateColumns={"repeat(6,1fr)"}
                py={["8px", "8px", "8px", "12px"]}
                px={["20px", "20px", "20px", "28px"]}
                cursor={"pointer"}
                border="1px solid #ffffff20"
                onClick={() => setTabIndex(idx)}
                bgColor={tabIndex === idx ? colors[planet] : ""}
              >
                <GridItem alignItems={"center"}>
                  <Text
                    fontSize={["9px", "9px", "9px", "12px"]}
                    fontWeight="700"
                    lineHeight={"25px"}
                    color="#ffffff50"
                    letterSpacing={"2.57px"}
                  >
                    0{idx + 1}
                  </Text>
                </GridItem>
                <GridItem colSpan={5} display="flex" alignItems={"center"}>
                  <Text color="#fff" fontSize={"12px"} fontWeight="700">
                    {el.label}
                  </Text>
                </GridItem>
              </Grid>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="full"
        gap={["30px"]}
        flexDirection={["column", "column", "row"]}
        justify={["space-between"]}
        justifyContent={[""]}
        mt={["28px", "28px", "0"]}
      >
        <PlanetCard feature="ROTATION TIME" value={planetDetails.rotation} />
        <PlanetCard
          feature="REVOLUTION TIME"
          value={planetDetails.revolution}
        />
        <PlanetCard feature="RADIUS" value={planetDetails.radius} />
        <PlanetCard feature="AVERAGE TEMP." value={planetDetails.temperature} />
      </Flex>
    </Box>
  );
};

export default MercuryPage;
