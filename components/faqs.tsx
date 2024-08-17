import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export default function Faqs() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-10"> {/* Reduced padding */}
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              Get answers to the most common questions about our product.
            </p>
          </div>
          <div className="space-y-4">
            <Collapsible className="rounded-lg border bg-background p-4 shadow-sm transition-all hover:bg-muted">
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <h3 className="text-lg font-medium hover:underline underline-offset-4">What is the difference between the Basic and Pro plans?</h3>
                <ChevronDownIcon className="h-5 w-5 transition-transform group-[data-state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 text-muted-foreground">
                The main difference between the Basic and Pro plans is the number of features and integrations
                available. The Pro plan includes advanced analytics, custom branding, and priority support, while the
                Basic plan has a more limited set of features.
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="rounded-lg border bg-background p-4 shadow-sm transition-all hover:bg-muted">
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <h3 className="text-lg font-medium hover:underline underline-offset-4">How do I cancel my subscription?</h3>
                <ChevronDownIcon className="h-5 w-5 transition-transform group-[data-state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 text-muted-foreground">
                To cancel your subscription, simply log into your account and navigate to the Billing section. From
                there, you can cancel your plan at any time. We'll be sad to see you go, but we understand that your
                needs may change.
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="rounded-lg border bg-background p-4 shadow-sm transition-all hover:bg-muted">
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <h3 className="text-lg font-medium hover:underline underline-offset-4">What kind of support do you offer?</h3>
                <ChevronDownIcon className="h-5 w-5 transition-transform group-[data-state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 text-muted-foreground">
                We offer a variety of support options, including email, live chat, and a comprehensive knowledge base.
                Our team of experts is dedicated to helping you get the most out of our product and resolve any issues
                you may encounter.
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="rounded-lg border bg-background p-4 shadow-sm transition-all hover:bg-muted">
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <h3 className="text-lg font-medium hover:underline underline-offset-4">Do you offer any discounts or promotions?</h3>
                <ChevronDownIcon className="h-5 w-5 transition-transform group-[data-state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 text-muted-foreground">
                Yes, we do offer occasional discounts and promotions. The best way to stay informed about our latest
                offers is to subscribe to our newsletter or follow us on social media. We also sometimes run special
                deals for new customers or during holiday seasons.
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="rounded-lg border bg-background p-4 shadow-sm transition-all hover:bg-muted">
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <h3 className="text-lg font-medium hover:underline underline-offset-4">How do I get started with your product?</h3>
                <ChevronDownIcon className="h-5 w-5 transition-transform group-[data-state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 text-muted-foreground">
                Getting started with our product is easy! Simply sign up for an account on our website and follow the
                on-screen instructions. If you need any assistance, our support team is always here to help you get up
                and running.
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
