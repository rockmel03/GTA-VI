import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  const heroElemRef = useRef(null);
  const skyImg = useRef(null);
  const backgroundImg = useRef(null);
  const heading = useRef(null);
  const characterRef = useRef(null);

  useGSAP(() => {
    // gsap timeline
    const tl = gsap.timeline({
      defaults: {
        duration: 2,
        ease: "Expo.easeInOut",
      },
    });

    // animations

    // group1 animation
    tl.from(
      heroElemRef.current,
      {
        scale: 1.5,
        rotate: -10,
        delay: -0.5,
      },
      "group1"
    ).from(
      skyImg.current,
      {
        scale: 1.5,
        rotate: -10,
      },
      "group1"
    );

    tl.from(
      backgroundImg.current,
      {
        scale: 1.5,
        rotate: 20,
      },
      "group1"
    );

    // group2 animation
    tl.from(
      [heading.current.childNodes[2], heading.current.childNodes[0]],
      {
        x: -200,
        delay: -1,
        duration: 1.5,
      },
      "group2"
    )
      .from(
        heading.current.childNodes[1],
        {
          x: 200,
          delay: -1,
          duration: 1.5,
        },
        "group2"
      )
      .from(
        characterRef.current,
        {
          bottom: "-70%",
          scale: 3,
          delay: -1.2,
        },
        "group2"
      )
      .from(
        "nav",
        {
          delay: -1.2,
          y: -100,
        },
        "group2"
      )
      .from(
        ".btmbar",
        {
          delay: -1.2,
          y: 100,
        },
        "group2"
      );

    // parallax effect on mouse move

    heroElemRef.current.addEventListener("mousemove", function (event) {
      /**
       * Calculates the horizontal movement percentage based on the mouse's X position relative to the window width.
       * The result is a value between -50 and 50, where 0 represents the center of the screen.
       */
      const xMove = (event.clientX / window.innerWidth - 0.5) * 100;

      gsap.to(skyImg.current, {
        x: xMove * 0.1,
        duration: 1,
        ease: "expo",
      });
      gsap.to(backgroundImg.current, {
        x: -xMove * 0.2,
        duration: 0.2,
        ease: "expo",
      });
      gsap.to(heading.current, {
        x: -xMove * 0.3,
        ease: "expo",
      });
    });
  }, [heroElemRef]);

  return (
    <section
      ref={heroElemRef}
      className="hero overflow-hidden w-full h-screen bg-black"
    >
      <nav className="navbar absolute z-[9] ">
        <div className="px-4 py-4 md:px-10 md:py-10">
          <div className="logo text-3xl sm:text-4xl flex gap-[0.8em] items-start">
            <div className="lines flex flex-col gap-[0.15em]">
              <div className="line w-[2em] h-[0.175em] bg-white"></div>
              <div className="line w-[1em] h-[0.175em] bg-white"></div>
              <div className="line w-[0.5em] h-[0.175em] bg-white"></div>
            </div>
            <h3 className="text-[1em] leading-[0.5]">Rockstar</h3>
          </div>
        </div>
      </nav>
      <div className="imagesDiv relative overflow-hidden w-full h-screen">
        <img
          src="./sky.png"
          alt=""
          ref={skyImg}
          className="scale-[1.1] absolute top-0 left-0 w-full h-full object-cover"
        />
        <img
          src="./bg.png"
          alt=""
          ref={backgroundImg}
          className="scale-[1.1] absolute top-0 left-0 w-full h-full object-cover"
        />

        <h1
          ref={heading}
          className="absolute top-[40%] lg:top-0 -translate-y-1/2 lg:translate-y-0 left-1/2 -translate-x-1/2 text-8xl md:text-[10rem] lg:text-[12rem] leading-none"
        >
          <div className="">Grand</div>
          <div className="ml-10 md:ml-30 lg:ml-40">Theft</div>
          <div className="">Auto</div>
        </h1>
        <img
          src="./girlbg.png"
          alt=""
          ref={characterRef}
          className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-full h-full object-contain"
        />
      </div>
      <div className="btmbar z-[9] absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black to-transparent">
        <button
          type="button"
          className="hidden md:flex items-center gap-2 text-xl font-sans animate-bounce"
        >
          <span className="">
            <i className="ri-arrow-down-long-line ri-lg"></i>
          </span>
          <span className="capitalize font-medium"> scroll down</span>
        </button>
        <img
          src="/ps5.png"
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:h-[10vh]"
        />
      </div>
    </section>
  );
}

export default Hero;
