import { CheckCircle } from "lucide-react";
import Image from "next/image";
import serviceImage from "@/assets/banner/services.svg";

export default function HeroSection() {
  const benefits = [
    { icon: "zap", text: "Fast & Reliable" },
    { icon: "shield", text: "Safe & Secure" },
    { icon: "trending-up", text: "Earn More, Stress Less" },
  ];

  return (
    <section className="container bg-primary/10 rounded-3xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-16 py-16 md:py-24">
        {/* Left Side */}
        <div className="space-y-8">
          {/* Heading */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4 text-balance">
              Find the Perfect Genie for your task
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Whether it&apos;s deliveries, cleaning, or repairs, MyGenie has
              got you covered
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-muted flex-shrink-0" />
                <span className="text-muted font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Post your task for free
            </button>
          </div>
        </div>

        {/* Right Side - Floating Icons */}
        <div className="lg:col-span-1 relative h-96 lg:h-full min-h-96">
          <Image
            src={serviceImage}
            alt="Service icons floating"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
