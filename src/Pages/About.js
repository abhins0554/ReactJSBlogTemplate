import React from "react";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

function About(props) {
  return (
    <div>
      <Header/>
      <div
        className="site-cover site-cover-sm same-height overlay single-page"
        // style="background-image: url('images/hero_1.jpg');"
        style={{ backgroundImage: "url('images/hero_1.jpg')" }}
      >
        <div className="container">
          <div className="row same-height justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="post-entry text-center">
                <h1 className="mb-4">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-5 ml-auto">
              <h2>About Us</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                voluptate odit corrupti vitae cupiditate explicabo, soluta
                quibusdam necessitatibus, provident reprehenderit, dolorem saepe
                non eligendi possimus autem repellendus nesciunt, est deleniti
                libero recusandae officiis. Voluptatibus quisquam voluptatum
                expedita recusandae architecto quibusdam.
              </p>

              <ul className="ul-check list-unstyled success">
                <li>Onsectetur adipisicing elit</li>
                <li>Dolorem saepe non eligendi possimus</li>
                <li>Voluptate odit corrupti vitae</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-5 mr-auto order-md-1">
              <h2>We Love To Explore</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                voluptate odit corrupti vitae cupiditate explicabo, soluta
                quibusdam necessitatibus, provident reprehenderit, dolorem saepe
                non eligendi possimus autem repellendus nesciunt, est deleniti
                libero recusandae officiis. Voluptatibus quisquam voluptatum
                expedita recusandae architecto quibusdam.
              </p>
              <ul className="ul-check list-unstyled success">
                <li>Onsectetur adipisicing elit</li>
                <li>Dolorem saepe non eligendi possimus</li>
                <li>Voluptate odit corrupti vitae</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-5 text-center">
              <h2>Our Editors</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus commodi blanditiis, soluta magnam atque laborum ex qui
                recusandae
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-5 text-center">
              <img
                src="images/person_1.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-4"
              />
              <h2 className="mb-3">Kate Hampton</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                neque nobis eos quam necessitatibus rerum aliquid est tempore,
                cupiditate iure at voluptatum dolore, voluptates. Debitis
                accusamus, beatae ipsam excepturi mollitia.
              </p>
            </div>

            <div className="col-md-6 col-lg-4 mb-5 text-center">
              <img
                src="images/person_2.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-4"
              />
              <h2 className="mb-3">Richard Cook</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                neque nobis eos quam necessitatibus rerum aliquid est tempore,
                cupiditate iure at voluptatum dolore, voluptates. Debitis
                accusamus, beatae ipsam excepturi mollitia.
              </p>
            </div>

            <div className="col-md-6 col-lg-4 mb-5 text-center">
              <img
                src="images/person_3.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-4"
              />
              <h2 className="mb-3">Kevin Peters</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                neque nobis eos quam necessitatibus rerum aliquid est tempore,
                cupiditate iure at voluptatum dolore, voluptates. Debitis
                accusamus, beatae ipsam excepturi mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
