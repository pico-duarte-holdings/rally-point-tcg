import Link from 'next/link';
export default function NotFound() {
  return <div className="container mx-auto px-4 py-20 text-center"><h1 className="text-3xl font-bold mb-4">Page not found</h1><p className="text-text-secondary mb-6">That card or page is not available.</p><Link href="/shop" className="text-brand-gold underline">Explore the collection</Link></div>;
}
