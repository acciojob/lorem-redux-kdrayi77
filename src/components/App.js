import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "./redux/loremSlice";

const App = () => {
  const dispatch = useDispatch();
  const { title, body, loading, error } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Lorem Redux Output</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && (title || body) && (
        <p data-testid="lorem-content">
          {title && <strong>{title}</strong>}
          {title && body && <br />}
          {body}
        </p>
      )}
    </div>
  );
};

export default App;
