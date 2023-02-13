import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./customComponents/Button";
import { TextStyle as Text } from "./customComponents/Text";
import { HeadingStyle as Heading } from "./customComponents/Heading";
import { InputStyles as Input } from "./customComponents/Input";
import { colors } from "./customComponents/colors";
const components = {
  Button,
  Text,
  // Heading,
  Input,
};
export const customTheme = extendTheme({
  fonts: {
    heading: "Antonio, sans-serif",
    body: "Spartan, sans-serif",
  },
  textStyles: {
    h1: {
      fontSize: "80px",
      fontWeight: "400",
      lineHeight: "103px",
      color: "#ffffff",
    },
    h2: {
      fontSize: "40px",
      fontWeight: "400",
      lineHeight: "52px",
      color: "#ffffff",
    },
    h3: {
      fontSize: "12px",
      fontWeight: "700",
      lineHeight: "25px",
      color: "#ffffff",
      letterSpacing: "2.57px",
    },
    h4: {
      fontSize: "11px",
      fontWeight: "400",
      lineHeight: "25px",
      color: "#ffffff",
    },
  },
  components,
  colors,
});
