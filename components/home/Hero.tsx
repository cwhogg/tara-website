import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-100 min-h-[90vh] flex items-center">
      {/* Decorative circle */}
      <div className="absolute top-20 right-32 w-24 h-24 bg-primary-100 rounded-full opacity-60" />

      <div className="container-custom py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div>
            <p className="text-primary-500 font-medium tracking-[0.2em] uppercase text-sm mb-6">
              Healthcare Communications
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary leading-[1.1] mb-8">
              Hi, I&apos;m Tara.
              <br />
              I tell stories
              <br />
              <span className="italic text-primary-500">
                that matter.
              </span>
            </h1>

            <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-lg">
              For two decades, I&apos;ve helped healthcare innovators share their
              vision with the world—translating complex ideas into narratives
              that resonate and inspire.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="mailto:tara@tarawagnerpr.com"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-all duration-300"
              >
                Let&apos;s Connect
              </Link>
              <Link
                href="/clients"
                className="inline-flex items-center gap-2 text-text-primary font-medium hover:text-primary-500 transition-colors group"
              >
                View My Work
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Photo Column - Arch Shape */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Arch-shaped photo frame */}
            <div className="relative w-80 md:w-96 lg:w-[420px]">
              {/* The arch shape with gradient */}
              <div
                className="relative w-full aspect-[3/4] rounded-t-full overflow-hidden"
                style={{
                  background: 'linear-gradient(to bottom, #D4B8C4 0%, #7B2D52 100%)',
                }}
              >
                {/* Photo placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/70">
                    <p className="text-sm font-medium">Photo of Tara</p>
                    <p className="text-xs mt-1 font-mono">/public/tara.jpg</p>
                  </div>
                </div>
                {/* Uncomment when photo is added:
                <Image
                  src="/tara.jpg"
                  alt="Tara Wagner"
                  fill
                  className="object-cover"
                  priority
                />
                */}
              </div>

              {/* Stats card */}
              <div className="absolute -bottom-6 left-0 bg-white rounded-lg shadow-lg px-8 py-4 border border-cream-200">
                <p className="text-4xl font-serif text-primary-500">20+</p>
                <p className="text-sm text-text-muted font-medium">Years in PR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
