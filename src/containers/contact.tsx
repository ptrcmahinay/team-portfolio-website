import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { CircleCheckIcon, OctagonXIcon } from "lucide-react";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    if (!form.current) return;
    if (!subject) {
      setError("Please select a subject.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current?.reset();
          setSubject("");
        },
        (err) => {
          setError(err.text || "Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="w-full max-w-lg mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-500">
            Contact us
          </h2>
          <p className="text-neutral-500 text-sm">
            Have a project in mind? Let's talk.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium text-neutral-700">
                Name
              </label>
              <Input
                id="name"
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-neutral-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                name="user_email"
                placeholder="hello@gmail.com"
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-neutral-700">
              Subject
            </label>
            <Select
              value={subject}
              onValueChange={setSubject}
              disabled={loading}
              required
              name="subject"
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Web Development">Web Development</SelectItem>
                  <SelectItem value="Tech Support & Setup">Tech Support & Setup</SelectItem>
                  <SelectItem value="UI/UX & Graphic Design">UI/UX & Graphic Design</SelectItem>
                  <SelectItem value="AI Automation">AI Automation</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-sm font-medium text-neutral-700">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              disabled={loading}
              placeholder="Tell us about your project..."
            />
          </div>

          {success && (
            <div className="flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
              <CircleCheckIcon className="size-4 shrink-0" />
              Message sent successfully! We'll get back to you soon.
            </div>
          )}

          {error && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
              <OctagonXIcon className="size-4 shrink-0" />
              {error}
            </div>
          )}

          <Button type="submit" className="w-full cursor-pointer" disabled={loading}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Spinner className="size-4" />
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
