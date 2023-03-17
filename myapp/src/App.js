import React from "react";
import Dates from "./date";
import Input from "./input";
import Button from "./button";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="box">
          <Dates />

          <Input />
        </div>

        <Button />
      </div>
    </>
  );
}
