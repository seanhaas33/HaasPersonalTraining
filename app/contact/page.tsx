import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Haas Personal Training. Questions, general inquiries, or if you'd prefer to reach out before booking.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mb-16 max-w-xl text-neutral-600 leading-relaxed">
        Have a question before booking? Reach out — I&apos;m happy to answer
        anything.
      </p>

      <div className="grid gap-16 sm:grid-cols-2">
        {/* Contact info */}
        <section aria-labelledby="contact-info-heading">
          <h2 id="contact-info-heading" className="mb-6 text-lg font-semibold">
            Get in touch
          </h2>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-medium text-neutral-500 mb-0.5">Email</dt>
              {/* TODO: Replace with real email address */}
              <dd className="text-neutral-400">[your email here]</dd>
            </div>
            <div>
              <dt className="font-medium text-neutral-500 mb-0.5">Phone</dt>
              {/* TODO: Replace with real phone number, or remove if not sharing publicly */}
              <dd className="text-neutral-400">[your phone number here]</dd>
            </div>
            <div>
              <dt className="font-medium text-neutral-500 mb-0.5">
                Service area
              </dt>
              <dd className="text-neutral-600">Troy, NY and surrounding areas (~5–10 mi)</dd>
            </div>
            <div>
              <dt className="font-medium text-neutral-500 mb-0.5">Social</dt>
              {/* TODO: Add real social links — e.g., Instagram, Facebook */}
              <dd className="text-neutral-400">[social links coming soon]</dd>
            </div>
          </dl>
        </section>

        {/* Contact form */}
        <section aria-labelledby="form-heading">
          <h2 id="form-heading" className="mb-6 text-lg font-semibold">
            Send a message
          </h2>

          {/*
            NOTE: This form is not wired up to a backend.
            TODO: Connect to a form service (e.g., Formspree, Resend, or a Next.js
            Server Action) before going live. Until then the button is disabled.
          */}
          <form
            className="flex flex-col gap-5"
            aria-describedby="form-note"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
                className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm focus:border-brand-forest focus:outline-none focus:ring-2 focus:ring-brand-forest/30"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm focus:border-brand-forest focus:outline-none focus:ring-2 focus:ring-brand-forest/30"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="What would you like to know?"
                className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm focus:border-brand-forest focus:outline-none focus:ring-2 focus:ring-brand-forest/30 resize-y"
              />
            </div>

            <button
              type="submit"
              disabled
              aria-disabled="true"
              className="rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-white opacity-50 cursor-not-allowed"
            >
              Send message
            </button>

            <p id="form-note" className="text-xs text-neutral-400">
              {/* TODO: Remove this note once the form is connected to a real backend. */}
              Form submission is not yet enabled. Please use the email or phone
              number listed to the left.
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}
