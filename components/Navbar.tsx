'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { categories } from '@/lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <nav aria-label="Main navigation" className="sticky top-0 z-50 border-b border-brand-gold/20 bg-dark-surface/95 backdrop-blur">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" aria-label="Rally Point TCG home"><Image src="/header-logo.png" alt="Rally Point TCG" width={240} height={70} className="w-40 sm:w-52 h-14 sm:h-16 object-cover" priority /></Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">Home</Link><Link href="/shop">Collection</Link>
          <details className="relative"><summary className="cursor-pointer text-brand-gold">Categories</summary><div className="absolute right-0 mt-3 w-52 rounded-lg border border-brand-gold/30 bg-dark-card p-2">{categories.map(c => <Link key={c.slug} href={`/categories/${c.slug}`} className="block p-3 hover:text-brand-gold">{c.name}</Link>)}</div></details>
          <Link href="/about">About</Link>
        </div>
        <button className="md:hidden p-3 text-brand-gold" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <div id="mobile-navigation" hidden={!open} className="md:hidden pt-4">
        {[{slug:'',name:'Home'}, {slug:'shop',name:'Collection'}, ...categories.map(c => ({slug:`categories/${c.slug}`,name:c.name})), {slug:'about',name:'About'}].map(link => <Link key={link.slug} href={`/${link.slug}`} onClick={() => setOpen(false)} className="block py-3 text-text-secondary hover:text-brand-gold">{link.name}</Link>)}
      </div>
    </div>
  </nav>;
}
