import React, { Suspense } from "react";
import { Rings } from "react-loading-icons";
import Wrapper from "./Wrapper";

export default function App() {
  return (
    <>
      <Suspense fallback={<Rings fill="#000000" />}>
        <Wrapper />
      </Suspense>
    </>
  );
}
