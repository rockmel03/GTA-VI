import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Loader({ onLoading }) {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: -30,
      duration: 1,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 1,
      opacity: 0,
      delay: -0.2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
      onUpdate: function () {
        if (this.progress() > 0.8) {
          document.querySelector(".svg").remove();
          onLoading();
          this.kill();
        }
      },
    });
  });

  return (
    <div className="svg fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill="black" />
            <g className="vi-mask-group">
              <text
                x="50%"
                y="50%"
                fontSize="250"
                textAnchor="middle"
                fill="white"
                dominantBaseline="middle"
                fontFamily="Arial Black"
              >
                VI
              </text>
            </g>
          </mask>
        </defs>
        <image
          href="./bg.png"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#viMask)"
        />
      </svg>
    </div>
  );
}

export default Loader;
