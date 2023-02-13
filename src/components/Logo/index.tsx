import { Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Heading
      cursor={"pointer"}
      fontSize="28px"
      fontWeight={"400"}
      textStyle="h1"
      w="auto"
      onClick={() => navigate("/")}
    >
      THE PLANETS
    </Heading>
  );
};

export default Logo;
