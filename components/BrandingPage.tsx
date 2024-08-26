'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseIcon, PenToolIcon, MessageCircleIcon, TargetIcon, UsersIcon, TrendingUpIcon } from "lucide-react"
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

export default function BrandingPage() {
  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden"
      variants={backgroundVariants}
      animate="animate"
      style={{
        background: 'linear-gradient(45deg, #f3f4f6, #e5e7eb, #d1d5db, #fca5a5, #f87171)',
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
          Branding Services
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 text-muted-foreground"
          variants={fadeInUp}
        >
          Our branding services help you create a strong, cohesive identity that resonates with your audience.
          We develop comprehensive brand strategies that set you apart in the market.
        </motion.p>
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            { icon: BriefcaseIcon, title: "Brand Strategy", description: "Develop a clear brand positioning and strategy that aligns with your business goals." },
            { icon: PenToolIcon, title: "Visual Identity", description: "Create a distinctive visual language including logos, color palettes, and typography." },
            { icon: MessageCircleIcon, title: "Brand Voice", description: "Craft a unique tone of voice that communicates your brand's personality consistently." },
            { icon: TargetIcon, title: "Brand Guidelines", description: "Develop comprehensive guidelines to ensure consistent brand application across all touchpoints." },
            { icon: UsersIcon, title: "Brand Experience", description: "Design cohesive brand experiences across all customer touchpoints." },
            { icon: TrendingUpIcon, title: "Brand Evolution", description: "Guide your brand's growth and adaptation to changing market conditions." }
          ].map((service, index) => (
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
          <h2 className="text-2xl font-bold mb-4 dark:text-black">Our Branding Process</h2>
          <motion.ol 
            className="list-decimal list-inside text-left max-w-2xl mx-auto mb-8 dark:text-black"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <li className="mb-2">Discovery and research</li>
            <li className="mb-2">Brand strategy development</li>
            <li className="mb-2">Visual identity creation</li>
            <li className="mb-2">Brand voice and messaging</li>
            <li className="mb-2">Brand guidelines and assets</li>
            <li>Implementation and brand management</li>
          </motion.ol>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
          <Link href="/services/branding/form" prefetch={false}>
            <Button size="lg">Start Your Branding Journey</Button>
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