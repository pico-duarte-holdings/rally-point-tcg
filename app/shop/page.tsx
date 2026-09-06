import InventoryNotice from '@/components/InventoryNotice';
import CardProduct from '@/components/CardProduct';
import { cards } from '@/lib/data';

export default function ShopPage() {
  return <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-center mb-8">Our <span className="text-brand-gold">Collection</span></h1>
    {cards.length === 0 ? <InventoryNotice /> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{cards.map(card => <CardProduct key={card.id} card={card} />)}</div>}
  </div>;
}
