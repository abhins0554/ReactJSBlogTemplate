import React from 'react';

function Crousel(props) {
    return (
      <div className="slide-one-item home-slider owl-carousel">
        <div
          className="site-cover site-cover-sm same-height overlay"
          style={{ backgroundImage: "url('images/img_2.jpg')" }}
        >
          <div className="container">
            <div className="row same-height align-items-center">
              <div className="col-md-12 col-lg-6">
                <div className="post-entry">
                  <span className="post-category text-white bg-success mb-3">
                    Nature
                  </span>
                  <h2 className="mb-4">
                    <a href="#">
                      The 20 Biggest Fintech Companies In America 2019
                    </a>
                  </h2>
                  <div className="post-meta align-items-center text-left">
                    <figure className="author-figure mb-0 mr-3 float-left">
                      <img
                        src="images/person_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <span className="d-inline-block mt-1">
                      By Carrol Atkinson
                    </span>
                    <span>&nbsp;-&nbsp; February 10, 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="site-cover site-cover-sm same-height overlay"
          style={{ backgroundImage: "url('images/img_1.jpg')" }}
        >
          <div className="container">
            <div className="row same-height align-items-center">
              <div className="col-md-12 col-lg-6">
                <div className="post-entry">
                  <span className="post-category text-white bg-success mb-3">
                    Nature
                  </span>
                  <h2 className="mb-4">
                    <a href="#">
                      The 20 Biggest Fintech Companies In America 2019
                    </a>
                  </h2>
                  <div className="post-meta align-items-center text-left">
                    <figure className="author-figure mb-0 mr-3 float-left">
                      <img
                        src="images/person_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <span className="d-inline-block mt-1">
                      By Carrol Atkinson
                    </span>
                    <span>&nbsp;-&nbsp; February 10, 2019</span>
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