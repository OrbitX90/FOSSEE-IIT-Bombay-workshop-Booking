import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, User, LogOut, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // to force re-render on route change

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    closeMenu();
    window.location.href = '/';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Workshops', path: '/workshops' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 sm:gap-4 shrink-0" onClick={closeMenu}>
            <img src="/fossee_logo.png" alt="FOSSEE Logo" className="h-8 sm:h-10 w-auto object-contain" />
            <div className="h-6 sm:h-8 border-l border-border"></div>
            <img src="/iitb_logo.png" alt="IIT Bombay Logo" className="h-8 sm:h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-end gap-8 ml-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors hover:text-accent ${
                      isActive ? 'text-primary' : 'text-text-secondary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {userRole ? (
                <>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors mr-2"
                  >
                    <LayoutDashboard size={18} />
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-red-500 transition-colors"
                  >
                    <LogOut size={18} />
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    <User size={18} />
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-text-secondary hover:text-primary hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white shadow-lg absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block text-base font-semibold py-2 transition-colors ${
                    isActive ? 'text-primary' : 'text-text-secondary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <hr className="border-border my-4" />
            {userRole ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={closeMenu}
                  className="flex items-center gap-2 text-base font-semibold text-primary py-2"
                >
                  <LayoutDashboard size={20} />
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full gap-2 text-base font-semibold text-red-500 py-2 mt-2"
                >
                  <LogOut size={20} />
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex items-center gap-2 text-base font-semibold text-primary py-2"
                >
                  <User size={20} />
                  Log in
                </Link>
                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="block w-full text-center bg-primary text-white text-base font-semibold px-4 py-3 rounded-md hover:bg-primary/90 transition-colors mt-2"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
