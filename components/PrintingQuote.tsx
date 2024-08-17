import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function PrintingQuote() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Get a Printing Quote</h1>
          <p className="text-muted-foreground mb-8">
            Fill out the form below to get a custom quote for your printing needs.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="Enter your phone number" />
            </div>
            <div>
              <Label htmlFor="project">Project Details</Label>
              <Textarea id="project" rows={4} placeholder="Describe your printing project" />
            </div>
            <div>
              <Label htmlFor="file">Upload File</Label>
              <Input id="file" type="file" />
            </div>
            <Button type="submit" className="w-full">
              Get Quote
            </Button>
          </form>
        </div>
        <div className="bg-muted rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4">Our Printing Services</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Offset Printing</h3>
              <p className="text-muted-foreground">High-quality, cost-effective printing for large print runs.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Digital Printing</h3>
              <p className="text-muted-foreground">Fast, versatile printing for short-run and on-demand projects.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Large Format Printing</h3>
              <p className="text-muted-foreground">Produce eye-catching banners, posters, and signage.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Finishing Services</h3>
              <p className="text-muted-foreground">Binding, laminating, and other finishing options available.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
