import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from './ui/card'
import { motion } from 'framer-motion'
import { PenToolIcon, PrinterIcon, BriefcaseIcon, GlobeIcon} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const Services = () => {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6">
      <motion.h2 
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
        {...fadeInUp}
      >
        Our Services
      </motion.h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { href: "/services/graphic-design", icon: PenToolIcon, title: "Graphic Design", description: "Custom designs tailored to your brand's unique identity." },
          { href: "/services/printing", icon: PrinterIcon, title: "Printing", description: "High-quality printing services for all your business needs." },
          { href: "/services/branding", icon: BriefcaseIcon, title: "Branding", description: "Develop a strong, cohesive brand identity that stands out." },
          { href: "/services/digital-marketing", icon: GlobeIcon, title: "Digital Marketing", description: "Boost your online presence and reach your target audience." }
        ].map((service, index) => (
          <motion.div
            key={service.href}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={service.href} passHref>
              <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="flex flex-col items-center space-y-2 p-4">
                  <service.icon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Services