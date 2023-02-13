import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Flex,
  Box,
  Text,
  Icon,
} from "@chakra-ui/react";
import { IDialogProps } from "../../types";
import { FaTimes } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Logo from "../Logo";
import { navLinks } from "../../utils/data";
import { colors } from "../../stylesConfig/customComponents/colors";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const MobileMenu = ({ isOpen = true, onClose }: IDialogProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor={"darkBg"}>
          <Flex
            justify={"space-between"}
            py="16px"
            px="24px"
            align="center"
            borderBottom={"1px solid #FFFFFF20"}
          >
            <Logo />
            <FaTimes color="white" size={"18"} onClick={onClose} />
          </Flex>

          <Flex flexDir={["column"]} gap="20px" px="24px" mt={"24px"}>
            {navLinks.map((el, idx) => (
              <Flex
                justify={"space-between"}
                onClick={() => {
                  navigate(el.route);
                  onClose();
                }}
                borderBottom={
                  idx < navLinks.length - 1 ? "1px solid #FFFFFF20" : ""
                }
                key={nanoid()}
                pb={["20px"]}
              >
                <Flex gap={["25px"]}>
                  <Box
                    w="20px"
                    h="20px"
                    bgColor={colors[el.label.toLowerCase()]}
                    borderRadius="50%"
                  ></Box>
                  <Text fontSize={"15px"} fontWeight="700">
                    {el.label}
                  </Text>
                </Flex>
                <Icon as={FiChevronRight} color={"#ffffff40"} />
              </Flex>
            ))}
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
