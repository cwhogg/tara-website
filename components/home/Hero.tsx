import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-primary-50" />

      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sage-500 rounded-full blur-3xl opacity-20" />

      <div className="relative container-custom py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo Column */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Photo frame with warm styling */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]">
                {/* Decorative background shape */}
                <div className="absolute -inset-4 bg-primary-200 rounded-[2rem] rotate-3 opacity-60" />

                {/* Photo container */}
                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border-4 border-white shadow-2xl bg-cream-200">
                  {/* Placeholder for Tara's photo - replace src with actual photo */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cream-200 to-cream-300">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                        <svg className="w-12 h-12 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-primary-600 font-medium text-sm">Upload photo to</p>
                      <p className="text-primary-700 font-mono text-xs mt-1">/public/tara.jpg</p>
                    </div>
                  </div>
                  {/* Uncomment and use this when photo is added:
                  <Image
                    src="/tara.jpg"
                    alt="Tara Wagner"
                    fill
                    className="object-cover"
                    priority
                  />
                  */}
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-2xl shadow-xl p-4 border border-cream-200">
                <p className="text-4xl font-serif text-primary-600">20+</p>
                <p className="text-sm text-gray-600 font-medium">Years in PR</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="text-primary-600 font-medium tracking-wide uppercase text-sm mb-4">
              Healthcare Communications
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-[1.1] mb-6">
              Hi, I&apos;m Tara.
              <span className="block text-primary-600 mt-2">
                I tell stories that matter.
              </span>
            </h1>

            <div className="space-y-4 mb-8">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                For over two decades, I&apos;ve helped healthcare innovators
                share their vision with the world.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                From digital health startups to established healthcare brands, I partner
                with mission-driven companies to craft narratives that resonate with
                patients, providers, investors, and the media.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="mailto:tara@tarawagnerpr.com" className="btn-primary">
                Let&apos;s Talk
              </Link>
              <Link href="/clients" className="btn-secondary">
                See My Work
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-cream-300">
              <p className="text-sm text-gray-500 mb-3">Trusted by teams at</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-gray-400 font-medium">
                <span>ZocDoc</span>
                <span>Evernote</span>
                <span>Eventbrite</span>
                <span>Color</span>
                <span>Trulia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
