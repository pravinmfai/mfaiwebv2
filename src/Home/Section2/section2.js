import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

function Example() {
  const comp = useRef(null);
  const galleryRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const details = gsap.utils.toArray(
        ".desktopContentSection:not(:first-child)"
      );
      const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

      gsap.set(photos, { yPercent: 101 });

      const allPhotos = gsap.utils.toArray(".desktopPhoto");

      let mm = gsap.matchMedia();
      // create

      // add a media query. When it matches, the associated function will run
      mm.add("(min-width: 600px)", () => {
        // this setup code only runs when viewport is at least 600px wide
        console.log("desktop");

        ScrollTrigger.create({
          trigger: galleryRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: ".right"
        });

        //create scroll trigger for each details section
        //trigger photo animation when headline of each details section
        //reaches 80% of window height
        details.forEach((detail, index) => {
          let headline = detail.querySelector("h1");

          let animation = gsap
            .timeline()
            .to(photos[index], { yPercent: 0 })
            .set(allPhotos[index], { autoAlpha: 0 });

          ScrollTrigger.create({
            trigger: headline,
            start: "top 80%",
            end: "top 50%",
            animation: animation,
            scrub: true,
            markers: false
          });
        });

        return () => {
          // optional
          // custom cleanup code here (runs when it STOPS matching)
          console.log("mobile");
        };
      });
    }, comp);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={comp}>
      <div className="spacer"></div>

      <div ref={galleryRef} className="gallery">
        <div className="left">
          <div className="desktopContent">
            <div className="desktopContentSection">
              <h1>Machine Learning</h1>
              <p>
              At MindFulAI, we offer advanced machine learning services to help your business thrive. Our solutions are designed to provide valuable insights and automate tasks, making your operations smarter and more efficient.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>Gen AI</h1>
              <p>
              At MindFulAI, we're revolutionizing the way businesses operate with the power of Artificial Intelligence (AI). Our cutting-edge technology harnesses the potential of AI to solve complex problems and drive innovation across various industries.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>UI/UX</h1>
              <p>
              At MindFulAI, we specialize in crafting captivating digital experiences through our top-notch UI/UX design services. Our mission is to elevate your brand and delight your users with intuitive and visually stunning interfaces.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>MERN Stack</h1>
              <p>
              At MindFulAI, we specialize in providing cutting-edge MERN Stack development services to bring your digital ideas to life. Our team of expert developers is dedicated to delivering robust, scalable, and high-performance web applications tailored to your specific requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="mobileContent">
            <div className="mobilePhoto red"></div>
            <h1>Machine Learning</h1>
            <p>
            At MindFulAI, we offer advanced machine learning services to help your business thrive. Our solutions are designed to provide valuable insights and automate tasks, making your operations smarter and more efficient.
            </p>

            <div className="mobilePhoto green"></div>
            <h1>Gen AI</h1>
            <p>
            At MindFulAI, we're revolutionizing the way businesses operate with the power of Artificial Intelligence (AI). Our cutting-edge technology harnesses the potential of AI to solve complex problems and drive innovation across various industries.
            </p>

            <div className="mobilePhoto pink"></div>
            <h1>UI/UX</h1>
            <p>
            At MindFulAI, we specialize in crafting captivating digital experiences through our top-notch UI/UX design services. Our mission is to elevate your brand and delight your users with intuitive and visually stunning interfaces.</p>
            <div className="mobilePhoto blue"></div>
            <h1>MERN Stack</h1>
            <p>
            At MindFulAI, we specialize in providing cutting-edge MERN Stack development services to bring your digital ideas to life. Our team of expert developers is dedicated to delivering robust, scalable, and high-performance web applications tailored to your specific requirements.
            </p>
          </div>

          <div className="desktopPhotos">
            <div className="desktopPhoto red"></div>
            <div className="desktopPhoto green"></div>
            <div className="desktopPhoto pink"></div>
            <div className="desktopPhoto blue"></div>
          </div>
        </div>
      </div>

      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </div>
  );
}

export default Example;