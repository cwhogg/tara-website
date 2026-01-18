import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Tara Wagner PR</h3>
            <p className="text-gray-400 max-w-md">
              20+ years leading PR and storytelling for mission-driven companies in healthcare,
              digital health, and virtual care.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-gray-300 hover:text-white transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-300 hover:text-white transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:tara@tarawagnerpr.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  tara@tarawagnerpr.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tarawagner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Tara Wagner PR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
