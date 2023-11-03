import { AiOutlineCode } from "react-icons/ai";
import { BiLogoReact, BiPodcast, BiFootball, BiBitcoin } from "react-icons/bi";
import {
  IoGameControllerOutline,
  IoSchoolOutline,
  IoShirtOutline,
} from "react-icons/io5";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { MdOutlineTheaterComedy } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { PiFilmSlate } from "react-icons/pi";
import color from "../color";

const fontSize = "25px";

const categories = [
  {
    name: "Home",
    icon: <GoHome color={color.businessNameColor} fontSize={fontSize} />,
  },
  {
    name: "Coding",
    icon: <AiOutlineCode color={color.businessNameColor} fontSize={fontSize} />,
  },
  {
    name: "ReactJS",
    icon: <BiLogoReact color={color.businessNameColor} fontSize={fontSize} />,
  },
  {
    name: "Music",
    icon: (
      <MdOutlineLibraryMusic
        color={color.businessNameColor}
        fontSize={fontSize}
      />
    ),
  },
  {
    name: "Education",
    icon: (
      <IoSchoolOutline color={color.businessNameColor} fontSize={fontSize} />
    ),
  },
  {
    name: "Podcast",
    icon: <BiPodcast color={color.businessNameColor} fontSize={fontSize} />,
  },
  {
    name: "Movie",
    icon: <PiFilmSlate color={color.businessNameColor} fontSize={fontSize} />,
  },
  {
    name: "Gaming",
    icon: (
      <IoGameControllerOutline
        color={color.businessNameColor}
        fontSize={fontSize}
      />
    ),
  },
  {
    name: "Live",
    icon: (
      <PiTelevisionSimpleBold
        color={color.businessNameColor}
        fontSize={fontSize}
      />
    ),
  },
  {
    name: "Sport",
    icon: <BiFootball color={color.businessNameColor} fontSize={fontSize} />,
  },
  {
    name: "Fashion",
    icon: (
      <IoShirtOutline color={color.businessNameColor} fontSize={fontSize} />
    ),
  },
  {
    name: "Beauty",
    icon: (
      <FaRegFaceGrinHearts
        color={color.businessNameColor}
        fontSize={fontSize}
      />
    ),
  },
  {
    name: "Comedy",
    icon: (
      <MdOutlineTheaterComedy
        color={color.businessNameColor}
        fontSize={fontSize}
      />
    ),
  },
  {
    name: "Gym",
    icon: <IoIosFitness color={color.businessNameColor} fontSize={fontSize} />,
  },
  {
    name: "Crypto",
    icon: <BiBitcoin color={color.businessNameColor} fontSize={fontSize} />,
  },
];

export default categories;
