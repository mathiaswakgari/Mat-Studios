import { useQuery } from "@tanstack/react-query";
import api_client from "../services/api_client";

export interface FetchChannel {
  items: Channel[];
}

export interface Channel {
  snippet: {
    thumbnails: {
      default: {
        url: string;
      };
      high: {
        url: string;
      };
      medium: {
        url: string;
      };
    };
    title?: string;
  };
  statistics: {
    subscriberCount: string;
    videoCount: string;
  };
  id: {
    kind: "youtube#channel";
    channelId: string;
  };
}

const useChannel = (channelId: string) => {
  return useQuery({
    queryKey: ["channels", channelId!],
    queryFn: () =>
      api_client.get<FetchChannel>("channels", {
        params: {
          part: "snippet,statistics",
          id: channelId!,
        },
      }),
  });
};

export default useChannel;
