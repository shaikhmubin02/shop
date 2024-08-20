import { useState } from 'react'
import Image from 'next/image'
import { Camera, Coffee, Headphones, Palette, Book, Plane, Bike, Music } from 'lucide-react'

type ImageId = 'mint' | 'pink' | 'white' | 'yellow' | 'fruit' | 'camera' | 'coffee' | 'headphones' | 'art' | 'book' | 'travel' | 'bike' | 'music'

export default function Component() {
  const [poppedImage, setPoppedImage] = useState<ImageId | null>(null)

  const handleImageClick = (id: ImageId) => {
    setPoppedImage(poppedImage === id ? null : id)
  }

  const getImageStyle = (id: ImageId) => {
    const isPopped = poppedImage === id
    return {
      transform: isPopped ? 'scale(1.1) translateY(-10px)' : 'scale(1) translateY(0)',
      zIndex: isPopped ? 60 : undefined,
    }
  }

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] bg-gray-100 overflow-hidden p-2 sm:p-4">
      {/* Mint green background */}
      <button
        className="absolute top-2 left-2 w-32 h-32 sm:w-48 sm:h-40 md:w-64 md:h-48 lg:w-72 lg:h-56 bg-[#a8e6cf] rounded-lg shadow-md z-10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('mint')}
        onClick={() => handleImageClick('mint')}
        aria-pressed={poppedImage === 'mint'}
      >
        <span className="sr-only">Mint green background</span>
      </button>
      
      {/* Pink t-shirt image */}
      <button
        className="absolute top-16 left-16 sm:top-24 sm:left-32 md:top-32 md:left-48 lg:top-40 lg:left-56 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-64 lg:w-80 lg:h-72 bg-[#ffb3ba] rounded-lg shadow-md z-20 overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('pink')}
        onClick={() => handleImageClick('pink')}
        aria-pressed={poppedImage === 'pink'}
      >
        <Image
          src="/bg3.avif"
          alt="Pink t-shirt with cheese design"
          width={320}
          height={256}
          className="object-cover w-full h-full"
        />
      </button>
      
      {/* White background with stationery */}
      <button
        className="absolute -top-4 right-4 sm:-top-8 sm:right-8 md:-top-12 md:right-12 lg:-top-16 lg:right-16 w-32 h-32 sm:w-48 sm:h-40 md:w-64 md:h-48 lg:w-72 lg:h-56 bg-white rounded-lg shadow-md z-30 p-2 sm:p-4 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('white')}
        onClick={() => handleImageClick('white')}
        aria-pressed={poppedImage === 'white'}
      >
        <div className="w-full h-full bg-gray-200"></div>
        <span className="sr-only">White background with stationery</span>
      </button>
      
      {/* Yellow background with logo */}
      <button
        className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 md:-bottom-12 md:-left-12 lg:-bottom-16 lg:-left-16 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-[#ffe66d] rounded-lg shadow-md z-40 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('yellow')}
        onClick={() => handleImageClick('yellow')}
        aria-pressed={poppedImage === 'yellow'}
      >
        <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold">LOGO</span>
        </div>
      </button>
      
      {/* Fruit juice bottles */}
      <button
        className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 md:-bottom-12 md:-right-12 lg:-bottom-16 lg:-right-16 w-40 h-32 sm:w-56 sm:h-40 md:w-72 md:h-48 lg:w-80 lg:h-64 bg-white rounded-lg shadow-md z-50 p-2 sm:p-4 flex justify-between items-end transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('fruit')}
        onClick={() => handleImageClick('fruit')}
        aria-pressed={poppedImage === 'fruit'}
      >
        <div className="w-8 h-16 sm:w-12 sm:h-24 md:w-16 md:h-32 lg:w-20 lg:h-40 bg-green-400 rounded"></div>
        <div className="w-8 h-20 sm:w-12 sm:h-28 md:w-16 md:h-36 lg:w-20 lg:h-44 bg-yellow-400 rounded"></div>
        <div className="w-8 h-12 sm:w-12 sm:h-20 md:w-16 md:h-28 lg:w-20 lg:h-36 bg-red-400 rounded"></div>
        <span className="sr-only">Fruit juice bottles</span>
      </button>

      {/* Camera icon */}
      <button
        className="absolute top-40 left-4 sm:top-56 sm:left-8 md:top-72 md:left-12 lg:top-80 lg:left-16 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-[#ffd3b6] rounded-full shadow-md z-25 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('camera')}
        onClick={() => handleImageClick('camera')}
        aria-pressed={poppedImage === 'camera'}
      >
        <Camera className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-gray-800" />
        <span className="sr-only">Camera icon</span>
      </button>

      {/* Coffee cup */}
      <button
        className="absolute top-24 right-24 sm:top-32 sm:right-32 md:top-40 md:right-40 lg:top-48 lg:right-48 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 bg-[#dcedc1] rounded-lg shadow-md z-35 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('coffee')}
        onClick={() => handleImageClick('coffee')}
        aria-pressed={poppedImage === 'coffee'}
      >
        <Coffee className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-800" />
        <span className="sr-only">Coffee cup icon</span>
      </button>

      {/* Headphones */}
      <button
        className="absolute bottom-24 left-24 sm:bottom-32 sm:left-32 md:bottom-40 md:left-40 lg:bottom-48 lg:left-48 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-[#a2d2ff] rounded-lg shadow-md z-45 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('headphones')}
        onClick={() => handleImageClick('headphones')}
        aria-pressed={poppedImage === 'headphones'}
      >
        <Headphones className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-gray-800" />
        <span className="sr-only">Headphones icon</span>
      </button>

      {/* Art palette */}
      <button
        className="absolute bottom-16 right-16 sm:bottom-24 sm:right-24 md:bottom-32 md:right-32 lg:bottom-40 lg:right-40 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 bg-[#cdb4db] rounded-full shadow-md z-55 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('art')}
        onClick={() => handleImageClick('art')}
        aria-pressed={poppedImage === 'art'}
      >
        <Palette className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 text-gray-800" />
        <span className="sr-only">Art palette icon</span>
      </button>

      {/* Book icon */}
      <button
        className="absolute top-4 left-40 sm:top-8 sm:left-56 md:top-12 md:left-72 lg:top-16 lg:left-80 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-[#ffafcc] rounded-lg shadow-md z-15 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('book')}
        onClick={() => handleImageClick('book')}
        aria-pressed={poppedImage === 'book'}
      >
        <Book className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-800" />
        <span className="sr-only">Book icon</span>
      </button>

      {/* Travel icon */}
      <button
        className="absolute top-32 right-4 sm:top-40 sm:right-8 md:top-48 md:right-12 lg:top-56 lg:right-16 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-[#bde0fe] rounded-full shadow-md z-25 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('travel')}
        onClick={() => handleImageClick('travel')}
        aria-pressed={poppedImage === 'travel'}
      >
        <Plane className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-gray-800" />
        <span className="sr-only">Travel icon</span>
      </button>

      {/* Bike icon */}
      <button
        className="absolute bottom-4 left-40 sm:bottom-8 sm:left-56 md:bottom-12 md:left-72 lg:bottom-16 lg:left-80 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 bg-[#ffc8dd] rounded-lg shadow-md z-35 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('bike')}
        onClick={() => handleImageClick('bike')}
        aria-pressed={poppedImage === 'bike'}
      >
        <Bike className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 text-gray-800" />
        <span className="sr-only">Bike icon</span>
      </button>

      {/* Music icon */}
      <button
        className="absolute top-56 left-32 sm:top-72 sm:left-40 md:top-80 md:left-48 lg:top-96 lg:left-56 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 bg-[#98f5e1] rounded-full shadow-md z-30 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('music')}
        onClick={() => handleImageClick('music')}
        aria-pressed={poppedImage === 'music'}
      >
        <Music className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 text-gray-800" />
        <span className="sr-only">Music icon</span>
      </button>
    </div>
  )
}