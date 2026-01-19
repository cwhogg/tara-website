import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden">
      {/* Subtle decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-900 to-plum-700 opacity-50" />

      <div className="container-custom py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Personal section */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-serif mb-4">Tara Wagner</h3>
            <p className="text-primary-200 leading-relaxed mb-6">
              Healthcare PR consultant helping mission-driven companies tell stories
              that matter. Based in San Francisco, working with teams everywhere.
            </p>
            <a
              href="mailto:tara@tarawagnerpr.com"
              className="inline-flex items-center gap-2 text-sage-300 hover:text-white transition-colors"
            >
              tara@tarawagnerpr.com
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-3" />

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-taupe-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-primary-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-primary-200 hover:text-white transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-primary-200 hover:text-white transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-taupe-400 mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/tarawagner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  LinkedIn
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/tarawagner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Twitter
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Tara Wagner. All rights reserved.</p>
          <p className="text-primary-400">Healthcare communications with heart.</p>
        </div>
      </div>
    </footer>
  );
}
