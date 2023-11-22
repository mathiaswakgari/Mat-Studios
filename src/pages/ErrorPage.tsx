import { VStack, Button, Heading } from "@chakra-ui/react";
import color from "../color";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <VStack h={"100vh"} bg={color.bgColor} justifyContent={"center"}>
      <Heading
        fontSize={{
          base: "20xl",
          md: "4xl",
        }}
        color={color.textColor}
      >
        Ooops. We couldn't find the specified page.
      </Heading>
      <Link to={"/"}>
        <Button rounded={"full"} colorScheme="red">
          Go Home
        </Button>
      </Link>
    </VStack>
  );
};

export default ErrorPage;
