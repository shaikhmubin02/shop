import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import Image from "next/image";

export function Magiclogo() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center">
      <AnimatedGradientText>
        <Image src='/logo.png' alt='logo' width={18} height={18}/>
        <span
          className={cn(
            `ml-1 inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Creative Solutions
        </span>
      </AnimatedGradientText>
    </div>
  );
}