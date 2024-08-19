
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Label } from "@/components/ui/label";
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
  
  const [state, handleSubmit] = useForm("xanwddkb");
  if (state.succeeded) {
    return <p>Thank you! Your information has been successfully submitted. We&apos;re excited to connect with you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
       
      <div className="grid gap-2">
        <Input id="name" type="text" name="name" placeholder="Your Name" />
      </div>
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <div className="grid gap-2">
        <Input id="email" name="email" type="email" placeholder="Your Email" />
      </div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div className="grid gap-2">
        <Input id="subject" type="text" name="subject" placeholder="Subject" />
      </div>
      <ValidationError 
        prefix="Subject" 
        field="subject"
        errors={state.errors}
      />
      <div className="grid gap-2">
        <Textarea id="message" name="message" placeholder="Your Message" />
      </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <Button type="submit" disabled={state.submitting} className="w-full">Send Message</Button>
    </form>
  )
}

export default Form