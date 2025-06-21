import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

import React from "react";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars,words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",

          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        {/*ōfūmai 爽=refreshing, fresh
        風 = wind
        舞 = dance
*/}
        <h1 className="title">爽風舞</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              {/* This are the words for cool,crisp and classic */}
              <p className="mt-10">粋・爽快・定番</p>
              <p className="subtitle">
                夏の爽やかな
                <br />
                一口
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                うちのドリンクは、素材にこだわって、ひとつひとつ丁寧に仕上げています。
                昔ながらの良さに、ちょっとした遊び心をプラス。
                一口飲めば、きっと心までほどけていくはずです
              </p>
              <a href="#cocktails">カクテルを見る</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
