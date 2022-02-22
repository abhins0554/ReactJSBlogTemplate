import React from "react";
import moment from "moment";

import Services from '../Services/index';

function Crousel({ data }) {

  

  return (
    <div className="slide-one-item home-slider owl-carousel">
      <div
        className="site-cover site-cover-sm same-height overlay"
        style={{ backgroundImage: `url('${data[0]?.imageUrl}')` }}
      >
        <div className="container">
          <div className="row same-height align-items-center">
            <div className="col-md-12 col-lg-6">
              <div className="post-entry">
                <h2 className="mb-4">
                <a onClick={()=>Services._save_data_navigate(data[0])}>{data[0]?.title}</a>
                </h2>
                <div className="post-meta align-items-center text-left">
                  <span className="d-inline-block mt-1">
                    By {data[0]?.author}
                  </span>
                  <span>
                    &nbsp;-&nbsp;{" "}
                    {moment(
                      data[0]?.date?.split(",")[0],
                      "DD MMMM YYYY"
                    ).format("MMMM DD, YYYY")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="site-cover site-cover-sm same-height overlay"
        style={{ backgroundImage: `url('${data[1]?.imageUrl}')` }}
      >
        <div className="container">
          <div className="row same-height align-items-center">
            <div className="col-md-12 col-lg-6">
              <div className="post-entry">
                <h2 className="mb-4">
                <a onClick={()=>Services._save_data_navigate(data[1])}>{data[1]?.title}</a>
                </h2>
                <div className="post-meta align-items-center text-left">
                  <span className="d-inline-block mt-1">
                    By {data[1]?.author}
                  </span>
                  <span>
                    &nbsp;-&nbsp;{" "}
                    {moment(
                      data[1]?.date?.split(",")[0],
                      "DD MMMM YYYY"
                    ).format("MMMM DD, YYYY")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="site-cover site-cover-sm same-height overlay"
        style={{ backgroundImage: `url('${data[2]?.imageUrl}')` }}
      >
        <div className="container">
          <div className="row same-height align-items-center">
            <div className="col-md-12 col-lg-6">
              <div className="post-entry">
                <h2 className="mb-4">
                <a onClick={()=>Services._save_data_navigate(data[2])}>{data[2]?.title}</a>
                </h2>
                <div className="post-meta align-items-center text-left">
                  <span className="d-inline-block mt-1">
                    By {data[2]?.author}
                  </span>
                  <span>
                    &nbsp;-&nbsp;{" "}
                    {moment(
                      data[2]?.date?.split(",")[0],
                      "DD MMMM YYYY"
                    ).format("MMMM DD, YYYY")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="site-cover site-cover-sm same-height overlay"
        style={{ backgroundImage: `url('${data[3]?.imageUrl}')` }}
      >
        <div className="container">
          <div className="row same-height align-items-center">
            <div className="col-md-12 col-lg-6">
              <div className="post-entry">
                <h2 className="mb-4">
                <a onClick={()=>Services._save_data_navigate(data[3])}>{data[3]?.title}</a>
                </h2>
                <div className="post-meta align-items-center text-left">
                  <span className="d-inline-block mt-1">
                    By {data[3]?.author}
                  </span>
                  <span>
                    &nbsp;-&nbsp;{" "}
                    {moment(
                      data[3]?.date?.split(",")[0],
                      "DD MMMM YYYY"
                    ).format("MMMM DD, YYYY")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crousel;
