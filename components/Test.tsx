'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PenToolIcon, PrinterIcon, BriefcaseIcon, GlobeIcon, PhoneIcon, MailIcon, MapPinIcon, MoonIcon, SunIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from 'next/link'
import Image from 'next/image'
import { MobileNav } from './MobileNav'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } }
}

export default function Test() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const testimonials = [
    { name: "John Doe", company: "Tech Co", text: "CreativeSolutions transformed our brand identity. Highly recommended!" },
    { name: "Jane Smith", company: "Fashion Inc", text: "Their digital marketing strategies doubled our online sales." },
    { name: "Mike Johnson", company: "Local Cafe", text: "The print materials they designed for us are simply stunning." },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center ml-auto md:ml-0 md:mr-auto" href="#">
          <PenToolIcon className="h-6 w-6" />
          <span className="ml-2 font-bold">CreativeSolutions</span>
        </Link>
  
        {/* Mobile View: Dark Mode Icon and MobileNav */}
        <div className="flex items-center md:hidden ml-auto">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          <span className="sr-only">Toggle dark mode</span>
        </Button>
          <MobileNav />
        </div>
  
       {/* Dektop View: Navigation Links */}
       <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
         <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
          Services
         </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#portfolio">
          Portfolio
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
          Pricing
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
          Contact
        </Link>
      </nav>
      {/* Desktop View: Dark Mode Icon */}
        <div className="hidden md:flex">
        <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="ml-4">
        {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        <span className="sr-only">Toggle dark mode</span>
        </Button>
        </div>
      </header>
      <main className="flex-1">
      <motion.section 
          className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <video 
            className="absolute inset-0 w-full h-full object-cover z-0 border-none"
            src="/videos/herovideo.mp4" 
            autoPlay
            muted 
            loop 
          />
          <div className="relative z-10">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <motion.div className="space-y-2" variants={fadeInUp}>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    <span className="text-black">Welcome to </span>
                    <span className="text-black">Creative</span>
                    <span className="text-black">Solutions</span> 
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-black">
                    Your one-stop shop for graphic design, printing, branding, and digital marketing solutions.
                  </p>
                </motion.div>
                <motion.div className="space-x-4" variants={fadeInUp}>
                  <Button asChild>
                    <Link href="#services">Get Started</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#about">Learn More</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
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
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Portfolio</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg`}
                    width={300}
                    height={300}
                    alt={`Portfolio item ${item}`}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">What Our Clients Say</h2>
            <div className="relative max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg mb-4">{testimonials[currentTestimonial].text}</p>
                  <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].company}</p>
                </CardContent>
              </Card>
              <Button variant="outline" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" onClick={prevTestimonial}>
                <ChevronLeftIcon className="h-4 w-4" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button variant="outline" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" onClick={nextTestimonial}>
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Pricing Plans</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {['Basic', 'Pro', 'Enterprise'].map((plan) => (
                <Card key={plan}>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{plan}</h3>
                    <p className="text-4xl font-bold mb-4">
                      ${plan === 'Basic' ? '99' : plan === 'Pro' ? '199' : '299'}
                      <span className="text-sm font-normal text-muted-foreground">/month</span>
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li>Feature 1</li>
                      <li>Feature 2</li>
                      <li>Feature 3</li>
                      {plan !== 'Basic' && <li>Feature 4</li>}
                      {plan === 'Enterprise' && <li>Feature 5</li>}
                    </ul>
                    <Button className="w-full">Choose Plan</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>What services do you offer?</AccordionTrigger>
                <AccordionContent>
                  We offer a wide range of services including graphic design, printing, branding, and digital marketing solutions tailored to your business needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does a typical project take?</AccordionTrigger>
                <AccordionContent>
                  Project timelines vary depending on the scope and complexity. We work closely with our clients to establish realistic deadlines and deliver high-quality results.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer package deals?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer various package deals that combine our services for better value. Please contact us for more information on our current packages.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Contact Us</h2>
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Get in Touch</h3>
                <p className="text-muted-foreground">
                  Have a project in mind? Fill out the form, and we&apos;ll get back to you as soon as possible.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-4 h-4" />
                    <span>+91 12345 54321</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MailIcon className="w-4 h-4" />
                    <span>info@CreativeSolutions.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="w-4 h-4" />
                    <span>123 Creative St, Design City, 12345</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 CreativeSolutions. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}