'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function DigitalMarketingForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    toast({
      title: "Online Presence Form submitted",
      description: "We've received your information and will be in touch soon about boosting your online presence.",
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-3 mb-3">
      <CardHeader>
        <CardTitle>Boost Your Online Presence</CardTitle>
        <CardDescription>Let us help you enhance your digital marketing strategy.</CardDescription>
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
              <Label htmlFor="website">Website</Label>
              <Input id="website" name="website" placeholder="Your website URL" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="social">Primary Social Media Platform</Label>
              <Select name="social">
                <SelectTrigger>
                  <SelectValue placeholder="Select a platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Services Interested In</Label>
              <RadioGroup defaultValue="seo">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="seo" id="seo" />
                  <Label htmlFor="seo">SEO Optimization</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ppc" id="ppc" />
                  <Label htmlFor="ppc">PPC Advertising</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="social" id="social" />
                  <Label htmlFor="social">Social Media Management</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="content" id="content" />
                  <Label htmlFor="content">Content Marketing</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="goals">Marketing Goals</Label>
              <Textarea id="goals" name="goals" placeholder="Describe your digital marketing goals" />
            </div>
          </div>
          <CardFooter className="flex justify-between mt-4 px-0">
            <Button type="submit">Submit</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}