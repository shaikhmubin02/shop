'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PenToolIcon, LayersIcon, EyeIcon, PaletteIcon, ImageIcon, TypeIcon } from "lucide-react"
import Link from 'next/link'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
}

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const services = [
  { icon: PenToolIcon, title: "Custom Illustrations", description: "Unique, hand-crafted illustrations tailored to your brand and message." },
  { icon: LayersIcon, title: "Print & Digital Design", description: "Cohesive designs that work seamlessly across both print and digital mediums." },
  { icon: EyeIcon, title: "User Interface Design", description: "Intuitive and visually appealing interfaces for websites and applications." },
  { icon: PaletteIcon, title: "Brand Identity Design", description: "Comprehensive visual identity systems that define and distinguish your brand." },
  { icon: ImageIcon, title: "Infographic Design", description: "Visually engaging infographics that simplify complex information." },
  { icon: TypeIcon, title: "Typography", description: "Custom typefaces and lettering to enhance your brand's visual language." }
]

export default function GraphicDesignPage() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-12"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h1 
        className="text-4xl font-bold mb-8"
        variants={fadeInUp}
      >
        <Link href="/" prefetch={false}>
          <ChevronLeftIcon className="w-4 h-4 mr-1" />
        </Link>
        Graphic Design Services
      </motion.h1>
      <motion.p 
        className="text-xl mb-8 text-muted-foreground"
        variants={fadeInUp}
      >
        Our graphic design services bring your ideas to life with stunning visuals that capture your brand&apos;s essence.
        From logos to marketing materials, we create designs that leave a lasting impression.
      </motion.p>
      <motion.div 
        className="grid md:grid-cols-2 gap-6 mb-12"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.href}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
          <motion.div key={service.title} variants={fadeInUp}>
            <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <service.icon className="mr-2 h-6 w-6" /> {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {service.description}
              </CardContent>
            </Card>
          </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        className="text-center"
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-bold mb-4">Our Design Process</h2>
        <motion.ol 
          className="list-decimal list-inside text-left max-w-2xl mx-auto mb-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            "Consultation and brief development",
            "Research and concept creation",
            "Initial design presentations",
            "Revisions and refinement",
            "Final approval and delivery",
            "Post-project support and guidance"
          ].map((step, index) => (
            <motion.li 
              key={index} 
              className="mb-2"
              variants={fadeInUp}
            >
              {step}
            </motion.li>
          ))}
        </motion.ol>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button size="lg">Request a Design Consultation</Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}