import { Button } from "@chakra-ui/react";
import { SlUserFollow } from "react-icons/sl";

const SubscribeButton = () => {
  return (
    <Button
      marginLeft={2}
      // isDisabled
      borderRadius={"3xl"}
      colorScheme="red"
      size={"sm"}
      rightIcon={<SlUserFollow />}
    >
      Subscribe
    </Button>
  );
};

export default SubscribeButton;
