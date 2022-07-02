import React from "react";
import useFetch from "../../Hooks/useFetch";

export default function Home() {
  let { data, loadingState } = useFetch("/products");

  console.log(loadingState);
  return (
    <div>
      {loadingState.error && <>error</>}
      {loadingState.loading && <>Loading...</>}
      {!loadingState.loading &&
        !loadingState.error &&
        data?.map((e, i) => {
          return <div key={i}>{e.id}</div>;
        })}
    </div>
  );
}
