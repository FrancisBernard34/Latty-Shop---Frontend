"use client";
import { useState, useEffect } from "react";
import Carousel from "@/components/Carrousel";
import Card from "@/components/Card";
import Image from "next/image";
import OfferList from "@/components/OfferList";

// Convert the initial countdown state into a timestamp representing the end time
const endTime = Date.now() + (1 * 24 * 60 * 60 * 1000) + (15 * 60 * 60 * 1000) + (43 * 60 * 1000) + (10 * 1000);

const InitialPageProductSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number; } | null>(null);

 useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const totalDuration = endTime - now;
      const durationInSeconds = Math.floor(totalDuration / 1000);
      const days = Math.floor(durationInSeconds / 86400);
      const hours = Math.floor((durationInSeconds % 86400) / 3600);
      const minutes = Math.floor((durationInSeconds % 3600) / 60);
      const seconds = durationInSeconds % 60;

      return { days, hours, minutes, seconds };
    };

    let timerId: number | NodeJS.Timeout | null = null;

    if (endTime) {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      timerId = setInterval(() => {
        const newTimeLeft = calculateTimeLeft();
        setTimeLeft(newTimeLeft);

        if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
          clearInterval(timerId as number);
        }
      }, 1000);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
 }, []);

  return (
    <main>
      <Image
        src="/bg.png"
        alt="background"
        objectFit="cover"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto", position: "absolute" }}
      />
      <div role="main" className="max-w-[1600px] mx-auto flex flex-col">
        <Carousel />
        <Card $className="max-w-[1600px] max-h-[100px] bg-[#ffa60d] z-10 relative p-6 flex justify-end items-center my-0">
          <h3 className="uppercase flex mr-auto text-[#ffffff] text-2xl font-bold">
            Ofertas Relâmpago:
          </h3>
          <p className="text-[#1a1a1a] uppercase font-bold text-xl mr-4">
            Expira em:
          </p>
          <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content w-[70px]">
              <span className="font-bold text-2xl">{timeLeft?.days || 0}</span>
              dia(s)
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content w-[70px]">
              <span className="font-bold text-2xl">{timeLeft?.hours || 0}</span>
              hora(s)
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content w-[70px]">
              <span className="font-bold text-2xl">{timeLeft?.minutes || 0}</span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content w-[70px]">
              <span className="font-bold text-2xl">{timeLeft?.seconds || 0}</span>
              seg
            </div>
          </div>
        </Card>
        <section className="bg-[#1d232a] w-full relative">
          <OfferList />
        </section>
        <section>
          <Card $className="w-full bg-[#ffa60d] relative p-6 flex justify-center gap-4 items-center my-0">
            <Image src="/card_discount/alimentos_discount.png" width={736} height={198} alt="food discount card" className="cursor-pointer max-w-[736px] max-h[198px] w-full h-aut" />
            <Image src="/card_discount/super_promo.png" width={736} height={198} alt="super promo card" className="cursor-pointer max-w-[736px] max-h[198px] w-full h-auto" />
          </Card>
        </section>
      </div>
    </main>
  );
};

export default InitialPageProductSection;
