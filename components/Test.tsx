'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PenToolIcon, PrinterIcon, BriefcaseIcon, GlobeIcon, PhoneIcon, MailIcon, MapPinIcon, MoonIcon, SunIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from 'next/link'
import { MobileNav } from './MobileNav'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import TestimonialSlider from "@/components/testimonials-slider";
import Faqs from './faqs'
import { SignedIn, SignInButton, UserButton, SignedOut} from '@clerk/nextjs'
import Image from "next/image";
import Services from './Services'
import InteractiveImages from './InteractiveImages'
import Form from './Form'
import Board from './Board'
import Pricing from './Pricing'
import ImgGallery from './ImgGallery'

const testimonials = [
  {
    quote:"CreativeSolutions transformed our brand identity. Highly recommended!",
    name: "Rose Roberson",
    role: "Tech Co",
    imgSrc: "https://i.pravatar.cc/120?img=1",
  },
  {
    quote:"Their digital marketing strategies doubled our online sales.",
    name: "Chace Rodgers",
    role: "Fashion Inc",
    imgSrc: "https://i.pravatar.cc/120?img=10",
  },
  {
    quote:"The print materials they designed for us are simply stunning.",
    name: "Cornelius Sheppard",
    role: "Local Cafe",
    imgSrc: "https://i.pravatar.cc/120?img=9",
  },
  {
    quote:"CreativeSolutions transformed our brand identity. Highly recommended!",
    name: "Rose Roberson",
    role: "Tech Co",
    imgSrc: "https://i.pravatar.cc/120?img=1",
  },
  {
    quote:"Their digital marketing strategies doubled our online sales.",
    name: "Chace Rodgers",
    role: "Fashion Inc",
    imgSrc: "https://i.pravatar.cc/120?img=10",
  },
  {
    quote:"The print materials they designed for us are simply stunning.",
    name: "Cornelius Sheppard",
    role: "Local Cafe",
    imgSrc: "https://i.pravatar.cc/120?img=9",
  },
];

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
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } }
}

const authorizedEmails = [
  "shaikhmubin572@gmail.com",
  "shaikhmubin5502@gmail.com",
  "thecreativesurat@gmail.com",
];

export default function Test( {email}: {email: string}) {

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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <header className="px-4 lg:px-6 h-14 flex items-center">
      <div  className="flex items-center justify-center p-0 md:hidden ">
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
        <Link className="flex items-center justify-center ml-auto md:ml-0 md:mr-auto" href="#">
          <Image src='/logo.png' alt='logo' width={20} height={20}/>
          <span className="ml-2 font-bold text-lg">Creative</span>
          <span className="text-lg">Solutions</span>
          {/* <span className="mt-1 font-normal text-sm leading-tight italic">Solutions</span> */}
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
        {authorizedEmails.includes(email) && (
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/admin">
            Admin
          </Link>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Link  className="text-sm font-medium hover:underline underline-offset-4" href="#" prefetch={false}>
              Services
            </Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>
              <Link href="/services/graphic-design" className="block px-4 py-2 text-sm hover:bg-muted" prefetch={false}>
                Graphic Design
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services/printing" className="block px-4 py-2 text-sm hover:bg-muted" prefetch={false}>
                Printing
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services/branding" className="block px-4 py-2 text-sm hover:bg-muted" prefetch={false}>
                Branding
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services/digital-marketing" className="block px-4 py-2 text-sm hover:bg-muted" prefetch={false}>
                Digital Marketing
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
        <div className="flex items-center gap-2 lg:gap-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        </div>
      </header>
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
        <Services />
        <Board />
        <ImgGallery />
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >  
            <div className="container px-4 md:px-6">
              <motion.h2 
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-5"
                variants={fadeInUp}
              >
                Our Portfolio
              </motion.h2>
              <motion.p className="mb-8 text-center text-muted-foreground md:text-xl/relaxed">
                Showcasing a collection of our best work to inspire and demonstrate our expertise.
              </motion.p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={`/gd1.avif`}
                    width={300}
                    height={300}
                    alt="gd1"
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={`/gd2.avif`}
                    width={300}
                    height={300}
                    alt="gd2"
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={`/gd3.avif`}
                    width={300}
                    height={300}
                    alt="gd3"
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={`/gd4.avif`}
                    width={300}
                    height={300}
                    alt="gd4"
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={`/gd5.avif`}
                    width={300}
                    height={300}
                    alt="gd5"
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={`/gd6.avif`}
                    width={300}
                    height={300}
                    alt="gd6"
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                {email === "shaikhmubin572@gmail.com" && (
                  <div className="text-center mt-8">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Add Image
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </section>
        <section id='pricing'>
         <Pricing />
        </section>
        <section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          style={{ backgroundImage: "url('/faqbg1.avif')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="container mx-auto px-4 bg-white bg-opacity-70 rounded-lg">
            <Faqs />
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">Contact Us</h2>
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Get in Touch</h3>
                <div>
                  <p className="text-muted-foreground">
                    Have a project in mind?
                  </p>
                  <p className="text-muted-foreground">
                    Fill out the form, and we&apos;ll get back to you as soon as possible.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-4 h-4" />
                    <span>+91 97255 50433</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MailIcon className="w-4 h-4" />
                    <span>thecreativesurat@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="w-4 h-4" />
                    <span>18, Nandanvan Society, Ghod Dod Road, Surat - 395001</span>
                  </div>
                </div>
              </div>
              <div className="relative space-y-4">
                <div className="relative bg-white bg-opacity-75 p-6 rounded-lg shadow-xl">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </section>
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