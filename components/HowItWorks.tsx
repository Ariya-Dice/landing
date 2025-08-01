import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Private & Anonymous Crypto Payments
        </h2>
        <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-16">
          Accept or make crypto payments with zero tracking. No sign-up, no accounts. Just a simple tool for direct, peer-to-peer transactions.
        </p>

        <h3 className="text-3xl font-bold text-center mb-12 text-blue-300">
          How DayPay Works
        </h3>
        {/* Changed apostrophes to &apos; */}
        <p className="text-lg text-center text-gray-400 max-w-4xl mx-auto mb-16">
          DayPay is a truly decentralized payment tool that enables secure and anonymous transactions. It runs entirely in your browser and never stores your data on any server. We don&apos;t know who you are, and we don&apos;t track your payments. Your privacy is guaranteed.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* For Sellers */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-6 text-green-400">For Sellers</h4>
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li>
                Enter your wallet address for one of 5 supported networks (Bitcoin, Ethereum, BSC, Solana, Tron).
              </li>
              <li>
                Set the product price in fiat (e.g., USD, EUR) and add optional details like invoice number or store name.
              </li>
              <li>
                DayPay fetches real-time crypto prices via CoinGecko API and generates a QR code with payment details.
              </li>
              <li>
                <span className="font-bold text-yellow-300">Coming soon:</span> Convert buyer payments to stablecoins (e.g., USDT) to protect against price volatility, with a small 0.5% fee.
              </li>
            </ul>
          </div>

          {/* For Buyers */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-6 text-purple-400">For Buyers</h4>
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li>
                Scan the seller’s QR code using the DayPay buyer panel.
              </li>
              <li>
                Connect your wallet (e.g., MetaMask, Trust Wallet) via WalletConnect in just 4 clicks.
              </li>
              <li>
                DayPay automatically configures the correct network if needed, processes your payment, and confirms it on-chain.
              </li>
              <li>
                Wallet connection disconnects after 5 minutes or payment completion for enhanced security.
              </li>
            </ul>
          </div>
        </div>

        {/* Get Started */}
        <div className="text-center bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-8 text-blue-300">Get Started</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Start using DayPay today for truly private and censorship-resistant crypto payments!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-gray-700 p-6 rounded-lg text-left">
              <h4 className="text-xl font-semibold mb-3 text-green-400">Sellers:</h4>
              <p className="text-gray-300">
                Open the seller panel, input your wallet address and price, and share the generated QR code.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg text-left">
              <h4 className="text-xl font-semibold mb-3 text-purple-400">Buyers:</h4>
              <p className="text-gray-300">
                Open the buyer panel, scan the QR code, connect your wallet, and confirm the payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}