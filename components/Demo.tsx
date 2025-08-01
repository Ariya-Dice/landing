export default function Demo() {
  return (
    <section id="demo" className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Live Demo
        </h2>
        <p className="text-gray-600">
          Try DayPay in your browser – no sign-up, no back-end, just crypto.
        </p>
        <div className="aspect-video w-full overflow-hidden rounded-xl shadow-xl border border-gray-300">
          <iframe
            src="https://daypay.vercel.app"
            className="w-full h-full"
            loading="lazy"
            allow="clipboard-write"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
