import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, CreditCard } from "lucide-react";
import bannerMan from "@/assets/banner/banner-man.png";
import Image from "next/image";
import ArrowImage from "@/assets/banner/Arrow.png";

const Hero = () => {
  return (
    <section className="min-h-svh relative px-4">
      <div className="absolute top-1/2 -left-10  md:w-[200px] md:h-[300px] bg-gradient-to-t from-primary via-primary/70 to-secondary rounded-full blur-3xl opacity-70 -translate-y-1/2" />
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative space-y-6 lg:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-secondary">Rub The App,</span>{" "}
              <span className="text-accent">Your Genie Will</span>{" "}
              <span className="text-primary">Handle The Rest</span>
            </h1>

            <Image
              src={ArrowImage}
              alt="Arrow Decoration"
              className="size-48 mt-4 absolute top-20 -rotate-12 right-0 z-[-1]"
            />

            <p className="text-lg md:text-xl text-light-muted font-medium max-w-lg">
              A smarter way to find help, offer skills, and unlock new
              opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant={"default"}
                className="group font-medium text-lg py-6 px-4"
              >
                Post your task for free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform text-secondary font-bold" />
              </Button>
              <Button
                size="lg"
                variant="rounded"
                className="bg-primary/10 text-primary hover:bg-primary/20 font-bold text-lg py-6 px-4"
              >
                Earn money as a Genie
              </Button>
            </div>

            <div className="text-muted flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm font-base">Fast & Reliable</span>
              </div>
              <div className="flex items-center gap-2 md:border-x md:border-muted md:px-4">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm font-base">Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-accent" />
                <span className="text-sm font-base">
                  Earn More, Stress Less
                </span>
              </div>
            </div>
          </div>

          {/* Right Image with Decorations */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-60" />

              {/* Main Image */}
              <Image
                src={bannerMan}
                width={600}
                height={600}
                alt="Friendly genie helper"
                className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
