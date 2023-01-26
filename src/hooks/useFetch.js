import { useEffect, useState } from "react";

const useFetch = (url, mapResults = (result) => result) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(mapResults(data));
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [url]);

  return { data, loading };
};

export { useFetch };
