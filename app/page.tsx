import HeroSection from '@/components/HeroSection';
import CategoryTile from '@/components/CategoryTile';
import InventoryNotice from '@/components/InventoryNotice';
import { categories } from '@/lib/data';

export default function Home() {
  return <>
    <HeroSection />
    <div className="container mx-auto px-4 pb-16"><InventoryNotice /></div>
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-3">What we collect</h2>
      <p className="text-text-secondary text-center mb-8">Trading card games and baseball, brought together at Rally Point.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{categories.map(category => <CategoryTile key={category.slug} category={category} />)}</div>
    </section>
  </>;
}
