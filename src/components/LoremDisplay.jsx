import React from "react";

const LoremDisplay = ({ data }) => {
  if (!data) return null;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default LoremDisplay;
