import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import color from "../color";
import { BsPerson } from "react-icons/bs";

const ProfileMenu = () => {
  return (
    <Menu colorScheme={color.businessNameColor}>
      <MenuButton>
        <Avatar
          bg={color.iconColor}
          icon={<BsPerson fontSize="25px" />}
          size={{
            base: "sm",
            md: "md",
          }}
        />
      </MenuButton>
      <MenuList color={color.businessNameColor}>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
