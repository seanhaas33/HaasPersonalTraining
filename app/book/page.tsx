import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book a session or free consultation with Haas Personal Training in Troy, NY.",
};

/**
 * Placeholder for the Cal.com embed.
 *
 * TODO: Replace this component with your Cal.com embed.
 * Steps:
 *   1. Sign in at cal.com and create a free or pro account.
 *   2. Create an event type (e.g., "Free Consultation", "60-min Session").
 *   3. Go to the event's "Embed" settings and copy the inline embed snippet.
 *   4. Paste the <script> and <div> tags (or use the @calcom/embed-react package)
 *      in place of this CalComPlaceholder component.
 *   5. Your embed URL will look like: https://cal.com/YOUR_USERNAME/YOUR_EVENT
 */
function CalComPlaceholder() {
  return (
    <div className="flex min-h-[400px] items-center justify-center rounded-xl border-2 border-dashed border-neutral-200 bg-neutral-50 px-8 py-16 text-center text-neutral-400">
      <div>
        <p className="mb-2 text-sm font-medium uppercase tracking-widest">
          Booking calendar coming soon
        </p>
        <p className="text-sm leading-relaxed">
          {/* TODO: Remove this paragraph once Cal.com is wired up. */}
          The Cal.com scheduler will be embedded here.
          <br />
          In the meantime, reach out via the{" "}
          <a href="/contact" className="underline hover:text-neutral-600">
            contact page
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight">Book a session</h1>
      <p className="mb-10 text-neutral-600 leading-relaxed">
        New clients start with a free consultation — no commitment required.
        Returning clients can book a session directly using the calendar below.
      </p>

      <CalComPlaceholder />
    </div>
  );
}
