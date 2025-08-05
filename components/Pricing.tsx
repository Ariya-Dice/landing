'use client';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Unlimited QR payments",
        "No sign-up needed",
        "Supports ETH, BSC, TRON",
        "PWA ready",
        "Self-hosted (Vercel ready)",
      ],
      cta: {
        text: "Try Free",
        link: "https://daypay.vercel.app",
        primary: false,
      },
    },
    {
      name: "Pro",
      price: "$500", // Changed to $1000 for one-time pack
      features: [
        "All Free features",
        "One-time payment links",
        "Password-protected requests",
        "Downloadable invoices (PDF)",
        "Basic branding options",
        "Invoice customization", // Added invoice customization
        "5 years of support and updates", // Added support and updates
        "Future features for 5 years", // Added future features for 5 years
      ],
      cta: {
        text: "Buy Pro",
        link: "#",
        primary: true,
      },
    },
    {
      name: "White-label",
      price: "Custom",
      features: [
        "All Pro features",
        "Custom domain + branding",
        "Deployment support",
        "Priority email support",
        "Integration API access",
      ],
      cta: {
        text: "Contact Sales",
        link: "#contact",
        primary: false,
      },
    },
  ];

  return (
    <section id="pricing" className="w-full bg-white text-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Pricing</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Simple and fair pricing for every type of user.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-2xl p-6 flex flex-col shadow-sm"
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-2xl font-semibold mb-4">{plan.price}</p>
              <ul className="text-left space-y-2 mb-6">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.cta.link}
                className={`mt-auto w-full px-4 py-2 rounded-xl text-sm font-semibold text-center transition ${
                  plan.cta.primary
                    ? "bg-black text-white hover:bg-gray-800"
                    : "border border-black text-black hover:bg-gray-100"
                }`}
              >
                {plan.cta.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
