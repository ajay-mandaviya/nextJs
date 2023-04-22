import Head from "next/head";
import React from "react";
import { Board } from "../../../components";

const Components = () => {
  return (
    <>
      <Board />
    </>
  );
};

export default Components;

Components.getLayout = function PageNotFound(page: any) {
  return <>{page}</>;
};
