import { AspectRatio, Image } from "@chakra-ui/react";

interface Props {
  url: string;
}

const ChannelBanner = ({ url }: Props) => {
  return (
    <AspectRatio ratio={4 / 1.25} w={"full"}>
      <Image borderRadius={"3xl"} src={url} />
    </AspectRatio>
  );
};

export default ChannelBanner;
