import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch = () => {
  const location = useLocation();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3rem",
      }}
    >
      <span>
        404: Not found. Pathname not recognized:{" "}
        <code>{location.pathname}</code>{" "}
      </span>
    </div>
  );
};

export default NoMatch;
