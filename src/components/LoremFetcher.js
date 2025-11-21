import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../store/actions";

function LoremFetcher() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading) return <p>Loading lorem ipsum…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>No content available.</p>
      )}
    </div>
  );
}

export default LoremFetcher;
