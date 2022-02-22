import moment from "moment";
import React from "react";

import Services from '../Services/index';

function Blogs({ science, technology }) {
  return (
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="section-heading mb-5 d-flex align-items-center">
              <h2>Science</h2>
              <div class="ml-auto"></div>
            </div>
            <div class="entry2 mb-5">
              <a onClick={()=>Services._save_data_navigate(science[0])}>
                <img
                  src={science[0]?.imageUrl}
                  alt="Image"
                  class="img-fluid rounded"
                />
              </a>
              <span class="post-category text-white bg-primary mb-3">
                Science
              </span>
              <h2>
                {science[0]?.title}
              </h2>
              <div class="post-meta align-items-center text-left clearfix">
                <span class="d-inline-block mt-1">
                  By {science[0]?.author}
                </span>
                <span>
                  &nbsp;-&nbsp;{" "}
                  {moment(
                    science[0]?.date?.split(",")[0],
                    "DD MMMM YYYY"
                  ).format("MMMM DD, YYYY")}
                </span>
              </div>
              <p>{science[0]?.content}</p>
            </div>

            {science.map((item, index) => {
              if (index !== 0) {
                return (
                  <div class="entry4 d-block d-sm-flex">
                    <figure class="figure order-2">
                    <a onClick={()=>Services._save_data_navigate(item)}>
                        <img
                          src={item?.imageUrl}
                          alt="Image"
                          class="img-fluid rounded"
                        />
                      </a>
                    </figure>
                    <div class="text mr-4 order-1">
                      <span class="post-category text-white bg-primary mb-3">
                        Science
                      </span>
                      <h2>
                        {item?.title}
                      </h2>
                      <span class="post-meta mb-3 d-block">
                        {moment(
                          item?.date?.split(",")[0],
                          "DD MMMM YYYY"
                        ).format("MMMM DD, YYYY")}
                      </span>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="section-heading mb-5 d-flex align-items-center">
              <h2>Technology</h2>
              <div class="ml-auto"></div>
            </div>
            <div class="entry2 mb-5">
            <a onClick={()=>Services._save_data_navigate(technology[0])}>
                <img
                  src={technology[0]?.imageUrl}
                  alt="Image"
                  class="img-fluid rounded"
                />
              </a>
              <span class="post-category text-white bg-danger mb-3">
                Technology
              </span>
              <h2>
                {technology[0]?.title}
              </h2>
              <div class="post-meta align-items-center text-left clearfix">
                <figure class="author-figure mb-0 mr-3 float-left">
                  <img
                    src="images/person_1.jpg"
                    alt="Image"
                    class="img-fluid"
                  />
                </figure>
                <span class="d-inline-block mt-1">
                  By {technology[0]?.author}
                </span>
                <span>
                  &nbsp;-&nbsp;{" "}
                  {moment(
                    technology[0]?.date?.split(",")[0],
                    "DD MMMM YYYY"
                  ).format("MMMM DD, YYYY")}
                </span>
              </div>
              <p>{technology[0]?.content}</p>
            </div>

            {technology.map((item, index) => {
              if (index !== 0) {
                return (
                  <div class="entry4 d-block d-sm-flex">
                    <figure class="figure order-2">
                    <a onClick={()=>Services._save_data_navigate(item)}>
                        <img
                          src={item?.imageUrl}
                          alt="Image"
                          class="img-fluid rounded"
                        />
                      </a>
                    </figure>
                    <div class="text mr-4 order-1">
                      <span class="post-category text-white bg-danger mb-3">
                        Technology
                      </span>
                      <h2>
                        {item?.title}
                      </h2>
                      <span class="post-meta mb-3 d-block">
                        {moment(
                          item?.date?.split(",")[0],
                          "DD MMMM YYYY"
                        ).format("MMMM DD, YYYY")}
                      </span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
