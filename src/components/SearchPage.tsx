import { useLocation } from "react-router-dom";
import useSearch from "../Hooks/useSearch";

const SearchPage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  const { data, error } = useSearch(searchQuery || "");

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Search Results for "{searchQuery}"</h1>
      {data?.items.map((result) => (
        <div key={result.id}>
          <h2>{result.snippet.title}</h2>
          <p>{result.snippet.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
