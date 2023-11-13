import { VStack, Divider } from "@chakra-ui/react";
import ChannelInfo from "../components/ChannelInfo";
import { useParams } from "react-router-dom";
import useChannel from "../hooks/useChannel";
import ChannelBanner from "../components/ChannelBanner";
import ChannelVideos from "../components/ChannelVideos";
import Loader from "../components/Loader";

const ChannelPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useChannel(id!);

  if (isLoading) return <Loader />;

  const channel = data?.data?.items[0]!;

  return (
    <VStack
      w={{
        base: "100%",
        sm: "90%",
        xl: "70%",
      }}
    >
      <ChannelBanner url={channel.brandingSettings.image.bannerExternalUrl} />
      <ChannelInfo channel={channel!} />
      <Divider />
      <ChannelVideos channelId={id!} />
    </VStack>
  );
};

export default ChannelPage;
