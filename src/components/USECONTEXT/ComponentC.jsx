/* eslint-disable no-unused-vars */
import React from "react";
import ComponentD from "./ComponentD";
import { useContext } from "react";
import { UserContext } from "./ComponentA";

const ComponentC = () => {
  const username = useContext(UserContext);
  return (
    <div className="border border-red-500 p-8">
      <h1>Component C</h1>
      <h2>One more step {username}</h2>
      <ComponentD />
    </div>
  );
};

export default ComponentC;
