export default function ExpertiseSection() {
  const approaches = [
    {
      number: '01',
      title: 'Listen First',
      description: "Before crafting a single message, I immerse myself in your world. Understanding your mission, your challenges, and the lives you're trying to improve is where every great story begins.",
      color: 'sage',
    },
    {
      number: '02',
      title: 'Find the Human Thread',
      description: 'Healthcare can be complex, but the stories that resonate are always human. I help translate clinical language and technical innovation into narratives that move people.',
      color: 'plum',
    },
    {
      number: '03',
      title: 'Build Real Relationships',
      description: "I've spent 20 years building genuine relationships with journalists, editors, and producers. When I pitch your story, I'm connecting you with people who trust me.",
      color: 'taupe',
    },
  ];

  const colorClasses = {
    sage: 'bg-sage-50 text-sage-600',
    plum: 'bg-plum-50 text-plum-600',
    taupe: 'bg-taupe-50 text-taupe-600',
  };

  return (
    <section className="py-24 lg:py-32 bg-cream-50 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sage-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-plum-100 rounded-full blur-3xl opacity-30" />

      <div className="container-custom relative">
        {/* Section intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sage-500 font-medium tracking-[0.15em] uppercase text-sm mb-4">
            Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">
            My Approach
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed">
            Great PR isn&apos;t about spin—it&apos;s about finding the truth in your story
            and sharing it with the people who need to hear it.
          </p>
        </div>

        {/* Philosophy cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {approaches.map((approach) => (
            <div key={approach.number} className="text-center md:text-left">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${colorClasses[approach.color as keyof typeof colorClasses]} mb-6`}>
                <span className="text-2xl font-serif">{approach.number}</span>
              </div>
              <h3 className="text-xl font-serif text-text-primary mb-3">{approach.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>

        {/* Personal quote */}
        <div className="mt-24 max-w-4xl mx-auto">
          <blockquote className="relative bg-white rounded-2xl p-10 md:p-12 shadow-sm border border-cream-200">
            <div className="absolute -top-4 left-10 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-2xl md:text-3xl font-serif text-text-primary leading-relaxed text-center italic pt-4">
              The companies I work with aren&apos;t just building products—they&apos;re
              trying to make healthcare more human. That&apos;s a story worth telling well.
            </p>
            <footer className="mt-8 text-center">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-[2px] bg-taupe-300" />
                <span className="text-taupe-500 font-medium">Tara Wagner</span>
                <div className="w-10 h-[2px] bg-taupe-300" />
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
