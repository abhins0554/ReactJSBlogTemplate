import moment from "moment";
import React from "react";

import Services from '../Services/index';

function PopularPost({ data }) {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 section-heading">
            <h2>Popular Posts</h2>
          </div>
        </div>
        <div className="row align-items-stretch retro-layout">
          <div className="col-md-5">
            <a
               onClick={()=>Services._save_data_navigate(data[0])}
              className="hentry img-1 h-100 gradient"
              style={{ backgroundImage: `url('${data[0]?.imageUrl}')` }}
            >
              <div className="text">
                <h2>{data[0]?.title}</h2>
                <span>
                  {moment(data[0]?.date?.split(",")[0], "DD MMMM YYYY").format(
                    "MMMM DD, YYYY"
                  )}
                </span>
              </div>
            </a>
          </div>

          <div className="col-md-7">
            <a
              onClick={()=>Services._save_data_navigate(data[1])}
              className="hentry img-2 v-height mb30 gradient"
              style={{ backgroundImage: `url('${data[1]?.imageUrl}')` }}
            >
              <div className="text text-sm">
                <h2>{data[1]?.title}</h2>
                <span>
                  {moment(data[1]?.date?.split(",")[0], "DD MMMM YYYY").format(
                    "MMMM DD, YYYY"
                  )}
                </span>
              </div>
            </a>

            <div className="two-col d-block d-md-flex">
              <a
                onClick={()=>Services._save_data_navigate(data[2])}
                className="hentry v-height img-2 gradient"
                style={{ backgroundImage: `url('${data[2]?.imageUrl}')` }}
              >
                <div className="text text-sm">
                  <h2>{data[2]?.title}</h2>
                  <span>
                    {moment(
                      data[2]?.date?.split(",")[0],
                      "DD MMMM YYYY"
                    ).format("MMMM DD, YYYY")}
                  </span>
                </div>
              </a>
              <a
                onClick={()=>Services._save_data_navigate(data[3])}
                className="hentry v-height img-2 ml-auto gradient"
                style={{ backgroundImage: `url('${data[3]?.imageUrl}')` }}
              >
                <div className="text text-sm">
                  <h2>{data[3]?.title}</h2>
                  <span>
                    {moment(
                      data[3]?.date?.split(",")[0],
                      "DD MMMM YYYY"
                    ).format("MMMM DD, YYYY")}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularPost;
