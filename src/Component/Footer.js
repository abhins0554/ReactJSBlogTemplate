import React from "react";

function Footer(props) {
  return (
    <div class="site-footer">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-4">
            <h3 class="footer-heading mb-4">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              reprehenderit magnam deleniti quasi saepe, consequatur atque sequi
              delectus dolore veritatis obcaecati quae, repellat eveniet omnis,
              voluptatem in. Soluta, eligendi, architecto.
            </p>
          </div>
          <div class="col-md-3 ml-auto">
            <h3 class="footer-heading mb-4">Quick Menu</h3>
            <ul class="list-unstyled float-left mr-5">
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
            </ul>
            <ul class="list-unstyled float-left">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#"> About</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <div class="mb-5">
              <h3 class="footer-heading mb-4">Subscribe</h3>
              <div action="" class="form-footer-subscribe">
                <div class="form-group d-flex">
                  <input type="email" class="form-control" placeholder="E-mail" />
                  <input
                    type="submit"
                    class="btn btn-primary text-white"
                    value="Subscribe"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 class="footer-heading mb-4">Connect With Us</h3>
              <p>
                <a href="#">
                  <span class="icon-facebook pt-2 pr-2 pb-2 pl-0"></span>
                </a>
                <a href="#">
                  <span class="icon-twitter p-2"></span>
                </a>
                <a href="#">
                  <span class="icon-instagram p-2"></span>
                </a>
                <a href="#">
                  <span class="icon-rss p-2"></span>
                </a>
                <a href="#">
                  <span class="icon-envelope p-2"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved <a href="/">QuickBlog.Tech</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
