import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-12 md:py-20 text-center">
        {/* Logo */}
        <Image
          src="/header-logo.png"
          alt="Rally Point TCG"
          width={900}
          height={250}
          className="mx-auto w-full max-w-xl aspect-[3/1] object-cover mb-10"
          priority
        />

        {/* Tagline */}
        <h1 className="text-lg md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Veteran Owned. Mission Ready. <span className="text-brand-gold font-bold">Game On.</span>
        </h1>

        {/* Description */}
        <p className="text-text-secondary mb-10 max-w-xl mx-auto">
          Your mission: Build the ultimate trading card collection. Our mission: Get you there.
        </p>

        {/* CTA Button */}
        <Link href="/shop" className="inline-block px-8 py-4 bg-brand-gold text-dark-bg font-bold text-lg rounded-lg hover:shadow-brand-gold-lg transform hover:scale-105 transition-all duration-300">
            EXPLORE RALLY POINT
        </Link>
      </div>
    </div>
  );
}
