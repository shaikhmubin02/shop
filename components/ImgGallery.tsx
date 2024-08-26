import { Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    image: "/i1.avif",
    label: "Brochure Design",
    color: "bg-orange-400",
    description: "Create stunning brochures that captivate your audience.",
  },
  {
    image: "/i2.avif",
    label: "Book Cover Design",
    color: "bg-black",
    description: "Design book covers that stand out on any shelf.",
  },
  {
    image: "/i3.avif",
    label: "Label Design",
    color: "bg-cyan-400",
    description: "Craft eye-catching labels for products that pop.",
  },
  {
    image: "/i4.avif",
    label: "Logo Design",
    color: "bg-green-400",
    description: "Create memorable logos that represent your brand.",
  },
  {
    image: "/i5.avif",
    label: "Packaging Design",
    color: "bg-purple-400",
    description: "Design packaging that protects and promotes your product.",
  },
  {
    image: "/i6.avif",
    label: "Web Design",
    color: "bg-red-400",
    description: "Build beautiful, responsive websites that engage users.",
  },
];

export default function ImgGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const starVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="overflow-x-auto pb-4 mb-4 scrollbar-hide">
        <div className="flex space-x-6 min-w-max px-4">
          {services.map((service, index) => (
            <div key={index} className="relative w-72 flex-shrink-0 group">
              <img
                src={service.image}
                alt={service.label}
                className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-300 group-hover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="w-full h-64 text-white text text-center px-4 py-2 bg-black bg-opacity-75 rounded-lg">
                  {service.description}
                </p>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className={`${service.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                  {service.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div 
        ref={ref}
        className="mt-12 text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              variants={starVariants}
              transition={{ 
                delay: i * 0.2, 
                duration: 0.8, 
                ease: "easeOut" 
              }}
            >
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </motion.div>
          ))}
        </div>
        <motion.p 
          className="text-gray-600"
          variants={textVariants}
          transition={{ 
            delay: 1.2, 
            duration: 1, 
            ease: "easeOut" 
          }}
        >
          Check out our customer reviews (4.97 / 5 average from 300+ customer ratings)
        </motion.p>
      </motion.div>

      {/* Tailwind CSS custom class for hiding the scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox */
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}</style>
    </div>
  );
}