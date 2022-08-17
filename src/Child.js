import React from "react";
import { memo } from "react";
const Child = () => {
  return <div>{console.log("Child")}</div>;
};

export default memo(Child);
