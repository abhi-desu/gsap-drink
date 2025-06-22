import React, { use } from "react";
import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });
    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", { y: "-50", duration: 1, ease: "power1.inOut" })
      .to("#f-left-leaf", { y: "-50", duration: 1, ease: "power1.inOut" }, "<");
  });
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />
      <div className="content">
        <h2>お店の場所はこちら</h2>
        <div>
          <h3>私たちのバーに遊びに来てね！</h3>
          <p>〒150-0042 東京都渋谷区宇田川町10-2 サクラビル3階</p>
        </div>
        <div>
          <h3>お問い合わせ</h3>
          <p>03-1234-5678</p>
          <p>abhishek123bar@tokyo.jp</p>
        </div>
        <div>
          {/* 年中無休 (Nenchū mukyū) – “Open year-round without holidays” (common on stores or bars) */}

          <h3>年中無休</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>
        <div>
          <h3>公式SNS</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Contact;
