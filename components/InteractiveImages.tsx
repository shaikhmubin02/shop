import { useState } from 'react'
import Image from 'next/image'
import { Camera, Coffee, Headphones, Palette, Book, Plane, Bike, Music } from 'lucide-react'

type ImageId = 'mint' | 'pink' | 'white' | 'yellow' | 'fruit' | 'camera' | 'coffee' | 'headphones' | 'art' | 'book' | 'travel' | 'bike' | 'music'

export default function Component() {
  const [poppedImage, setPoppedImage] = useState<ImageId | null>(null)

  const handleImageHover = (id: ImageId) => {
    setPoppedImage(id)
  }

  const handleImageLeave = () => {
    setPoppedImage(null)
  }

  const getImageStyle = (id: ImageId) => {
    const isPopped = poppedImage === id
    return {
      transform: isPopped ? 'scale(1.1) translateY(-10px)' : 'scale(1) translateY(0)',
      zIndex: isPopped ? 60 : undefined,
      opacity: 1,
    }
  }

  return (
    <div className="relative w-full h-[500px] sm:h-[400px] md:h-[600px] lg:h-[700px] bg-white overflow-hidden p-2 sm:p-4">
      {/* Mint green background */}
      <button
        className="absolute top-0 left-0 w-40 h-40 sm:w-56 sm:h-48 md:w-72 md:h-56 lg:w-80 lg:h-64 bg-[#a8e6cf] rounded-lg shadow-md z-10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={{
          ...getImageStyle('mint'),
          backgroundImage: 'url(/i1.avif)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => handleImageHover('mint')}
        onMouseLeave={handleImageLeave}
        aria-pressed={poppedImage === 'mint'}
      >
        <span className="sr-only">Mint green background</span>
      </button>
      
      {/* Pink t-shirt image */}
      <button
        className="absolute top-20 left-20 sm:top-32 sm:left-40 md:top-40 md:left-56 lg:top-48 lg:left-64 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-64 lg:w-80 lg:h-72 bg-[#ffb3ba] rounded-lg shadow-md z-20 overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={getImageStyle('pink')}
        onMouseEnter={() => handleImageHover('pink')}
        onMouseLeave={handleImageLeave}
        aria-pressed={poppedImage === 'pink'}
      >
        <Image
          src="/i2.avif"
          alt="Pink t-shirt with cheese design"
          width={320}
          height={256}
          className="object-cover w-full h-full"
        />
      </button>
      
      {/* White background with stationery */}
      <button
        className="absolute -top-6 right-0 sm:-top-10 sm:right-0 md:-top-14 md:right-0 lg:-top-18 lg:right-0 w-40 h-40 sm:w-56 sm:h-48 md:w-72 md:h-56 lg:w-80 lg:h-64 bg-white rounded-lg shadow-md z-30 p-2 sm:p-4 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={{
          ...getImageStyle('white'),
          backgroundImage: 'url(/i3.avif)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => handleImageHover('white')}
        onMouseLeave={handleImageLeave}
        aria-pressed={poppedImage === 'white'}
      >
        <div className="w-full h-full" style={{
          backgroundImage: 'url(/gd4.avif)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <span className="sr-only">White background with stationery</span>
      </button>
      
      {/* Yellow background with logo */}
      <button
        className="absolute bottom-0 left-0 sm:-bottom-10 sm:-left-10 md:-bottom-14 md:-left-14 lg:-bottom-30 lg:-left-30 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#ffe66d] rounded-lg shadow-md z-40 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={{
          ...getImageStyle('yellow'),
          backgroundImage: 'url(/i3.avif)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => handleImageHover('yellow')}
        onMouseLeave={handleImageLeave}
        aria-pressed={poppedImage === 'yellow'}
      >
      </button>
      
      {/* Fruit juice bottles */}
      <button
        className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 md:-bottom-14 md:-right-14 lg:-bottom-18 lg:-right-18 w-40 h-32 sm:w-56 sm:h-48 md:w-72 md:h-56 lg:w-80 lg:h-64 bg-white rounded-lg shadow-md z-50 p-2 sm:p-4 flex justify-between items-end transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={{
          ...getImageStyle('fruit'),
          backgroundImage: 'url(/i5.avif)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => handleImageHover('fruit')}
        onMouseLeave={handleImageLeave}
        aria-pressed={poppedImage === 'fruit'}
      >
        <span className="sr-only">Fruit juice bottles</span>
      </button>

      {/* Camera icon */}
      <button
        className="absolute top-48 left-0 sm:top-64 sm:left-0 md:top-80 md:left-0 lg:top-88 lg:left-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-[#ffd3b6] rounded-full shadow-md z-25 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={{
          ...getImageStyle('camera'),
          backgroundImage: 'url(/i6.avif)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => handleImageHover('camera')}
        onMouseLeave={handleImageLeave}
        aria-pressed={poppedImage === 'camera'}
      >
        <span className="sr-only">Camera icon</span>
      </button>

      {/* Coffee cup */}
      <button
        className="absolute top-32 right-32 sm:top-40 sm:right-40 md:top-48 md:right-48 lg:top-56 lg:right-56 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 bg-[#dcedc1] rounded-lg shadow-md z-35 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={{
          ...getImageStyle('coffee'),
          backgroundImage: 'url(/i7.avif)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => handleImageHover('coffee')}
        onMouseLeave={handleImageLeave}
        aria-pressed={poppedImage === 'coffee'}
      >
        <span className="sr-only">Coffee cup icon</span>
      </button>

      {/* Headphones */}
      <button
        className="absolute bottom-32 left-24 sm:bottom-40 sm:left-40 md:bottom-48 md:left-48 lg:bottom-48 lg:left-44 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-[#a2d2ff] rounded-lg shadow-md z-45 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={{
          ...getImageStyle('headphones'),
          backgroundImage: 'url(/i8.avif)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => handleImageHover('headphones')}
        onMouseLeave={handleImageLeave}
        aria-pressed={poppedImage === 'headphones'}
      >
      </button>

      {/* Art palette */}
      <button
        className="absolute bottom-20 right-20 sm:bottom-32 sm:right-32 md:bottom-40 md:right-40 lg:bottom-48 lg:right-48 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 bg-[#cdb4db] rounded-full shadow-md z-55 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={{
          ...getImageStyle('art'),
          backgroundImage: 'url(/i3.avif)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => handleImageHover('art')}
        onMouseLeave={handleImageLeave}
        aria-pressed={poppedImage === 'art'}
      >
      </button>

      {/* Book icon */}
      <button
        className="absolute top-0 left-48 sm:top-0 sm:left-64 md:top-0 md:left-80 lg:top-0 lg:left-88 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-[#ffafcc] rounded-lg shadow-md z-15 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={{
          ...getImageStyle('book'),
          backgroundImage: 'url(/gd5.avif)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => handleImageHover('book')}
        onMouseLeave={handleImageLeave}
        aria-pressed={poppedImage === 'book'}
      >
      </button>

      {/* Travel icon */}
      <button
        className="absolute top-40 right-0 sm:top-48 sm:right-0 md:top-56 md:right-0 lg:top-66 lg:right-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-[#bde0fe] rounded-full shadow-md z-25 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={{
          ...getImageStyle('travel'),
          backgroundImage: 'url(/i9.avif)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => handleImageHover('travel')}
        onMouseLeave={handleImageLeave}
        aria-pressed={poppedImage === 'travel'}
      >
      </button>

      {/* Bike icon */}
      <button
        className="absolute bottom-0 left-48 sm:bottom-0 sm:left-64 md:bottom-0 md:left-80 lg:bottom-0 lg:left-88 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 bg-[#ffc8dd] rounded-lg shadow-md z-35 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={{
          ...getImageStyle('bike'),
          backgroundImage: 'url(/i10.avif)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => handleImageHover('bike')}
        onMouseLeave={handleImageLeave}
        aria-pressed={poppedImage === 'bike'}
      >
      </button>

      {/* Music icon */}
      <button
        className="absolute top-64 left-40 sm:top-80 sm:left-48 md:top-88 md:left-56 lg:top-104 lg:left-66 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 bg-[#98f5e1] rounded-full shadow-md z-30 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={{
          ...getImageStyle('music'),
          backgroundImage: 'url(/i11.avif)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => handleImageHover('music')}
        onMouseLeave={handleImageLeave}
        aria-pressed={poppedImage === 'music'}
      >
      </button>
    </div>
  )
}