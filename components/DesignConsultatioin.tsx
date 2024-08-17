import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function DesignConsultation() {
  return (
    <div className="flex mt-12 justify-center">
      <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Request a Design Consultation</CardTitle>
        <CardDescription>
          Get in touch with our team of experts for help with graphic design, printing, branding, and digital marketing
          services.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" placeholder="Enter your phone number" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="project">Project Description</Label>
          <Textarea
            id="project"
            placeholder="Briefly describe the project you need help with"
            className="min-h-[100px]"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          Submit Request
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}
