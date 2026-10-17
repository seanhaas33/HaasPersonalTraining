import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "In-home and online personal training in the Troy, NY area. Sean Haas brings the equipment to you. Book a free consultation today.",
};

// ── Reusable section wrapper ───────────────────────────────────────────────
function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-6 py-20 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

// ── Step card used in "How it works" ──────────────────────────────────────
function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-4xl font-bold text-brand-lime">{number}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
}

// ── Benefit card used in "What you get" ───────────────────────────────────
function Benefit({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="mb-2 font-semibold text-brand-forest">{title}</h3>
      <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-forest px-6 py-28 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-lime">
            In-home &amp; online personal training · Troy, NY
          </p>
          <h1 className="mb-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Personal training that comes to you.
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/80">
            No gym. No commute. Sean Haas brings the equipment to your home (or
            wherever works for you) and builds a plan around your goals.
          </p>
          <Link
            href="/book"
            className="inline-block rounded-full bg-brand-lime px-8 py-4 text-base font-semibold text-slate-900 hover:bg-lime-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-forest"
          >
            Book a free consultation
          </Link>
        </div>
      </section>

      {/* How it works */}
      <Section className="bg-white">
        <h2 className="mb-12 text-2xl font-bold tracking-tight sm:text-3xl">
          How it works
        </h2>
        <div className="grid gap-10 sm:grid-cols-3">
          <Step
            number="01"
            title="Book a free consultation"
            description="We connect — in person or online — to talk about your goals, schedule, and any limitations. No commitment required."
          />
          <Step
            number="02"
            title="Get a personalized plan"
            description="Your program is built around your specific goals and fitness level. No one-size-fits-all templates."
          />
          <Step
            number="03"
            title="Train on your terms"
            description="Sessions happen at your home or a location of your choice. I bring all the equipment — just show up ready to work."
          />
        </div>
      </Section>

      {/* What you get */}
      <Section className="bg-neutral-50">
        <h2 className="mb-12 text-2xl font-bold tracking-tight sm:text-3xl">
          What you get
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <Benefit
            title="Train where you are"
            description="In-home sessions or a location of your choice within the Troy area. Online sessions available for remote clients."
          />
          <Benefit
            title="Equipment included"
            description="Adjustable dumbbells, an adjustable bench, resistance bands, and a plyo box — everything needed for a full workout."
          />
          <Benefit
            title="Personalized programming"
            description="Every workout is designed for your goals, fitness level, and any injuries or limitations. Your plan, not a generic template."
          />
        </div>
      </Section>

      {/* Testimonials — placeholder */}
      <Section className="bg-white">
        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Client testimonials
        </h2>
        {/* TODO: Replace this block with real client testimonials once collected. */}
        <div className="rounded-xl border-2 border-dashed border-neutral-200 px-8 py-16 text-center text-neutral-400">
          <p className="text-sm font-medium uppercase tracking-widest">
            Coming soon
          </p>
          <p className="mt-2 text-sm">
            Testimonials will appear here once clients have been onboarded.
          </p>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section className="bg-brand-forest text-white">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="mb-8 text-white/80">
            Book a free consultation — no commitment, no pressure.
          </p>
          <Link
            href="/book"
            className="inline-block rounded-full bg-brand-lime px-8 py-4 text-base font-semibold text-slate-900 hover:bg-lime-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-forest"
          >
            Book a free consultation
          </Link>
        </div>
      </Section>
    </>
  );
}
