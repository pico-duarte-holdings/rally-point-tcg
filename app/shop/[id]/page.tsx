import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cards } from '@/lib/data';

export default async function ProductDetail({params}: {params: Promise<{id: string}>}) {
  const { id } = await params;
  const card = cards.find(c => c.id === id);
  if (!card) notFound();
  return <div className="container mx-auto px-4 py-12 max-w-3xl">
    <Link href="/shop" className="text-brand-gold underline">Back to collection</Link>
    <h1 className="text-4xl font-bold my-6">{card.name}</h1>
    <p className="text-text-secondary mb-4">{card.game} · {card.set} · {card.condition}</p>
    <p>{card.description}</p>
    <p className="mt-8 text-brand-gold">Online ordering is not open yet.</p>
  </div>;
}
