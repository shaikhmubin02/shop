import { useState } from 'react'
import Image from 'next/image'

type ImageId = 'mint' | 'pink' | 'white' | 'yellow' | 'fruit'

export default function InteractiveImages() {
  const [poppedImage, setPoppedImage] = useState<ImageId | null>(null)

  const handleImageClick = (id: ImageId) => {
    setPoppedImage(poppedImage === id ? null : id)
  }

  const getImageStyle = (id: ImageId) => {
    const isPopped = poppedImage === id
    return {
      transform: isPopped ? 'scale(1.1) translateY(-20px)' : 'scale(1) translateY(0)',
      zIndex: isPopped ? 60 : undefined,
    }
  }

  return (
    <div className="relative w-full h-[600px] bg-gray-100">
      {/* Mint green background */}
      <button
        className="absolute top-4 left-4 w-72 h-48 bg-[#a8e6cf] rounded-lg shadow-md z-10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('mint')}
        onClick={() => handleImageClick('mint')}
        aria-pressed={poppedImage === 'mint'}
      >
        <span className="sr-only">Mint green background</span>
      </button>
      
      {/* Pink t-shirt image */}
      <button
        className="absolute top-20 left-20 w-80 h-64 bg-[#ffb3ba] rounded-lg shadow-md z-20 overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('pink')}
        onClick={() => handleImageClick('pink')}
        aria-pressed={poppedImage === 'pink'}
      >
        <Image
          src="/placeholder.svg?height=256&width=320"
          alt="Pink t-shirt with cheese design"
          width={320}
          height={256}
          className="object-cover"
        />
      </button>
      
      {/* White background with stationery */}
      <button
        className="absolute top-8 right-8 w-72 h-48 bg-white rounded-lg shadow-md z-30 p-4 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('white')}
        onClick={() => handleImageClick('white')}
        aria-pressed={poppedImage === 'white'}
      >
        <div className="w-full h-full bg-gray-200"></div>
        <span className="sr-only">White background with stationery</span>
      </button>
      
      {/* Mint green background */}
      <button
        className="absolute bottom-28 left-6 w-72 h-48 bg-[#a8e6cf] rounded-lg shadow-md z-10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('mint')}
        onClick={() => handleImageClick('mint')}
        aria-pressed={poppedImage === 'mint'}
      >
        <span className="sr-only">Mint green background</span>
      </button>

      {/* Yellow background with logo */}
      <button
        className="absolute bottom-8 left-8 w-48 h-48 bg-[#ffe66d] rounded-lg shadow-md z-40 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('yellow')}
        onClick={() => handleImageClick('yellow')}
        aria-pressed={poppedImage === 'yellow'}
      >
        <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">LOGO</span>
        </div>
      </button>
      
      {/* Fruit juice bottles */}
      <button
        className="absolute bottom-4 right-4 w-80 h-56 bg-white rounded-lg shadow-md z-50 p-4 flex justify-between items-end transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('fruit')}
        onClick={() => handleImageClick('fruit')}
        aria-pressed={poppedImage === 'fruit'}
      >
        <div className="w-20 h-40 bg-green-400 rounded"></div>
        <div className="w-20 h-44 bg-yellow-400 rounded"></div>
        <div className="w-20 h-36 bg-red-400 rounded"></div>
        <span className="sr-only">Fruit juice bottles</span>
      </button>
    </div>
  )
}