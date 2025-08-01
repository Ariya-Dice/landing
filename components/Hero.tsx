'use client';

export default function Hero() {
  return (
    <section id="hero-section" className="w-full min-h-screen text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* New div for background effect */}
      <div className="hero-background-effect"></div>

      <div className="max-w-3xl text-center space-y-6 z-10"> {/* Added z-10 to keep content above */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          DayPay – Serverless Crypto Payment Gateway
        </h1>
        <p className="text-lg sm:text-xl text-gray-400">
          No sign-up. No middlemen. Just wallet-to-wallet.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="#demo"
            className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition"
          >
            Try for Free
          </a>
          <a
            href="#pricing"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            Go Pro
          </a>
        </div>
      </div>
    </section>
  );
}