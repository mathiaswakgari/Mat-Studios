import { InputGroup, InputRightElement, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import color from "../color";

const SearchBar = () => {
  return (
    <InputGroup
      width={{
        base: "sm",
        md: "lg",
        xl: "2xl",
      }}
    >
      <Input
        type="text"
        placeholder="Search..."
        borderRadius={"full"}
        borderColor={color.iconColor}
      />
      <InputRightElement pointerEvents="none">
        <BsSearch />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
