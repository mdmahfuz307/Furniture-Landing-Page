import React from "react";
import { WhyChoose } from "./WhyChoose";
import Hero from "./Hero";
import Products from "../Shop/Products";
import { Expriences } from "./Expriences";
import Materials from "./Materials";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Products headline="Best Selling Products" />
      <Expriences />
      <Materials />
      <Testimonials />
    </>
  );
};

export default Home;
