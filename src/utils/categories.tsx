import { AiOutlineCode, AiOutlineHome } from "react-icons/ai";
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

export default categories;
