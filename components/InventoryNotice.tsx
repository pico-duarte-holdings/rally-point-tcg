import Link from 'next/link';

export default function InventoryNotice() {
  return <section className="rounded-xl border border-brand-gold/30 bg-dark-card p-8 md:p-12 text-center max-w-3xl mx-auto">
    <p className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3">The next chapter of Rally Point</p>
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Our collection is getting ready.</h2>
    <p className="text-text-secondary leading-relaxed mb-6">We’re organizing and photographing our cards. Verified listings will appear here when they’re ready. Online ordering is not open yet.</p>
    <a className="inline-block bg-brand-gold text-dark-bg px-6 py-3 rounded-lg font-bold" href="mailto:support@rallypointtcg.com">Contact Rally Point</a>
    <Link href="/about" className="inline-block px-6 py-3 text-brand-gold underline underline-offset-4">Our story</Link>
  </section>;
}
