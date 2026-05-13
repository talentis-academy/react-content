import { useState, useEffect } from 'react';

function useFetchApi(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setData(null);
    let cancelled = false;

    fetch(url)
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then(json => { if (!cancelled) { setData(json); setIsLoading(false); } })
      .catch(() => { if (!cancelled) { setIsError(true); setIsLoading(false); } });

    return () => { cancelled = true; };
  }, [url]);

  return { data, isLoading, isError };
}

export default useFetchApi;
