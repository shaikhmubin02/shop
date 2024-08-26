import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

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
        "relative h-60 w-56 cursor-pointer overflow-hidden rounded-xl border-2 p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <img className="h-full w-full object-cover rounded-lg" alt="" src={img} />
    </figure>
  );
};

export function DemoVertical() {
  return (
    <div className="relative flex h-[600px] w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}