'use client';

export default function Comparison() {
  const features = [
    "No Sign-up",
    "One-time Links",
    "Password-protected Requests",
    "Open Source",
    "Crypto-only Payments",
    "Free to Use",
    "PWA Installable",
    "Self-hosted Option",
    "Multi-chain Support",
  ];

  const platforms = [
    {
      name: "DayPay",
      values: [true, true, true, true, true, true, true, true, true],
    },
    {
      name: "NOWPayments",
      values: [false, false, false, false, true, false, false, false, true],
    },
    {
      name: "BTCPay",
      values: [true, false, false, true, true, true, false, true, false],
    },
  ];

  return (
    <section id="comparison" className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">How We Compare</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            See how DayPay stacks up against other crypto payment providers.
          </p>
        </div>

        <div className="overflow-x-auto border rounded-xl shadow-sm">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-4 font-semibold">Feature</th>
                {platforms.map((p, idx) => (
                  <th key={idx} className="p-4 font-semibold text-center">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="p-4 font-medium text-gray-900">{feature}</td>
                  {platforms.map((p, idx) => (
                    <td key={idx} className="p-4 text-center">
                      {p.values[i] ? (
                        <span className="text-green-600 text-lg">✓</span>
                      ) : (
                        <span style={{ color: 'rgba(255, 0, 0, 0.4)' }} className="text-lg">✗</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
