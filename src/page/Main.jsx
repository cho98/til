import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import List from "../components/List";
import Layout from "../page/Layout";

const main = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default main;
