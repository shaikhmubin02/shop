import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useEffect, useRef } from "react"

export default function Testimonials() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const scrollSpeed = 1 // Adjust the speed here

    function startScrolling() {
      container.scrollLeft += scrollSpeed
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0
      }
      requestAnimationFrame(startScrolling)
    }

    startScrolling()
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our satisfied customers about their experience working with us.
          </p>
        </div>
        <div ref={containerRef} className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-6 px-4 md:px-6">
            {/* Cards */}
            <Card className="flex-shrink-0 snap-center p-6 space-y-4 w-[300px]">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-sm text-muted-foreground">CEO, Acme Inc.</p>
                </div>
              </div>
              <blockquote className="text-lg font-semibold leading-snug">
                "The team at this company has been incredible to work with. They are responsive, knowledgeable, and truly care about our success."
              </blockquote>
            </Card>
            <Card className="flex-shrink-0 snap-center p-6 space-y-4 w-[300px]">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">Jane Appleseed</p>
                  <p className="text-sm text-muted-foreground">Product Manager, Acme Inc.</p>
                </div>
              </div>
              <blockquote className="text-lg font-semibold leading-snug">
                "I've been working with this company for years and they have consistently delivered high-quality work. I highly recommend them."
              </blockquote>
            </Card>
            {/* Repeat other cards */}
          </div>
        </div>
      </div>
    </section>
  )
}
