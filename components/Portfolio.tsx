import BlurFade from "@/components/magicui/blur-fade";

const images = [
  '/gd1.avif',
  '/gd2.avif',
  '/gd3.avif',
  '/gd4.avif',
  '/gd5.avif',
  '/gd6.avif',
  '/i1.avif',
  '/i2.avif',
  '/i3.avif',
  '/i5.avif',
  '/i6.avif',
];

export function Portfolio() {
  return (
    <section id="photos">
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Portfolio image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}