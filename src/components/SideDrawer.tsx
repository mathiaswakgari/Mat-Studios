import {
  Box,
  Image,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logos/logo-no-background.svg";
import { AiOutlineMenu } from "react-icons/ai";
import color from "../color";
import categories from "../utils/categories";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SideDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottom={"1px"} borderBottomColor={color.iconColor}>
          <HStack height={"22px"}>
            <Box
              borderRadius={"full"}
              boxSize={"35px"}
              cursor={"pointer"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              _hover={{
                backgroundColor: color.baseColor,
                transitionDuration: "400ms",
              }}
              onClick={onClose}
            >
              <AiOutlineMenu
                color={color.businessNameColor}
                fontSize={"25px"}
              />
            </Box>
            <Box>
              <Image boxSize={"200px"} src={logo} objectFit={"fill"} />
            </Box>
          </HStack>
        </DrawerHeader>

        <DrawerBody>
          {categories.map((c) => (
            <>
              <HStack
                key={c.name}
                _hover={{
                  backgroundColor: color.baseColor,
                  transitionDuration: "400ms",
                }}
                cursor={"pointer"}
                bg={""}
                paddingY={1}
                paddingLeft={2}
                borderRadius={"full"}
                marginY={5}
              >
                {c.icon}
                <Text color={color.textColor}>{c.name}</Text>
              </HStack>
              <hr></hr>
            </>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
