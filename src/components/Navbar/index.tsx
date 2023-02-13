import { useState } from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../../utils/data";
import Logo from "../Logo";
import { colors } from "../../stylesConfig/customComponents/colors";
import MobileMenu from "../MobileMenu";
const Navbar = () => {
  const [hoverState, setHoverState] = useState("");
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Flex
        px="32px"
        py="22px"
        justify={["space-between"]}
        align="center"
        flexDir={["row", "row", "column", "row"]}
        gap={["40px", "40px", "40px", 0]}
        h="85px"
        borderBottom={"1px solid #FFFFFF20"}
      >
        <Logo />
        <Flex gap="33px" display={["none", "none", "flex"]}>
          {navLinks.map((link) => (
            <Box
              key={nanoid()}
              onClick={() => navigate(link.route)}
              cursor="pointer"
              position={"relative"}
              onMouseOver={(e) => {
                setHoverState(link.route);
              }}
              onMouseLeave={(e) => {
                setHoverState("");
              }}
            >
              <Box
                position={"absolute"}
                display={hoverState === link.route ? "flex" : "none"}
                h="4px"
                w="100%"
                top="-30px"
                bgColor={`${colors[link.label.toLowerCase()]}`}
              />
              <Text
                textStyle={"h4"}
                fontWeight="700"
                fontSize={"11px"}
                opacity="0.75"
                _hover={{
                  opacity: "1",
                }}
              >
                {link.label}
              </Text>
            </Box>
          ))}
        </Flex>
        <Icon
          onClick={() => setShowMenu(true)}
          display={["block", "block", "none"]}
          as={MdMenu}
          color="white"
          size={32}
        />
      </Flex>
      <MobileMenu isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

export default Navbar;
