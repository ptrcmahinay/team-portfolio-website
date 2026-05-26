import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge }  from '@/components/ui/badge';
const Services = () => {
  return (
    <div id="services" className="w-full min-h-screen flex flex-col items-center justify-center mx-auto px-6 space-y-6">
      <h2 className="text-xl md:text-2xl text-center font-bold text-pink-500 uppercase">Services</h2>

      <h3 className="text-sm md:text-lg text-center text-neutral-500 font-serif">Quality work at student rates — fast turnaround, no corporate overhead.</h3>

      <div className="w-2xl grid grid-cols-2 gap-5">
        {/* first service */}
        <div>
          <Card>
            <CardHeader className='font-semibold text-neutral-800'>Web Development</CardHeader>
            <CardContent>Static sites, landing pages, and small business websites. Mobile-friendly and fast.
              <div>
                <Badge>HTML/CSS</Badge>
                <Badge>Tailwind</Badge>
                <Badge>JavaScript</Badge>
                <Badge>React TypeScript</Badge>
                <Badge>MySQL</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader className='font-semibold text-neutral-800'>Tech Support & Setup</CardHeader>
            <CardContent>
              Static sites, landing pages, and small business websites. Mobile-friendly and fast.
              <div className="">
                <Badge>Hardware</Badge>
                <Badge>Networking</Badge>
                <Badge>Windows</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader className='font-semibold text-neutral-800'>UI/UX & Graphic Design</CardHeader>
            <CardContent>
              Figma mockups, logo design, and social medi graphics for your brand or org
              <div>
                <Badge>Figma</Badge>
                <Badge>Canva</Badge>
                <Badge>Branding</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>AI Automations</CardHeader>
            <CardContent>Figma mockups, logo design, and social medi graphics for your brand or org
              <div>
                <Badge>Figma</Badge>
                <Badge>Canva</Badge>
                <Badge>Branding</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Services
