import { InputGroup, InputRightElement, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import color from "../color";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current?.value) {
          onSearch(searchRef.current!.value);
          navigate(`search?term=${searchRef.current!.value}`);
          searchRef.current!.value = "";
        }
      }}
    >
      <InputGroup
        width={{
          base: "4xs",
          sm: "3xs",
          md: "lg",
          lg: "xl",
          xl: "2xl",
        }}
      >
        <Input
          ref={searchRef}
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
    </form>
  );
};

export default SearchBar;
