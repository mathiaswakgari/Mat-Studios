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
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/logos/logo-no-background.svg";
import { AiOutlineCode, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import {
  BiMusic,
  BiLogoReact,
  BiPodcast,
  BiCameraMovie,
  BiFootball,
  BiBitcoin,
} from "react-icons/bi";
import {
  IoGameControllerOutline,
  IoSchoolOutline,
  IoShirtOutline,
} from "react-icons/io5";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { MdOutlineTheaterComedy } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import color from "../color";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  {
    name: "New",
    icon: <AiOutlineHome color={color.businessNameColor} fontSize={"30px"} />,
  },
  {
    name: "Coding",
    icon: <AiOutlineCode color={color.businessNameColor} fontSize={"30px"} />,
  },
  {
    name: "ReactJS",
    icon: <BiLogoReact color={color.businessNameColor} fontSize={"30px"} />,
  },
  {
    name: "Music",
    icon: <BiMusic color={color.businessNameColor} fontSize={"30px"} />,
  },
  {
    name: "Education",
    icon: <IoSchoolOutline color={color.businessNameColor} fontSize={"30px"} />,
  },
  {
    name: "Podcast",
    icon: <BiPodcast color={color.businessNameColor} fontSize={"30px"} />,
  },
  {
    name: "Movie",
    icon: <BiCameraMovie color={color.businessNameColor} fontSize={"30px"} />,
  },
  {
    name: "Gaming",
    icon: (
      <IoGameControllerOutline
        color={color.businessNameColor}
        fontSize={"30px"}
      />
    ),
  },
  {
    name: "Live",
    icon: (
      <PiTelevisionSimpleBold
        color={color.businessNameColor}
        fontSize={"30px"}
      />
    ),
  },
  {
    name: "Sport",
    icon: <BiFootball color={color.businessNameColor} fontSize={"30px"} />,
  },
  {
    name: "Fashion",
    icon: <IoShirtOutline color={color.businessNameColor} fontSize={"30px"} />,
  },
  {
    name: "Beauty",
    icon: (
      <FaRegFaceGrinHearts color={color.businessNameColor} fontSize={"30px"} />
    ),
  },
  {
    name: "Comedy",
    icon: (
      <MdOutlineTheaterComedy
        color={color.businessNameColor}
        fontSize={"30px"}
      />
    ),
  },
  {
    name: "Gym",
    icon: <IoIosFitness color={color.businessNameColor} fontSize={"30px"} />,
  },
  {
    name: "Crypto",
    icon: <BiBitcoin color={color.businessNameColor} fontSize={"30px"} />,
  },
];

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
