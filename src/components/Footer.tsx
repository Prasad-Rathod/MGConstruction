import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-stone-200">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-light tracking-widest mb-6">
              M.G.CONSTRUCTION
            </h3>
            <p className="text-sophisticated leading-relaxed mb-6">
              Creating sophisticated interiors that reflect refined taste and
              exceptional craftsmanship.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-light tracking-wider text-sm uppercase mb-6 text-gray-600">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sophisticated hover:text-black transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sophisticated hover:text-black transition-colors"
                >
                  The Studio
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sophisticated hover:text-black transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-sophisticated hover:text-black transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sophisticated hover:text-black transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-light tracking-wider text-sm uppercase mb-6 text-gray-600">
              Contact
            </h4>
            <div className="space-y-3 text-sophisticated">
              <p>+91 8169768125</p>
              <p>invorycrescent@gmail.com</p>
              <p>
                Maa Ambe Kripa , Plot no.C9/33, Sector-12, Kharghar
                <br />
                Navi Mumbai-410210
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm tracking-wider">
            © 2024 M.G.CONSTRUCTION. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
