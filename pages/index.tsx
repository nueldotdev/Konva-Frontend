// import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`min-h-screen bg-black text-white flex flex-col ${geistSans.className} ${geistMono.className}`}>
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
          Instantly connect.  
          <span className="block text-cyan-400 mt-2">No cards. No typing.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-400">
          Blink is how modern humans exchange contact info — fast, effortless, unforgettable.
        </p>
        <div className="mt-8">
          <Link href="/signup" className="inline-block bg-cyan-400 hover:bg-pink-500 transition-colors text-black font-semibold py-3 px-6 rounded-full text-lg">
              Get Early Access
          </Link>
        </div>
      </section>

      {/* Why Blink Section */}
      <section className="py-20 bg-gray-900 text-center px-6">
        <h2 className="text-4xl font-bold mb-8">Why Blink?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-2xl hover:ring-2 hover:ring-cyan-400 transition">
            <h3 className="text-2xl font-semibold mb-4">Instant Exchange</h3>
            <p className="text-gray-400">
              No fumbling. No awkward typing. Just scan, tap, done.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl hover:ring-2 hover:ring-pink-500 transition">
            <h3 className="text-2xl font-semibold mb-4">Personalized Profiles</h3>
            <p className="text-gray-400">
              Create multiple cards for different contexts — work, social, side hustle.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl hover:ring-2 hover:ring-cyan-400 transition">
            <h3 className="text-2xl font-semibold mb-4">Stay Memorable</h3>
            <p className="text-gray-400">
              Leave a digital fingerprint that people actually *want* to keep.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center max-w-5xl mx-auto">
          <Step number={1} title="Create Your Blink" />
          <Step number={2} title="Share Instantly" />
          <Step number={3} title="Connect Effortlessly" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-cyan-400 text-black text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Ready to Blink into the future?</h2>
        <Link href="/signup" className="inline-block bg-black hover:bg-pink-500 hover:text-black transition-colors text-white font-semibold py-3 px-8 rounded-full text-lg">
            Join Early Access
        </Link>
      </section>
    </main>
  );
}

function Step({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-400 text-black font-bold text-2xl mb-4">
        {number}
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
    </div>
  );
}
