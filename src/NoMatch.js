import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch = () => {
  const location = useLocation();

  return (
    <>
      <span>
        404: Not found. Pathname not recognized:{" "}
        <code>{location.pathname}</code>{" "}
      </span>
    </>
  );
};

export default NoMatch;
