import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/footer/logo-white.svg";
import Link from "next/link";
import linkedin from "@/assets/footer/linkedin.svg";
import facebook from "@/assets/footer/facebook.svg";
import instagram from "@/assets/footer/instagram.svg";
import twitter from "@/assets/footer/twitter.svg";

export default function Footer() {
  return (
    <footer className="bg-accent text-white pt-40 pb-6 relative overflow-hidden">
      <div className=" mt-20">
        <div className="container flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Left Section */}
          <div className="md:w-1/3">
            <Image
              src={Logo.src}
              alt="MyGenie Logo"
              width={150}
              height={50}
              quality={100}
            />
            <p className="text-sm text-white/70 mt-2 leading-relaxed">
              Guidance and mentorship tailored to your team’s needs, ensuring
              successful Agile adoption.
            </p>

            <div className="mt-10 space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-secondary" />
                <span>(229) 555-0109</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-secondary" />
                <span>hello@yusuf.com, info@yusuf.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-secondary mt-1" />
                <span>
                  128/162 avenue de France à Paris 13e - multiplexe 20 salles
                </span>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-lg">
            <div>
              <h4 className="font-semibold mb-3">Quick Link</h4>
              <ul className="space-y-1 text-white/60">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Recourse</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-1 text-white/60">
                <li>Urgent</li>
                <li>Regular</li>
                <li>Ongoing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Publication</h4>
              <ul className="space-y-1 text-white/60">
                <li>Text Here</li>
                <li>Text Here</li>
                <li>Text Here</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Help</h4>
              <ul className="space-y-1 text-white/60">
                <li>Text Here</li>
                <li>Text Here</li>
                <li>Text Here</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary mt-10"></div>
        <div className="container  pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/70">©MyGenie all rights reserved</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white/70 transition">
              <Image src={linkedin.src} alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:text-white/70 transition">
              <Image src={facebook.src} alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:text-white/70 transition">
              <Image
                src={instagram.src}
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="hover:text-white/70 transition">
              <Image src={twitter.src} alt="Twitter" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
