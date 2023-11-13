import { AiFillCode, AiOutlineCode } from "react-icons/ai";
import { BiLogoReact, BiPodcast, BiFootball, BiBitcoin } from "react-icons/bi";
import {
  IoAmericanFootballOutline,
  IoAmericanFootballSharp,
  IoGameController,
  IoGameControllerOutline,
  IoSchool,
  IoSchoolOutline,
  IoShirt,
  IoShirtOutline,
} from "react-icons/io5";
import {
  PiFilmReel,
  PiFilmReelFill,
  PiTelevisionFill,
  PiTelevisionSimpleBold,
} from "react-icons/pi";
import { FaMasksTheater } from "react-icons/fa6";
import { MdLibraryMusic, MdOutlineTheaterComedy } from "react-icons/md";
import { IoIosFitness, IoMdFitness } from "react-icons/io";
import { GiReactor } from "react-icons/gi";
import { SiApplepodcasts, SiBitcoinsv } from "react-icons/si";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdOutlineLibraryMusic } from "react-icons/md";
import color from "../color";

const fontSize = "25px";

const categories = [
  {
    name: "Home",
    value: "home",
    icon: <GoHome color={color.businessNameColor} fontSize={fontSize} />,
    selectedIcon: (
      <GoHomeFill color={color.businessNameColor} fontSize={fontSize} />
    ),
  },
  {
    name: "Coding",
    icon: <AiOutlineCode color={color.businessNameColor} fontSize={fontSize} />,
    selectedIcon: (
      <AiFillCode color={color.businessNameColor} fontSize={fontSize} />
    ),
  },
  {
    name: "ReactJS",
    icon: <BiLogoReact color={color.businessNameColor} fontSize={fontSize} />,
    selectedIcon: (
      <GiReactor color={color.businessNameColor} fontSize={fontSize} />
    ),
  },
  {
    name: "Music",
    value: "music",
    icon: (
      <MdOutlineLibraryMusic
        color={color.businessNameColor}
        fontSize={fontSize}
      />
    ),
    selectedIcon: (
      <MdLibraryMusic color={color.businessNameColor} fontSize={fontSize} />
    ),
  },
  {
    name: "Education",
    icon: (
      <IoSchoolOutline color={color.businessNameColor} fontSize={fontSize} />
    ),
    selectedIcon: (
      <IoSchool color={color.businessNameColor} fontSize={fontSize} />
    ),
  },
  {
    name: "Podcast",
    icon: <BiPodcast color={color.businessNameColor} fontSize={fontSize} />,
    selectedIcon: (
      <SiApplepodcasts color={color.businessNameColor} fontSize={fontSize} />
    ),
  },
  {
    name: "Movie",
    value: "movie",
    icon: <PiFilmReel color={color.businessNameColor} fontSize={fontSize} />,
    selectedIcon: (
      <PiFilmReelFill color={color.businessNameColor} fontSize={fontSize} />
    ),
  },
  {
    name: "Gaming",
    icon: (
      <IoGameControllerOutline
        color={color.businessNameColor}
        fontSize={fontSize}
      />
    ),
    selectedIcon: (
      <IoGameController color={color.businessNameColor} fontSize={fontSize} />
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
    selectedIcon: (
      <PiTelevisionFill color={color.businessNameColor} fontSize={fontSize} />
    ),
  },
  {
    name: "Sport",
    icon: (
      <IoAmericanFootballOutline
        color={color.businessNameColor}
        fontSize={fontSize}
      />
    ),
    selectedIcon: (
      <IoAmericanFootballSharp
        color={color.businessNameColor}
        fontSize={fontSize}
      />
    ),
  },
  {
    name: "Fashion",
    icon: (
      <IoShirtOutline color={color.businessNameColor} fontSize={fontSize} />
    ),
    selectedIcon: (
      <IoShirt color={color.businessNameColor} fontSize={fontSize} />
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
    selectedIcon: (
      <FaMasksTheater color={color.businessNameColor} fontSize={fontSize} />
    ),
  },
  {
    name: "Gym",
    icon: <IoIosFitness color={color.businessNameColor} fontSize={fontSize} />,
    selectedIcon: (
      <IoMdFitness color={color.businessNameColor} fontSize={fontSize} />
    ),
  },
  {
    name: "Crypto",
    icon: <BiBitcoin color={color.businessNameColor} fontSize={fontSize} />,
    selectedIcon: (
      <SiBitcoinsv color={color.businessNameColor} fontSize={fontSize} />
    ),
  },
];

export default categories;
