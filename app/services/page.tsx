import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personal training packages in Troy, NY. 30-minute and 60-minute in-person sessions or 60-minute online sessions. Equipment provided.",
};

const packages = [
  {
    label: "30 min · In-person",
    price: "$50",
    description:
      "A focused half-hour session at your home or chosen location. Great for busy schedules or targeted work on a specific area.",
    badge: null,
  },
  {
    label: "60 min · In-person",
    price: "$80",
    description:
      "A full-length session for a complete workout — warm-up, strength or conditioning work, and cool-down. The most popular option.",
    badge: "Most popular",
  },
  {
    label: "60 min · Online",
    price: "$65",
    description:
      "Train live via video with real-time coaching and form feedback. All you need is a device and a small amount of space.",
    badge: null,
  },
];

const equipment = [
  "Adjustable dumbbells",
  "Adjustable bench",
  "Resistance bands",
  "Plyo box",
];

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      {/* Heading */}
      <h1 className="mb-4 text-3xl font-bold tracking-tight">Services</h1>
      <p className="mb-16 max-w-xl text-neutral-600 leading-relaxed">
        Flexible options to fit your life — whether you want someone at your
        door or prefer to train remotely.
      </p>

      {/* Pricing cards */}
      <section aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="mb-8 text-xl font-semibold">
          Session packages
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {packages.map(({ label, price, description, badge }) => (
            <div
              key={label}
              className="relative flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              {badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-brand-forest px-3 py-0.5 text-xs font-semibold text-white">
                  {badge}
                </span>
              )}
              <p className="mb-1 text-sm font-medium text-neutral-500">{label}</p>
              <p className="mb-4 text-4xl font-bold tracking-tight">{price}</p>
              <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                {description}
              </p>
              <Link
                href="/book"
                className="mt-6 block rounded-full bg-brand-forest px-4 py-2 text-center text-sm font-semibold text-white hover:bg-green-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:ring-offset-2"
              >
                Book this session
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-neutral-500">
          * A free initial consultation is offered to all new clients.
        </p>
      </section>

      {/* In-person vs online */}
      <section aria-labelledby="format-heading" className="mt-20">
        <h2 id="format-heading" className="mb-6 text-xl font-semibold">
          In-person vs. online
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="mb-2 font-semibold text-brand-forest">In-person</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Sessions take place at your home or a location of your choosing
              within roughly 5–10 miles of Troy, NY. I arrive with all necessary
              equipment — no gym membership or gear required on your end.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="mb-2 font-semibold text-brand-forest">Online</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Train live via video call from anywhere. You&apos;ll receive real-time
              coaching and form cues, just like an in-person session. Ideal for
              remote clients or days when meeting in person isn&apos;t practical.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section aria-labelledby="equipment-heading" className="mt-20">
        <h2 id="equipment-heading" className="mb-4 text-xl font-semibold">
          Equipment I bring
        </h2>
        <p className="mb-6 text-neutral-600 text-sm">
          For in-person sessions, I bring everything needed for a full workout.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {equipment.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm"
            >
              {/* Checkmark accent */}
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-forest text-white text-xs font-bold" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
