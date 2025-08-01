import React from 'react';

export default function WhyChooseDayPay() {
  return (
    <section id="why-choose-daypay" className="py-16 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Why Choose DayPay?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* True Anonymity */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 text-green-300">True Anonymity</h3>
            <p className="text-gray-300">
              No sign-up, no KYC, no accounts. We never ask for your data.
            </p>
          </div>

          {/* Server-less by Design */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Server-less by Design</h3>
            {/* Changed apostrophe to &apos; */}
            <p className="text-gray-300">
              Everything happens locally on your device. We don&apos;t have servers that store your transaction history.
            </p>
          </div>

          {/* Complete Control */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 text-red-300">Complete Control</h3>
            <p className="text-gray-300">
              As a non-custodial tool, your funds go directly from wallet to wallet. You always control your keys.
            </p>
          </div>

          {/* Unmatched Simplicity */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Unmatched Simplicity</h3>
            <p className="text-gray-300">
              A clean, fast interface designed to get the job done without any hassle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}