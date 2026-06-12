import Image from "next/image";
import { FaFacebook, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#1a1a1a] to-[#0f0f0f] text-gray-300 py-12 ">
      <div className="container mx-auto px-4">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo + short text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="HireLoop Logo" width={10} height={10} className="w-10 h-10" />
              <h2 className="text-white text-2xl font-semibold">HireLoop</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A smart hiring platform that connects skilled job seekers with modern companies. 
              Find talent. Get hired.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/browse-jobs" className="hover:text-white">Browse Jobs</a></li>
              <li><a href="/profile" className="hover:text-white">Create Profile</a></li>
              <li><a href="/guides" className="hover:text-white">Guides</a></li>
              <li><a href="/faqs" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>

          {/* For Recruiters */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">For Recruiters</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/post-job" className="hover:text-white">Post a Job</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/dashboard" className="hover:text-white">Recruiter Dashboard</a></li>
              <li><a href="/support" className="hover:text-white">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} HireLopp. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-gray-400">
            <a href="#" className="hover:text-white">
              <FaXTwitter />

            </a>

            <a href="#" className="hover:text-white">
              <FaInstagram />

            </a>

            <a href="#" className="hover:text-white">
              <FaFacebookF />

            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}