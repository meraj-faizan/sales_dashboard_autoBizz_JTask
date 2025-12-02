"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CTAImage from "@/assets/footer/cleaner-men.png";
import CTABG from "@/assets/footer/CTABG.png";

export default function CallToAction() {
  return (
    <section
      className="mt-96 relative container flex flex-col md:flex-row items-center justify-between gap-8  rounded-3xl md:rounded-[2rem] z-10 -mb-40"
      style={{
        backgroundImage: `url(${CTABG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center md:text-left flex-1 pl-0 md:pl-10 lg:pl-16 py-10 md:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent leading-snug">
          Stay Updated with <br /> Agile Insights
        </h2>
        <p className="text-white mt-2 text-sm md:text-lg">
          Get the Latest Tips and News Directly to Your Inbox
        </p>

        <div className="mt-6 flex items-center justify-center md:justify-start ">
          <div className="relative bg-white/90 rounded-full shadow-lg">
            <input
              type="email"
              placeholder="Subscribe now"
              className="w-64 md:w-96 px-6 py-6 rounded-full text-gray-800 outline-none"
            />
            <button className="absolute right-1 top-1 bottom-1 aspect-square bg-primary text-white rounded-full flex items-center justify-center hover:translate-x-1 transition">
              <ArrowRight className="text-white size-10 -rotate-45" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end flex-1">
        <Image
          src={CTAImage.src}
          alt="Cleaner"
          width={500}
          height={500}
          quality={100}
          className="object-contain drop-shadow-xl relative z-10 md:-mb-24 lg:-mb-8 xl:mb-0 lg:-mt-28"
        />
      </div>
    </section>
  );
}
