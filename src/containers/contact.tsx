import React from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";

const Contact = () => {
  return (
    <div id="contact" className="w-full min-h-screen flex flex-col items-center justify-center mx-auto px-6 space-y-6">
      <h2 className="text-xl md:text-2xl text-center font-bold text-pink-500 uppercase">
        Contact us
      </h2>
      <form
        // ref={form}
        // onSubmit={sendEmail}
        className="space-y-4 max-w-full"
      >
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="name" className="font-semibold text-sm text-neutral-700">Name</label>
            <Input
              id="name"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="font-semibold text-sm text-neutral-700">Email</label>
            <Input
              id="email"
              type="email"
              name="user_email"
              placeholder="hello@gmail.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="font-semibold text-sm text-neutral-700">Subject</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Web Development"/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Web Development</SelectItem>
                <SelectItem value="banana">Tech Support & Setup</SelectItem>
                <SelectItem value="blueberry">UI/UX & Graphic Design</SelectItem>
                <SelectItem value="grapes">AI Automation</SelectItem>
            </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="message" className="font-semibold text-sm text-neutral-700">Message</label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your project..."
          />
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;