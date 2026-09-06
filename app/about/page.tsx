import Link from 'next/link';
export default function AboutPage() {
  return <article className="container mx-auto px-4 py-16 max-w-3xl">
    <p className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-4">Veteran owned · Collector driven</p>
    <h1 className="text-4xl md:text-5xl font-bold mb-8">Welcome to Rally Point TCG.</h1>
    <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
      <p>Rally Point TCG brings together a love of trading cards and the care and attention we bring to our military service.</p>
      <p>A rally point is a place to regroup. For us, it’s also a place for Pokémon, One Piece, Lorcana, and baseball collectors to find their next card.</p>
      <p>We’re preparing our collection for sale, with clear card identification, condition descriptions, and photos. Our online store will open once the inventory is ready.</p>
      <p>Have a question about Rally Point? <a href="mailto:support@rallypointtcg.com" className="text-brand-gold underline">Email us</a>.</p>
    </div>
    <Link href="/shop" className="inline-block mt-10 px-6 py-3 bg-brand-gold text-dark-bg rounded-lg font-bold">Explore the collection</Link>
  </article>;
}
