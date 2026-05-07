
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/Ardent-Logo.svg"
                alt="Ardent Capital"
                className="h-12 object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Welcome to Ardent Capital, an RBI-registered Non-Banking Financial Company (NBFC) headquartered in Delhi, serving clients across India. We empower individuals and businesses with quick, hassle-free online loans that require minimal documentation, ensuring seamless access to short-term financial solutions.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">About us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">How it Works</li>
              <li className="hover:text-white cursor-pointer transition-colors">Repay loan</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Important Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms & conditions</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pay now</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>Email us - info@loaninpocket.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Address : H. No-147, 313/73, PN-12, Ground Floor, Anand Nagar, Keshav Puram, Delhi, India, 110035.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <h4 className="text-xl font-bold mb-4">A Unit Neena Impex Private Limited</h4>
          <h5 className="text-sm font-bold text-gray-300 mb-6 uppercase tracking-wider">Grievance Redressal Cell</h5>
          <div className="max-w-3xl mx-auto text-xs text-gray-400 space-y-4 leading-relaxed">
            <p>We strictly adhere to the RBI directives and have an efficient grievance redressal team to look into and resolve all types of grievances.</p>
            <p>We always strive for responsible lending, we only offer loans that we know will be easy for you to repay, and we charge ethical fees.</p>
            <p>We never believe in high pressure or forced recovery methods of any kind.</p>
            <p>But if you have a complaint, we take it seriously and solve the problem within 5-7 working days.</p>
            <p className="font-bold text-gray-300">Call us at : +91 9728186555 (Grievance Officer)</p>
            <p className="font-bold text-gray-300">Email us at : grievance@loaninpocket.com</p>
          </div>
          <p className="mt-12 text-xs text-gray-500">
            &copy; 2025 Ardent Capital. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
