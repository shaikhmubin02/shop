import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from 'next/image';

const reviews = [
  {
    img: "/i1.avif",
  },
  {
    img: "/i2.avif",
  },
  {
    img: "/i3.avif",
  },
  {
    img: "/i5.avif",
  },
  {
    img: "/i6.avif",
  },
  {
    img: "/i7.avif",
  },
  {
    img: "/i8.avif",
  },
  {
    img: "/i9.avif",
  },
  {
    img: "/i10.avif",
  },
  {
    img: "/i11.avif",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl border-2 p-4",
        // Mobile styles
        "h-48 w-44",
        // Desktop styles (md and up)
        "md:h-60 md:w-56",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <Image 
        className="h-full w-full object-cover rounded-lg" 
        alt="" 
        src={img} 
        width={224} 
        height={240}
      />
    </figure>
  );
};

export function DemoVertical() {
  return (
    <div className="relative flex h-[400px] md:h-[600px] w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background shadow-md md:shadow-xl ml-3 md:ml-0">
      <Marquee pauseOnHover vertical className="[--duration:30s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={`first-${index}`} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:30s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={`second-${index}`} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 md:h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 md:h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}