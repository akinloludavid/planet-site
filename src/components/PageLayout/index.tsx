import { Box, Image } from "@chakra-ui/react";
import { MainBg } from "../../assets";
import { IChildren } from "../../types";
import Navbar from "../Navbar";

const PageLayout = ({ children }: IChildren) => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/assets/bg.svg')`,
      }}
      bgSize="cover"
      bg="darkBg"
      bgRepeat={"no-repeat"}
      w="100vw"
      minH="100vh"
    >
      <Navbar />
      {children}
    </Box>
  );
};

export default PageLayout;
