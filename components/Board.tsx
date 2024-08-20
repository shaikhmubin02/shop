import { Button } from "@/components/ui/button"
import InteractiveImages from "./InteractiveImages"

export default function Board() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Transform Your Vision with Expert Design Services. What are You Waiting for?
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            At Creative Solutions, we offer top-notch graphic design, printing, branding, and digital marketing services to bring your ideas to life. Our dedicated team is here to help you create stunning visuals and effective strategies that will make your brand stand out.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Whether you&apos;re looking to create a striking logo, produce eye-catching print materials, build a strong brand identity, or enhance your digital presence, we offer comprehensive services to meet all your design and marketing needs.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We pride ourselves on our commitment to excellence and personalized approach, working closely with businesses and individuals to craft solutions that drive results and elevate your brand.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#8CC63F] hover:bg-[#7AB62F] text-white">Start Your Project Today</Button>
            <Button variant="outline" className="border-[#8CC63F] text-[#8CC63F] hover:bg-[#8CC63F] hover:text-white">
              Get Creative Solutions
            </Button>
          </div>
        </div>
        <div className="flex-1 mb-30 -ml-6">
          <InteractiveImages />
        </div>
      </div>
    </div>
  )
}

// style={{
//     ...getImageStyle('bottomCenter'),
//     backgroundImage: 'url(/gd3.avif)', 
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   }}