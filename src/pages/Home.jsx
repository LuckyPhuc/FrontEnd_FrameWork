import React from "react";
import Banner from "./Website/components/banner/Banner";
import { Container } from "@mui/material";
import HotNew from "./Website/components/hot_new_section/HotNew";
const Home = () => {
  return (
    <>
      <HotNew />
      <Banner />
    </>
  );
};

export default Home;
