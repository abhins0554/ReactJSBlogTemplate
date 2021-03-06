import React from "react";

import Header from "../Component/Header"
import Footer from "../Component/Footer"
import PostContent from "../Component/PostContent";
import moment from "moment";


function SinglePage(props) {

  return (
    <div>
      <Header/>
      <div
        className="site-cover site-cover-sm same-height overlay single-page"
        // style="background-image: url('images/hero_1.jpg');"
        style={{ backgroundImage: `url('${localStorage.getItem('imageUrl')}')` }}
      >
        <div className="container">
          <div className="row same-height justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="post-entry text-center">
                <h1 className="mb-4">
                  <a href="#">
                    {localStorage.getItem('title')}
                  </a>
                </h1>
                <div className="post-meta align-items-center text-center">
                  {/* <figure className="author-figure mb-0 mr-3 d-inline-block">
                    <img
                      src="../images/person_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure> */}
                  <span className="d-inline-block mt-1">By {localStorage.getItem('author')}</span>
                  <span>&nbsp;-&nbsp; {moment(
                    localStorage.getItem('date')?.date?.split(",")[0],
                    "DD MMMM YYYY"
                  ).format("MMMM DD, YYYY")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="site-section py-lg">
        <div className="container">
          <div className="row blog-entries element-animate">
            <div className="col-md-12 col-lg-8 main-content">
            <div className="post-content-body">
                {localStorage.getItem('content')}
            </div>

              {/* <div className="pt-5">
                <p>
                  Categories: <a href="#">Food</a>, <a href="#">Travel</a> Tags:{" "}
                  <a href="#">#manila</a>, <a href="#">#asia</a>
                </p>
              </div> */}

              {/* <div className="pt-5">
                <h3 className="mb-5">6 Comments</h3>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="vcard">
                      <img src="../images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <a href="#" className="reply rounded">
                          Reply
                        </a>
                      </p>
                    </div>
                  </li>

                  <li className="comment">
                    <div className="vcard">
                      <img src="../images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <a href="#" className="reply rounded">
                          Reply
                        </a>
                      </p>
                    </div>

                    <ul className="children">
                      <li className="comment">
                        <div className="vcard">
                          <img
                            src="../images/person_1.jpg"
                            alt="Image placeholder"
                          />
                        </div>
                        <div className="comment-body">
                          <h3>Jean Doe</h3>
                          <div className="meta">January 9, 2018 at 2:21pm</div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur quidem laborum necessitatibus, ipsam
                            impedit vitae autem, eum officia, fugiat saepe enim
                            sapiente iste iure! Quam voluptas earum impedit
                            necessitatibus, nihil?
                          </p>
                          <p>
                            <a href="#" className="reply rounded">
                              Reply
                            </a>
                          </p>
                        </div>

                        <ul className="children">
                          <li className="comment">
                            <div className="vcard">
                              <img
                                src="../images/person_1.jpg"
                                alt="Image placeholder"
                              />
                            </div>
                            <div className="comment-body">
                              <h3>Jean Doe</h3>
                              <div className="meta">January 9, 2018 at 2:21pm</div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Pariatur quidem laborum
                                necessitatibus, ipsam impedit vitae autem, eum
                                officia, fugiat saepe enim sapiente iste iure!
                                Quam voluptas earum impedit necessitatibus,
                                nihil?
                              </p>
                              <p>
                                <a href="#" className="reply rounded">
                                  Reply
                                </a>
                              </p>
                            </div>

                            <ul className="children">
                              <li className="comment">
                                <div className="vcard">
                                  <img
                                    src="../images/person_1.jpg"
                                    alt="Image placeholder"
                                  />
                                </div>
                                <div className="comment-body">
                                  <h3>Jean Doe</h3>
                                  <div className="meta">
                                    January 9, 2018 at 2:21pm
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Pariatur quidem laborum
                                    necessitatibus, ipsam impedit vitae autem,
                                    eum officia, fugiat saepe enim sapiente iste
                                    iure! Quam voluptas earum impedit
                                    necessitatibus, nihil?
                                  </p>
                                  <p>
                                    <a href="#" className="reply rounded">
                                      Reply
                                    </a>
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="comment">
                    <div className="vcard">
                      <img src="../images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <a href="#" className="reply rounded">
                          Reply
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5">Leave a comment</h3>
                  <form action="#" className="p-5 bg-light">
                    <div className="form-group">
                      <label for="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label for="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label for="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>

                    <div className="form-group">
                      <label for="message">Message</label>
                      <textarea
                        name=""
                        id="message"
                        cols="30"
                        rows="10"
                        className="form-control"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Post Comment"
                        className="btn btn-primary"
                      />
                    </div>
                  </form>
                </div>
              </div> */}
            </div>

            <div className="col-md-12 col-lg-4 sidebar">
              <div className="sidebar-box search-form-wrap">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search"></span>
                    <input
                      type="text"
                      className="form-control"
                      id="s"
                      placeholder="Type a keyword and hit enter"
                    />
                  </div>
                </form>
              </div>
              <div className="sidebar-box">
                <div className="bio text-center">
                  {/* <img
                    src="../images/person_2.jpg"
                    alt="Image Placeholder"
                    className="img-fluid mb-5"
                  /> */}
                  <div className="bio-body">
                    <h2>{localStorage.getItem('author')}</h2>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Exercitationem facilis sunt repellendus excepturi beatae
                      porro debitis voluptate nulla quo veniam fuga sit
                      molestias minus.
                    </p>
                    <p>
                      <a
                        href="#"
                        className="btn btn-primary btn-sm rounded px-4 py-2"
                      >
                        Read my bio
                      </a>
                    </p>
                    <p className="social">
                      <a href="#" className="p-2">
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a href="#" className="p-2">
                        <span className="fa fa-twitter"></span>
                      </a>
                      <a href="#" className="p-2">
                        <span className="fa fa-instagram"></span>
                      </a>
                      <a href="#" className="p-2">
                        <span className="fa fa-youtube-play"></span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- END sidebar-box -->   */}
              <div className="sidebar-box">
                <h3 className="heading">Popular Posts</h3>
                <div className="post-entry-sidebar">
                  <ul>
                    <li>
                      <a href="">
                        <img
                          src="../images/img_1.jpg"
                          alt="Image placeholder"
                          className="mr-4"
                        />
                        <div className="text">
                          <h4>
                            There???s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="../images/img_2.jpg"
                          alt="Image placeholder"
                          className="mr-4"
                        />
                        <div className="text">
                          <h4>
                            There???s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="../images/img_3.jpg"
                          alt="Image placeholder"
                          className="mr-4"
                        />
                        <div className="text">
                          <h4>
                            There???s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END sidebar-box --> */}

              <div className="sidebar-box">
                <h3 className="heading">Categories</h3>
                <ul className="categories">
                  <li>
                    <a href="#">
                      Food <span>(12)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Travel <span>(22)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Lifestyle <span>(37)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Business <span>(42)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Adventure <span>(14)</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- END sidebar-box --> */}

              <div className="sidebar-box">
                <h3 className="heading">Tags</h3>
                <ul className="tags">
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Adventure</a>
                  </li>
                  <li>
                    <a href="#">Food</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Freelancing</a>
                  </li>
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Adventure</a>
                  </li>
                  <li>
                    <a href="#">Food</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Freelancing</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- END sidebar --> */}
          </div>
        </div>
      </section>

      {/* <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-5">Related Post</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="entry2 mb-5">
                <a href="#">
                  <img
                    src="../images/img_1.jpg"
                    alt="Image"
                    className="img-fluid rounded"
                  />
                </a>
                <span className="post-category text-white bg-primary mb-3">
                  Sports
                </span>
                <h2>
                  <a href="#">
                    China's Best 2019 Stock Is Already Up 33% and No One Knows
                    Why
                  </a>
                </h2>
                <div className="post-meta align-items-center text-left clearfix">
                  <figure className="author-figure mb-0 mr-3 float-left">
                    <img
                      src="../images/person_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <span className="d-inline-block mt-1">
                    By <a href="#">Carrol Atkinson</a>
                  </span>
                  <span>&nbsp;-&nbsp; February 10, 2019</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  sunt tempora dolor laudantium sed optio. laborum error in eum
                  id veritatis quidem neque nesciunt at architecto nam ullam,
                  officia unde dolores officiis veniam
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="entry2 mb-5">
                <a href="#">
                  <img
                    src="../images/img_1.jpg"
                    alt="Image"
                    className="img-fluid rounded"
                  />
                </a>
                <span className="post-category text-white bg-danger mb-3">
                  Travel
                </span>
                <h2>
                  <a href="#">
                    China's Best 2019 Stock Is Already Up 33% and No One Knows
                    Why
                  </a>
                </h2>
                <div className="post-meta align-items-center text-left clearfix">
                  <figure className="author-figure mb-0 mr-3 float-left">
                    <img
                      src="../images/person_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <span className="d-inline-block mt-1">
                    By <a href="#">Carrol Atkinson</a>
                  </span>
                  <span>&nbsp;-&nbsp; February 10, 2019</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  sunt tempora dolor laudantium sed optio. laborum error in eum
                  id veritatis quidem neque nesciunt at architecto nam ullam,
                  officia unde dolores officiis veniam
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="entry2 mb-5">
                <a href="#">
                  <img
                    src="../images/img_1.jpg"
                    alt="Image"
                    className="img-fluid rounded"
                  />
                </a>
                <span className="post-category text-white bg-warning mb-3">
                  Lifestyle
                </span>
                <h2>
                  <a href="#">
                    China's Best 2019 Stock Is Already Up 33% and No One Knows
                    Why
                  </a>
                </h2>
                <div className="post-meta align-items-center text-left clearfix">
                  <figure className="author-figure mb-0 mr-3 float-left">
                    <img
                      src="../images/person_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <span className="d-inline-block mt-1">
                    By <a href="#">Carrol Atkinson</a>
                  </span>
                  <span>&nbsp;-&nbsp; February 10, 2019</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  sunt tempora dolor laudantium sed optio. laborum error in eum
                  id veritatis quidem neque nesciunt at architecto nam ullam,
                  officia unde dolores officiis veniam
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer/>
    </div>
  );
}

export default SinglePage;
