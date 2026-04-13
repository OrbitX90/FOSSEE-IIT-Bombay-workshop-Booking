import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-4 shrink-0 mb-6 inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
              <div className="bg-white px-2 py-1.5 rounded-md flex items-center justify-center">
                <img src="/fossee_logo.png" alt="FOSSEE Logo" className="h-10 w-auto object-contain" />
              </div>
              <div className="h-8 border-l border-white/20 hidden sm:block"></div>
              <div className="bg-white px-2 py-1.5 rounded-md hidden sm:flex items-center justify-center">
                <img src="/iitb_logo.png" alt="IIT Bombay Logo" className="h-10 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Free/Libre and Open Source Software for Education. Empowering institutions and students through accessible technology workshops across India.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h3 className="font-poppins text-lg font-semibold mb-4 text-white">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/workshops" className="text-sm text-gray-300 hover:text-accent transition-colors">Browse Workshops</Link></li>
              <li><Link to="/login" className="text-sm text-gray-300 hover:text-accent transition-colors">Faculty Login</Link></li>
              <li><Link to="/login" className="text-sm text-gray-300 hover:text-accent transition-colors">Student Login</Link></li>
              <li><Link to="/register" className="text-sm text-gray-300 hover:text-accent transition-colors">Create Account</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h3 className="font-poppins text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li><a href="https://fossee.in" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-accent transition-colors">FOSSEE Official</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            &copy; {currentYear} FOSSEE, IIT Bombay. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
