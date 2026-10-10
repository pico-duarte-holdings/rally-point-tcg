import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/lib/data';
export default function Footer() {
  return <footer className="border-t border-brand-gold/20 bg-dark-card mt-16">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div><Image src="/header-logo.png" alt="Rally Point TCG" width={280} height={80} className="w-60 max-w-full h-20 object-cover mb-4" /><p className="text-text-secondary">Veteran Owned. Mission Ready. Game On.</p><a href="https://www.instagram.com/rallypointtcg" className="inline-block mt-4 text-brand-gold">@rallypointtcg on Instagram</a></div>
      <div><h2 className="font-bold text-brand-gold mb-4">Explore</h2><ul className="space-y-3"><li><Link href="/shop">Collection</Link></li><li><Link href="/about">About Rally Point</Link></li>{categories.map(c => <li key={c.slug}><Link href={`/categories/${c.slug}`}>{c.name}</Link></li>)}</ul></div>
      <div><h2 className="font-bold text-brand-gold mb-4">Get in touch</h2><a href="mailto:support@rallypointtcg.com" className="break-words">support@rallypointtcg.com</a><p className="text-text-secondary mt-4">Online ordering is not open yet.</p><ul className="space-y-3 mt-6"><li><a href="/privacy.html">Privacy Policy</a></li><li><a href="/terms.html">Terms of Service</a></li></ul></div>
    </div>
    <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-text-secondary space-y-2">
      <p><a href="https://picoduarte.org" className="text-brand-gold hover:underline">A Pico Duarte Holdings LLC company</a></p>
      <p>© {new Date().getFullYear()} Pico Duarte Holdings LLC. All rights reserved.</p>
    </div>
  </footer>;
}
