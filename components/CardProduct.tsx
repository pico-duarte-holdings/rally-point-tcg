import Link from 'next/link';
import { Card } from '@/lib/types';

export default function CardProduct({card}: {card: Card}) {
  return <Link href={`/shop/${card.id}`} className="block p-5 bg-dark-card rounded-lg border border-brand-gold/20 hover:border-brand-gold">
    <h2 className="text-xl font-bold mb-2">{card.name}</h2>
    <p className="text-text-secondary">{card.game} · {card.set}</p>
    <p className="text-text-secondary">{card.condition}</p>
    <p className="text-brand-gold mt-3">View card details</p>
  </Link>;
}
