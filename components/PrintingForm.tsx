'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function PrintingForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    toast({
      title: "Printing Quote Form submitted",
      description: "We've received your request and will provide a quote soon.",
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-3 mb-3">
      <CardHeader>
        <CardTitle>Get a Printing Quote</CardTitle>
        <CardDescription>Fill out this form to receive a custom quote for your printing needs.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="Your email" type="email" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" placeholder="Your phone number" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="project-type">Project Type</Label>
              <Select name="project-type">
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business-cards">Business Cards</SelectItem>
                  <SelectItem value="flyers">Flyers</SelectItem>
                  <SelectItem value="brochures">Brochures</SelectItem>
                  <SelectItem value="posters">Posters</SelectItem>
                  <SelectItem value="banners">Banners</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" name="quantity" type="number" placeholder="Number of items" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="size">Size</Label>
              <Input id="size" name="size" placeholder="e.g., 8.5x11 inches" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="paper-type">Paper Type</Label>
              <Select name="paper-type">
                <SelectTrigger>
                  <SelectValue placeholder="Select paper type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="matte">Matte</SelectItem>
                  <SelectItem value="glossy">Glossy</SelectItem>
                  <SelectItem value="recycled">Recycled</SelectItem>
                  <SelectItem value="cardstock">Cardstock</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="additional-info">Additional Information</Label>
              <Textarea id="additional-info" name="additional-info" placeholder="Any special requirements or details" />
            </div>
          </div>
          <CardFooter className="flex justify-between mt-4 px-0">
            <Button type="submit">Request Quote</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}