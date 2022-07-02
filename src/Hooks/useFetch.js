import { useEffect, useMemo, useState } from "react";
import { cancelApiCall, simpleGetRequest } from "../Crud/crud";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loadingState, setLoading] = useState({ loading: false, error: false });
  const cashedUrl = useMemo(() => {
    return url;
  }, [url]);
  useEffect(() => {
    setLoading({ loading: true, error: false });
    simpleGetRequest(cashedUrl)
      .then((res) => {
        setLoading({ loading: false, error: false });
        setData(res?.data);
      })
      .catch((e) => {
        setLoading({ loading: false, error: true });
      });
    return () => {
      cancelApiCall.products();
    };
  }, [cashedUrl]);

  return { data, loadingState };
}
