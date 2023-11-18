import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import color from "../color";
import { BsPerson } from "react-icons/bs";

const ProfileMenu = () => {
  return (
    <Menu>
      <MenuButton>
        <Avatar
          icon={<BsPerson fontSize="20px" />}
          size={"sm"}
          bg={color.hoverColor}
          color={color.textColor}
        />
      </MenuButton>
      <MenuList
        color={color.textTwoColor}
        border={"none"}
        bg={color.hoverColor}
      >
        <MenuItem bg={color.hoverColor}>Download</MenuItem>
        <MenuItem bg={color.hoverColor}>Create a Copy</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
