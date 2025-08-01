import { CheckCircle } from "lucide-react";

const features = [
  "No Sign-Up Required",
  "100% Serverless",
  "Multi-Chain Support",
  "PWA Installable",
  "Real-Time QR Generation",
  "White-label Ready",
];

export default function Features() {
  return (
    <section className="w-full bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Built for Privacy and Speed
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          DayPay gives you everything you need to receive crypto — instantly, anonymously, and without backend.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <CheckCircle className="text-green-400 w-6 h-6" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
