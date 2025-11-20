import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/product', label: 'Product' },
    { path: '/installation', label: 'Installation' },
    { path: '/data-certifications', label: 'Data & Certifications' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-brand text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-brand-accent">Quicktrap</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-brand-accent text-brand'
                    : 'text-white hover:bg-brand-accent/20'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-brand-accent/20"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              mobileMenu?.classList.toggle('hidden');
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'bg-brand-accent text-brand'
                  : 'text-white hover:bg-brand-accent/20'
              }`}
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu?.classList.add('hidden');
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
