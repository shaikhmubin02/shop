'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"

export default function GraphicDesignForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    toast({
      title: "Design Consultation Form submitted",
      description: "We've received your request and will contact you to schedule a consultation.",
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-3 mb-3">
      <CardHeader>
        <CardTitle>Request a Design Consultation</CardTitle>
        <CardDescription>Fill out this form to schedule a consultation with our design experts.</CardDescription>
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
              <Label htmlFor="company">Company Name (if applicable)</Label>
              <Input id="company" name="company" placeholder="Your company name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="project-type">Project Type</Label>
              <Select name="project-type">
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="logo">Logo Design</SelectItem>
                  <SelectItem value="branding">Brand Identity</SelectItem>
                  <SelectItem value="web">Website Design</SelectItem>
                  <SelectItem value="print">Print Design</SelectItem>
                  <SelectItem value="packaging">Packaging Design</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="budget">Estimated Budget</Label>
              <Select name="budget">
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">$500 - $1,000</SelectItem>
                  <SelectItem value="medium">$1,000 - $5,000</SelectItem>
                  <SelectItem value="high">$5,000 - $10,000</SelectItem>
                  <SelectItem value="enterprise">$10,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="timeline">Project Timeline</Label>
              <Select name="timeline">
                <SelectTrigger>
                  <SelectValue placeholder="Select project timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                  <SelectItem value="standard">Standard (2-4 weeks)</SelectItem>
                  <SelectItem value="flexible">Flexible (1-2 months)</SelectItem>
                  <SelectItem value="longterm">Long-term (3+ months)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="project-details">Project Details</Label>
              <Textarea id="project-details" name="project-details" placeholder="Describe your project and design needs" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">I agree to the terms and conditions</Label>
            </div>
          </div>
          <CardFooter className="flex justify-between mt-4 px-0">
            <Button type="submit">Request Consultation</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}