import React from "react";

import Crousel from "../Component/Crousel";
import PopularPost from "../Component/PopularPost";
import Blogs from "../Component/Blogs";
import Header from "../Component/Header"
import Footer from "../Component/Footer"

function Home(props) {
  return (
    <div>
      <Header/>
      <Crousel />
      <PopularPost />
      <Blogs />
      <Footer/>
    </div>
  );
}

export default Home;
