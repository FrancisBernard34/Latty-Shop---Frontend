"use client";
import Image from "next/image";
import { useEffect } from "react";
import Glide from "@glidejs/glide";

const Carousel = () => {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 1,
      autoplay: 7000,
      hoverpause: false,
      animationDuration: 800,
      animationTimingFunc: "ease-in-out",
      direction: "ltr",
      dragThreshold: 80,
      keyboard: false,
      arrows: {
        prev: ".glide__arrow--left",
        next: ".glide__arrow--right",
      },
    }).mount();
  }, []);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide relative">
            <Image
              src="/carrousel/discount.png"
              alt="Slide 1"
              width={1600}
              height={400}
              className="w-full h-full pointer-events-none"
              layout="responsive"
            />
          </li>
          <li className="glide__slide relative">
            <Image
              src="/carrousel/promotional_1.png"
              alt="Slide 2"
              width={1600}
              height={400}
              className="w-full h-full pointer-events-none"
              layout="responsive"
            />
          </li>
          {/* Add more slides as needed */}
        </ul>
        <div data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left absolute top-1/2 left-0 z-10"
            data-glide-dir="<"
          >
            ❮
          </button>
          <button
            className="glide__arrow glide__arrow--right absolute top-1/2 right-0 z-10"
            data-glide-dir=">"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
