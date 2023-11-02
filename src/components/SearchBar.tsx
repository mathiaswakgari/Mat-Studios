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
        _placeholder={{
          color: color.textTwoColor,
        }}
        borderRadius={"full"}
        borderColor={color.borderColor}
        color={color.textColor}
      />
      <InputRightElement pointerEvents="none">
        <BsSearch color={color.textTwoColor} />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
