import { Spinner, VStack } from "@chakra-ui/react";

const Loader = () => {
  return (
    <VStack h={"full"} w={"full"} justifyContent={"center"}>
      <Spinner size={"xl"} color="red.500" />
    </VStack>
  );
};

export default Loader;
