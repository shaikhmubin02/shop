import { Button } from "@/components/ui/button"
import { DemoVertical } from "./DemoVerticle"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Board() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div ref={ref} className="container mx-auto px-4 py-12 md:py-24">
      <motion.div 
        className="flex flex-col md:flex-row gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
      >
        <div className="flex-1">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            variants={itemVariants}
          >
            Transform Your Vision with Expert Design Services. What are You Waiting for?
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 mb-6"
            variants={itemVariants}
          >
            At Creative Solutions, we offer top-notch graphic design, printing, branding, and digital marketing services to bring your ideas to life. Our dedicated team is here to help you create stunning visuals and effective strategies that will make your brand stand out.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            variants={itemVariants}
          >
            Whether you&apos;re looking to create a striking logo, produce eye-catching print materials, build a strong brand identity, or enhance your digital presence, we offer comprehensive services to meet all your design and marketing needs.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            variants={itemVariants}
          >
            We pride ourselves on our commitment to excellence and personalized approach, working closely with businesses and individuals to craft solutions that drive results and elevate your brand.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Button className="bg-[#8CC63F] hover:bg-[#7AB62F] text-white"><Link href="#services">Start Your Project Today</Link></Button>
            <Button variant="outline" className="border-[#8CC63F] text-[#8CC63F] hover:bg-[#8CC63F] hover:text-white">
              <Link href="#portfolio">Get Creative Solutions</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div 
          className="flex-1 mb-30 -ml-6"
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { 
              opacity: 1, 
              x: 0, 
              transition: { 
                delay: 0.6, 
                duration: 0.5 
              } 
            }
          }}
        >
          <DemoVertical />
        </motion.div>
      </motion.div>
    </div>
  )
}

// style={{
//     ...getImageStyle('bottomCenter'),
//     backgroundImage: 'url(/gd3.avif)', 
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   }}