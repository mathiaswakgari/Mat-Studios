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
          bg={color.baseColor}
          color={color.textColor}
        />
      </MenuButton>
      <MenuList color={color.textTwoColor} border={"none"} bg={color.baseColor}>
        <MenuItem bg={color.baseColor}>Download</MenuItem>
        <MenuItem bg={color.baseColor}>Create a Copy</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
