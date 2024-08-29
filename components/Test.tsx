'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { PenToolIcon, PrinterIcon, BriefcaseIcon, GlobeIcon, PhoneIcon, MailIcon, MapPinIcon, MoonIcon, SunIcon, ChevronLeftIcon, ChevronRightIcon, Loader2 } from "lucide-react"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MobileNav } from './MobileNav'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Faqs from './faqs'
import { SignedIn, SignInButton, UserButton, SignedOut} from '@clerk/nextjs'
import Image from "next/image";
import Services from './Services'
import Form from './Form'
import Board from './Board'
import Pricing from './Pricing'
import ImgGallery from './ImgGallery'
import { BackgroundBeamsWithCollisionDemo } from './BackgroundBeamsWithCollision'
import { Portfolio } from './Portfolio'
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import { useTheme } from "next-themes";
import TestimonialSlider from './testimonials-slider'
import Modal from './Modal'
import { testimonials } from '@/data/testimonials'
import { Magiclogo } from './Magiclogo'
import { BentoGridThirdDemo } from './Bentogrid'

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

  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [loading, setLoading] = useState({
    services: true,
    portfolio: true,
    testimonials: true,
    adminLink: true,
  });

  useEffect(() => {
    // Simulate loading times
    setTimeout(() => setLoading(prev => ({ ...prev, services: false })), 1000);
    setTimeout(() => setLoading(prev => ({ ...prev, portfolio: false })), 1500);
    setTimeout(() => setLoading(prev => ({ ...prev, testimonials: false })), 2000);
    // Simulate admin link authorization check
    setTimeout(() => setLoading(prev => ({ ...prev, adminLink: false })), 800);
  }, []);

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
          <Magiclogo />
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
        {loading.adminLink ? (
          <div className="flex items-center">
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            <span className="text-sm font-medium">Checking access...</span>
          </div>
        ) : authorizedEmails.includes(email) && (
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
        <BackgroundBeamsWithCollisionDemo />
        {loading.services ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          <Services />
        )}
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
              {loading.portfolio ? (
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              ) : (
                <Portfolio />
              )}
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
          </motion.div>
        </section>
        <section id='pricing'>
         <Pricing />
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
          <BentoGridThirdDemo />
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground tracking-tighter font-bold sm:text-4xl md:text-xl text-center mb-4">Hear from our satisfied customers about their experience working with us.</p>
            {loading.testimonials ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : (
              <TestimonialSlider testimonials={testimonials} />
            )}
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-background">
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            className={`absolute inset-0 h-full w-full ${
              theme === 'dark' 
                ? 'fill-white/[0.03] stroke-white/[0.2]' 
                : 'fill-black/[0.2] stroke-black/[0.2]'
            }`}
            squares={[
              [0, 2],
              [2, 4],
              [2, 1],
              [4, 3],
              [6, 1],
              [8, 3],
              [8, 6],
              [6, 8],
              [3, 7],
              [1, 8],
            ]}
          />
          <div className="container px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">Contact Us</h2>
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Get in Touch</h3>
                <div>
                  <p className="text-black">
                    Have a project in mind?
                  </p>
                  <p className="text-blac">
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
                <div className={`relative p-6 rounded-lg shadow-xl ${
                  theme === 'dark' 
                    ? 'bg-white/10 backdrop-blur-sm' 
                    : 'bg-black/10 backdrop-blur-sm'
                }`}>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </section>
      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2 sm:flex-row items-center">
            <p className="text-xs text-muted-foreground">© 2024 CreativeSolutions. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <button onClick={() => setIsTermsOpen(true)} className="text-xs hover:underline underline-offset-4">
                Terms of Service
              </button>
              <button onClick={() => setIsPrivacyOpen(true)} className="text-xs hover:underline underline-offset-4">
                Privacy Policy
              </button>
            </nav>
          </div>
        </div>
      </footer>

      <Modal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} title="Terms of Service">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using CreativeSolutions&apos; services, you agree to be bound by these Terms of Service.</p>

        <h2>2. Description of Service</h2>
        <p>CreativeSolutions provides graphic design, printing, branding, and digital marketing services.</p>

        <h2>3. User Responsibilities</h2>
        <p>Users are responsible for providing accurate information and maintaining the confidentiality of their account. You agree not to use our services for any unlawful purposes or in any way that could damage, disable, overburden, or impair our servers or networks.</p>

        <h2>4. Intellectual Property</h2>
        <p>All content and designs created by CreativeSolutions remain the property of CreativeSolutions until full payment is received. Upon full payment, the agreed-upon rights will be transferred to the client as specified in the project contract.</p>

        <h2>5. Limitation of Liability</h2>
        <p>CreativeSolutions is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability for any claim arising from our services shall not exceed the total amount paid by you for the specific service giving rise to such claim.</p>

        <h2>6. Modifications to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the modified terms. We will make reasonable efforts to notify users of significant changes.</p>

        <h2>7. Termination of Services</h2>
        <p>We reserve the right to terminate or suspend your access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.</p>

        <h2>8. Governing Law</h2>
        <p>These terms are governed by the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Surat, Gujarat.</p>

        <h2>9. Contact Information</h2>
        <p>If you have any questions about these Terms of Service, please contact us at thecreativesurat@gmail.com.</p>
      </Modal>
      <Modal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} title="Privacy Policy">
        <h2>1. Information Collection</h2>
        <p>We collect personal information that you provide to us, such as your name, email address, and phone number when you use our services. We may also collect information about your use of our services and website.</p>

        <h2>2. Use of Information</h2>
        <p>We use the collected information to provide and improve our services, communicate with you, and send you marketing materials (if you opt-in). We may also use your information for internal purposes such as auditing, data analysis, and research.</p>

        <h2>3. Data Protection</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2>4. Third-Party Disclosure</h2>
        <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide users with advance notice. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>

        <h2>5. Cookies</h2>
        <p>We use cookies to enhance your experience on our website. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. If you disable cookies, some features may be disabled, but this will not affect your user experience significantly.</p>

        <h2>6. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at thecreativesurat@gmail.com.</p>

        <h2>7. Data Retention</h2>
        <p>We will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>

        <h2>8. Children&apos;s Privacy</h2>
        <p>Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us.</p>

        <h2>9. Changes to Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;last updated&quot; date at the top of this policy.</p>

        <h2>10. Contact Information</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at thecreativesurat@gmail.com.</p>
      </Modal>
    </div>
  );
}