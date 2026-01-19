export default function ExpertiseSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream-50">
      <div className="container-custom">
        {/* Section intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text-primary mb-6">
            My Approach
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed">
            Great PR isn&apos;t about spin&mdash;it&apos;s about finding the truth in your story
            and sharing it with the people who need to hear it.
          </p>
        </div>

        {/* Philosophy cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-50 text-primary-500 mb-6">
              <span className="text-2xl font-serif">01</span>
            </div>
            <h3 className="text-xl font-serif text-text-primary mb-3">Listen First</h3>
            <p className="text-text-muted leading-relaxed">
              Before crafting a single message, I immerse myself in your world.
              Understanding your mission, your challenges, and the lives you&apos;re
              trying to improve is where every great story begins.
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-50 text-primary-500 mb-6">
              <span className="text-2xl font-serif">02</span>
            </div>
            <h3 className="text-xl font-serif text-text-primary mb-3">Find the Human Thread</h3>
            <p className="text-text-muted leading-relaxed">
              Healthcare can be complex, but the stories that resonate are always
              human. I help translate clinical language and technical innovation
              into narratives that move people.
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-50 text-primary-500 mb-6">
              <span className="text-2xl font-serif">03</span>
            </div>
            <h3 className="text-xl font-serif text-text-primary mb-3">Build Real Relationships</h3>
            <p className="text-text-muted leading-relaxed">
              I&apos;ve spent 20 years building genuine relationships with journalists,
              editors, and producers. When I pitch your story, I&apos;m connecting you
              with people who trust me.
            </p>
          </div>
        </div>

        {/* Personal quote */}
        <div className="mt-20 max-w-4xl mx-auto">
          <blockquote className="relative">
            <div className="absolute -top-4 -left-4 text-8xl text-primary-100 font-serif leading-none">&ldquo;</div>
            <p className="relative text-2xl md:text-3xl font-serif text-text-primary leading-relaxed text-center italic">
              The companies I work with aren&apos;t just building products&mdash;they&apos;re
              trying to make healthcare more human. That&apos;s a story worth telling well.
            </p>
            <footer className="mt-6 text-center">
              <span className="text-primary-500 font-medium">Tara Wagner</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
