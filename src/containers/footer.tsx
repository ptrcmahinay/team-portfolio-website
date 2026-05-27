import { MapPin, PhoneCall, Mail } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 justify-center text-center">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter leading-none text-pink-500">TRIA.</h1>
          <div>
            <h3 className="font-semibold mb-4 uppercase text-sm sm:text-lg">Contact us</h3>
            <div className="flex gap-2 py-2 text-sm sm:text-md justify-center text-center">
              <MapPin /> <p>Bancaan, Naic, Cavite, Philippines</p>
            </div>
            <div className="flex gap-2 py-2 text-sm sm:text-md justify-center text-center">
              <PhoneCall /><p>+63 905 821 6218</p>
            </div>
            <div className="flex gap-2 py-2 text-sm sm:text-md justify-center text-center">
              <Mail /><p>powerpopstone@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 uppercase text-sm sm:text-lg">Connect us</h3>
            <div className="flex gap-4 py-2 justify-center text-center">
              <a href="https://www.linkedin.com/in/patricia-ann-mahinay-6b4302262/" className="hover:underline text-sm sm:text-md">LinkedIn</a>
              <a href="https://github.com/ptrcmahinay" className="hover:underline text-sm sm:text-md">Github</a>
            </div>
          </div>

        </div>
      </div>
      <div className="border-t border-white/10 flex ">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-white/50 justify-between items-center">
          <p>© {new Date().getFullYear()} TRIA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;