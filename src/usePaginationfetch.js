import { useEffect, useState } from "react";

const usePaginationFetch = (getUrl, mapResults = (result) => result) => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const pageSize = 10;

  useEffect(() => {
    setLoading(true);
    fetch(getUrl(page, pageSize))
      .then((response) => response.json())
      .then((data) => {
        setResults(mapResults(data));
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [page, getUrl]);

  const nextPage = () => setPage(page + 1);
  const previousPage = () => setPage(Math.max(0, page - 1));

  return { loading, results, page, setPage, nextPage, previousPage };
};

export { usePaginationFetch };
