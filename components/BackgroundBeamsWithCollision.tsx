import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollusionDemo";
import TypingAnimation from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/magicui/cool-mode";
import Link from "next/link";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="text-center ">
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-black dark:text-white font-sans tracking-tight mb-6">
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <TypingAnimation
                  className="bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] text-transparent text-3xl md:text-6xl bg-clip-text"
                  text="Creative Solutions"
                />
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <TypingAnimation
                  className="bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] text-transparent text-3xl md:text-6xl bg-clip-text"
                  text="Creative Solutions"
                />
            </div>
          </div>
        </h2>
        <p className="mt-4 text-xl md:text-2xl text-black dark:text-white mb-10">
          Your one-stop shop for graphic design, printing, branding, and digital marketing solutions.
        </p>
        <div className="mt-4 text-xl md:text-2xl text-black dark:text-white mb-30">
          <CoolMode
            options={{
            particle:
              "https://img.freepik.com/free-vector/creative-rounded-lines-edge-place-text-business-brochure-banner-poster-template-background_1142-15381.jpg?uid=R141203694&ga=GA1.1.175990301.1723935834&semt=ais_hybrid",
            }}
          >
            <Button asChild><Link href="#services">Get Started</Link></Button>
          </CoolMode>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}