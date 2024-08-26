'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GlobeIcon, SearchIcon, BarChartIcon, UsersIcon, MailIcon, CameraIcon } from "lucide-react"
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
  { icon: SearchIcon, title: "Search Engine Optimization (SEO)", description: "Improve your website's visibility in search engine results and drive organic traffic." },
  { icon: UsersIcon, title: "Social Media Marketing", description: "Engage your audience and build brand awareness through strategic social media campaigns." },
  { icon: GlobeIcon, title: "Content Marketing", description: "Create and distribute valuable, relevant content to attract and retain a clearly defined audience." },
  { icon: BarChartIcon, title: "Analytics & Reporting", description: "Track and analyze your digital marketing performance to continually improve results." },
  { icon: MailIcon, title: "Email Marketing", description: "Design and execute effective email campaigns to nurture leads and retain customers." },
  { icon: CameraIcon, title: "Video Marketing", description: "Produce and distribute engaging video content to boost brand awareness and conversions." }
]

const backgroundVariants = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 100%'],
    transition: {
      duration: 15,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}

export default function DigitalMarketingPage() {
  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden"
      variants={backgroundVariants}
      animate="animate"
      style={{
        background: 'linear-gradient(45deg, #f3f4f6, #e5e7eb, #d1d5db, #60a5fa, #3b82f6)',
        backgroundSize: '400% 400%'
      }}
    >
      <motion.div 
        className="container mx-auto px-4 py-12 relative z-10"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Link href="/" prefetch={false}>
          <ChevronLeftIcon className="w-4 h-4 mr-1 dark:text-black" />
        </Link>
        <motion.h1 
          className="text-4xl font-bold mb-8 dark:text-black"
          variants={fadeInUp}
        >
          Digital Marketing Services
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 text-muted-foreground"
          variants={fadeInUp}
        >
          Our digital marketing services help you reach and engage your target audience online.
          We develop strategies that increase your visibility, drive traffic, and convert leads into customers.
        </motion.p>
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
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
          ))}
        </motion.div>
        <motion.div 
          className="text-center"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-4 dark:text-black">Our Digital Marketing Approach</h2>
          <motion.ol 
            className="list-decimal list-inside text-left max-w-2xl mx-auto mb-8 dark:text-black"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              "Audience and competitor analysis",
              "Strategy development",
              "Content creation and optimization",
              "Campaign execution",
              "Performance monitoring and optimization",
              "Reporting and strategy refinement"
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
          <Link href="/services/digital-marketing/form" prefetch={false}>
            <Button size="lg">Boost Your Online Presence</Button>
          </Link>
          </motion.div>
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