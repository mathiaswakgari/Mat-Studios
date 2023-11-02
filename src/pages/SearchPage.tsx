import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const term = searchParams.get("term");
  return <div>{term}</div>;
};

export default SearchPage;
