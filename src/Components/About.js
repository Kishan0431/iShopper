import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div class="container marketing">
          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">
                First featurette heading.{" "}
                <span class="text-body-secondary">It’ll blow your mind.</span>
              </h2>
              <p class="lead">
                flexible material made from yarn, directly from fibers,
                polymeric film, foam, or any combination of these techniques.
                Fabric has a broader application than cloth. In and around the
                19th century Punjab and Gujarat were famous destination for
                various handspun cloths. Dosuti was distinguished by the number
                of yarns used to produce it.
              </p>
            </div>
            <div class="col-md-5 order-md-2">
              <img
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                src="https://blog.makersvalley.net/hubfs/dan-gold-aJN-jjFLyCU-unsplash-1.jpg"
                alt="about"
              />

              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-bg)"
              ></rect>
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">
                Oh yeah, it’s that good.{" "}
                <span class="text-body-secondary">See for yourself.</span>
              </h2>
              <p class="lead">
                Cloth is a flexible substance typically created through the
                processes of weaving, felting, or knitting using natural or
                synthetic materials.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                src="https://www.superprof.co.in/blog/wp-content/uploads/2017/12/textile-color-colorful-fabric-texture-rainbow.jpg"
                alt=""
              />

              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-bg)"
              ></rect>
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">
                And lastly, this one.{" "}
                <span class="text-body-secondary">Checkmate.</span>
              </h2>
              <p class="lead">
                The term "serviceability" refers to a textile product's ability
                to meet the needs of consumers. The emphasis is on knowing the
                target market and matching the needs of the target market to the
                product's serviceability. Serviceability in textiles or
                Performance is the ability of textile materials to withstand
                various conditions, environments, and hazards. Aesthetics,
                durability, comfort and safety, appearance retention, care,
                environmental impact, and cost are the serviceability concepts
                employed in structuring the material.
              </p>
            </div>
            <div class="col-md-5">
              <img
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                src="https://dempseyuniform.com/wp-content/uploads/2018/10/dempsey-check-fabric-quality.jpg"
                alt="winter"
              />
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-bg)"
              ></rect>
            </div>
          </div>

          <hr class="featurette-divider" />
        </div>
      </div>
      <footer class="container">
        <p class="float-end">
          <a href="#">Back to top</a>
        </p>
        <p>
          © 2022–2023 iShopper, Inc. · <a href="#">Privacy</a> ·{" "}
          <a href="#">Terms</a>
        </p>
      </footer>
    </div>
  );
};

export default About;
