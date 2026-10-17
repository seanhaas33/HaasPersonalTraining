import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sean Haas, personal trainer serving the Troy, NY area with in-home and online sessions.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="mb-10 text-3xl font-bold tracking-tight">About</h1>

      {/* Bio — TODO: fill in with real content */}
      <section aria-labelledby="bio-heading" className="mb-16">
        <h2 id="bio-heading" className="mb-6 text-xl font-semibold">
          Meet Sean Haas
        </h2>

        {/* Placeholder photo area */}
        <div className="mb-8 flex items-center justify-center rounded-xl border-2 border-dashed border-neutral-200 bg-neutral-50 h-64 text-neutral-400 sm:h-80">
          {/* TODO: Replace with a real headshot — use next/image with an image file in /public */}
          <span className="text-sm">Photo placeholder</span>
        </div>

        {/*
          TODO: Replace the placeholder paragraphs below with Sean's real bio.
          Suggested content to cover:
            - Background and how you got into personal training
            - Training philosophy and approach
            - Relevant experience or education (note: NASM CPT in progress — do NOT claim certification yet)
            - What makes your approach different / why in-home training
        */}
        <div className="rounded-xl border-2 border-dashed border-neutral-200 px-8 py-10 text-neutral-400">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest">
            Bio coming soon
          </p>
          <p className="text-sm leading-relaxed">
            [TODO: Write your bio here. Keep it personal and conversational.
            Explain your background, what led you to personal training, your
            coaching philosophy, and what clients can expect working with you.]
          </p>
        </div>
      </section>

      {/* Training philosophy — placeholder */}
      <section aria-labelledby="philosophy-heading">
        <h2 id="philosophy-heading" className="mb-4 text-xl font-semibold">
          Training philosophy
        </h2>
        <div className="rounded-xl border-2 border-dashed border-neutral-200 px-8 py-10 text-neutral-400">
          <p className="text-sm leading-relaxed">
            [TODO: Add a short paragraph about your training approach — e.g.,
            progressive overload, meeting clients where they are, making fitness
            accessible and sustainable.]
          </p>
        </div>
      </section>
    </div>
  );
}
