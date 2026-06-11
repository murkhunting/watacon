import { useState, useCallback } from 'react';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Desarrollo Web', href: '/desarrollo-web' },
  { label: 'Tiendas Online', href: '/tiendas-online' },
  { label: 'SEO y Marketing', href: '/seo-marketing' },
  { label: 'Mantenimiento Web', href: '/mantenimiento-web' },
  { label: 'Hosting y Dominios', href: '/hosting-dominios' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="fixed top-5 left-5 z-50 flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full p-2">
        <img src="/img/watacon-logo.svg" alt="Watacon" className="w-20 h-20" />
      </div>

      <button
        onClick={toggleMenu}
        className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-5 py-2 cursor-pointer"
      >
        <span className="text-primary text-sm font-medium">
          {menuOpen ? 'Close' : 'Menu'}
        </span>
        <div className="relative w-4 h-3.5">
          <span
            className={`absolute left-0 block h-0.5 w-full bg-primary rounded transition-all duration-300 ${
              menuOpen
                ? 'top-1/2 -translate-y-1/2 rotate-45'
                : 'top-0'
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 -translate-y-1/2 block h-0.5 w-full bg-primary rounded transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-full bg-primary rounded transition-all duration-300 ${
              menuOpen
                ? 'top-1/2 -translate-y-1/2 -rotate-45'
                : 'bottom-0'
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 flex items-center justify-center bg-white/5 backdrop-blur-2xl transition-all duration-700 ease-in-out ${
          menuOpen
            ? 'opacity-100 pointer-events-auto scale-100 rounded-none'
            : 'opacity-0 pointer-events-none scale-0 rounded-[25px]'
        }`}
        style={{ transformOrigin: 'top right' }}
      >
        <nav>
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-white/80 hover:text-white text-3xl font-medium transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
