import React, { useState } from "react";
import axios from "axios";

import Crousel from "../Component/Crousel";
import PopularPost from "../Component/PopularPost";
import Blogs from "../Component/Blogs";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Home(props) {
  const [crousel_data, set_crousel_data] = useState([]);
  const [top_5_data, set_top_5_data] = useState([]);
  const [all_data_tech, set_all_data_tech] = useState([]);
  const [all_data_science, set_all_data_science] = useState([]);

  const get_news_data = async () => {
    let crousel_data1 = [];
    let top_data = [];
    let all_data1_tech = [];
    let all_data1_scen = [];
    await axios
      .get("https://inshortsapi.vercel.app/news?category=technology")
      .then((response) => {
        for (let i = 0; i < response.data.data.length; i++) {
          if (i < 2) {
            crousel_data1.push(response.data.data[i]);
          } else if (i > 2 && i < 6) {
            top_data.push(response.data.data[i]);
          } else {
            all_data1_tech.push(response.data.data[i]);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get("https://inshortsapi.vercel.app/news?category=science")
      .then((response) => {
        for (let i = 0; i < response.data.data.length; i++) {
          if (i < 2) {
            crousel_data1.push(response.data.data[i]);
          } else if (i > 2 && i < 5) {
            top_data.push(response.data.data[i]);
          } else {
            all_data1_scen.push(response.data.data[i]);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });

    set_crousel_data(crousel_data1);
    set_top_5_data(top_data);
    set_all_data_tech(all_data1_tech);
    set_all_data_science(all_data1_scen);
  };

  React.useEffect(() => {
    get_news_data();
  }, []);

  return (
    <div>
      <Header />
      <Crousel data={crousel_data} />
      <PopularPost data={top_5_data} />
      <Blogs science={all_data_science} technology={all_data_tech}/>
      <Footer />
    </div>
  );
}

export default Home;
