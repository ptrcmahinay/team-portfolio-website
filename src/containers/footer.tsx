import React from "react";
import { MapPin, PhoneCall, Mail } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid grid-cols-3 gap-10">
          <h1 className="text-9xl font-bold tracking-tighter leading-none text-pink-500">TRIA</h1>
          <div>
            <h3 className="font-semibold mb-4 uppercase">Contact us</h3>

            <div className="flex gap-2 py-2">
              <MapPin /> <p>Bancaan, Naic, Cavite, Philippines</p>
            </div>
            <div className="flex gap-2 py-2">
              <PhoneCall /><p>+63 905 821 6218</p>
            </div>
            <div className="flex gap-2 py-2">
              <Mail /><p>powerpopstone@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 uppercase">Connect us</h3>
            <div className="flex gap-4 py-2">
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Github</a>
            </div>
          </div>

        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-white/50 flex justify-between items-center">
          <p>© {new Date().getFullYear()} TRIA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;