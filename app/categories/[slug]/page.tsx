import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cards, categories } from '@/lib/data';
import CardProduct from '@/components/CardProduct';
import InventoryNotice from '@/components/InventoryNotice';

export default async function CategoryPage({params}: {params: Promise<{slug: string}>}) {
  const { slug } = await params;
  const category = categories.find(c => c.slug === slug);
  if (!category) notFound();
  const matches = cards.filter(c => c.game === category.name);
  return <div className="container mx-auto px-4 py-12">
    <Link href="/shop" className="text-brand-gold underline">All categories</Link>
    <h1 className="text-4xl font-bold text-center my-8">{category.name}</h1>
    {matches.length === 0 ? <InventoryNotice /> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{matches.map(card => <CardProduct key={card.id} card={card} />)}</div>}
  </div>;
}
