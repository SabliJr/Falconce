import React from "react";
import PropagateLoader from "react-spinners/HashLoader";

const Loader = () => {
  return (
    <div>
      <PropagateLoader
        style={{
          color: "rgba(214, 131, 54, 1)",
        }}
      />
    </div>
  );
};

export default Loader;
