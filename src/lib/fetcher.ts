import { useState, useEffect, useMemo } from 'react';

const useDataFetching = (url: string): any => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [url]);

  // Memoize the data value
  const memoizedData = useMemo(() => data, [data]);

  return memoizedData;
};

export default useDataFetching;
