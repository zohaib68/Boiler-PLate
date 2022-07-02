import React from "react";
import useFetch from "../../Hooks/useFetch";

export default function Home() {
  let { data, loading } = useFetch();
  return <div>Home</div>;
}
