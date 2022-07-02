import { useEffect, useState } from "react";
import { getProducts } from "../Crud/crud";

export default function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState({ loading: false, error: false });
  useEffect(() => {
    setLoading({ loading: true, error: false });
    getProducts()
      .then((res) => {
        setLoading({ loading: true, error: false });
        setData(res?.data);
        console.log(res.data);
      })
      .catch((e) => {
        setLoading({ loading: true, error: false });
        console.log(e, "error");
      });
  }, []);

  return { data, loading };
}
