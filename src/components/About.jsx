import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // Timeline with ScrollTrigger
    const scrollTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      }
    });

    // Animate the heading words (simple fade/slide in)
    scrollTimeLine
      .from("#about h2", {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out"
      })
      .from(".top-grid div, .bottom-grid div", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.04
      }, "-=0.5"); // overlap by 0.5s
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span> from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we create is a labor of love, crafted with the finest ingredients and utmost care.
              Our expert mixologists meticulously balance flavors to ensure each sip is a harmonious blend of taste and aroma.
              From the first pour to the final garnish, we pay attention to every detail, ensuring that your cocktail experience
              is nothing short of extraordinary.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customer reviews
              </p>
            </div>
          </div>
        </div>

        <div className="top-grid">
          <div className="md:col-span-3">
            <div className="noisy" />
            <img src="/images/abt1.png" alt="grid-img-1" />
          </div>

          <div className="md:col-span-6">
            <div className="noisy" />
            <img src="/images/abt2.png" alt="grid-img-2" />
          </div>

          <div className="md:col-span-3">
            <div className="noisy" />
            <img src="/images/abt5.png" alt="grid-img-5" />
          </div>
        </div>

        <div className="bottom-grid">
          <div className="md:col-span-8">
            <div className="noisy" />
            <img src="/images/abt3.png" alt="grid-img-3" />
          </div>

          <div className="md:col-span-4">
            <div className="noisy" />
            <img src="/images/abt4.png" alt="grid-img-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

//Error:- Root cause: Importing and calling SplitText incorrectly without having the plugin available.
// - Symptom: Runtime error → React component fails → blank screen.
// - Fix: Remove SplitText (or install/register it properly if you have GSAP Club), and use a valid selector (#about h2).
