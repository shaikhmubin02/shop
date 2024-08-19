'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

export default function DigitalMarketingForm() {
  const [state, handleSubmit] = useForm("xanwddkb");
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
  };

  if (state.succeeded) {
    return <div className="relative bg-white bg-opacity-75 mt-16 mx-auto p-6 rounded-lg shadow-xl flex items-center justify-center max-w-max">
      <p className="text-center">We&apos;ve received your information and will be in touch soon about boosting your online presence.</p>
    </div>
  }  

  const handleSubmits = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedService) {
      toast({
        title: "Service not selected",
        description: "Please select a service before submitting.",
      });
      return;
    }
    toast({
      title: "Online Presence Form submitted",
      description: "We've received your information and will be in touch soon about boosting your online presence.",
    });
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
              <Input id="name" name="Name" placeholder="Your name" required />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="Email" placeholder="Your email" type="email" required />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="website">Website</Label>
              <Input id="website" name="Website" placeholder="Your website URL" />
              <ValidationError 
                prefix="Website" 
                field="website"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="social">Primary Social Media Platform</Label>
              <Select name="Primary Social Media Platform">
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
              <ValidationError 
                prefix="Social" 
                field="social"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Services Interested In</Label>
              <RadioGroup id="service" name="Services Interested In" value={selectedService} onValueChange={handleServiceChange}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="SEO Optimization" id="seo" />
                  <Label htmlFor="seo">SEO Optimization</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="PPC Advertising" id="ppc" />
                  <Label htmlFor="ppc">PPC Advertising</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Social Media Management" id="social" />
                  <Label htmlFor="social">Social Media Management</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Content Marketing" id="content" />
                  <Label htmlFor="content">Content Marketing</Label>
                </div>
              </RadioGroup>
              <ValidationError 
                prefix="Service" 
                field="service"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="goals">Marketing Goals</Label>
              <Textarea id="goals" name="Marketing Goals" placeholder="Describe your digital marketing goals" />
              <ValidationError 
                prefix="goals" 
                field="goals"
                errors={state.errors}
              />
            </div>
          </div>
          <CardFooter className="flex justify-between mt-4 px-0">
            <Button type="submit" disabled={state.submitting || !selectedService}>Submit</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}
