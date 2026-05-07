
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const Header = () => {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/about" },
    { label: "How it Works", path: "/how-it-works" },
    { label: "Services", path: "/services" },
    { label: "Repay Loan", path: "/repay" },
    { label: "Contact us", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-xs">
          <div>
            Email us : <a href="mailto:info@loaninpocket.com" className="hover:text-primary transition-colors">info@loaninpocket.com</a>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook className="w-3 h-3 cursor-pointer hover:text-primary transition-colors" />
            <Linkedin className="w-3 h-3 cursor-pointer hover:text-primary transition-colors" />
            <Twitter className="w-3 h-3 cursor-pointer hover:text-primary transition-colors" />
            <Instagram className="w-3 h-3 cursor-pointer hover:text-primary transition-colors" />
            <Youtube className="w-3 h-3 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/Ardent-Logo.svg"
            alt="Ardent Capital"
            className="h-12 md:h-16 object-contain"
          />
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-gray-800 hover:text-primary font-medium text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/apply-now"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md font-semibold text-sm transition-all shadow-md"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle (Simplified) */}
        <div className="lg:hidden">
          <button className="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
