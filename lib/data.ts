import { Card, Category } from './types';

// Only verified public catalog records belong here. Never publish acquisition
// costs, customer information, or marketplace credentials in this client data.
export const cards: Card[] = [];

export const categories: Category[] = [
  { slug: 'pokemon', name: 'Pokémon', description: 'Pokémon trading cards', icon: '⚡' },
  { slug: 'onepiece', name: 'One Piece', description: 'One Piece trading cards', icon: '🏴‍☠️' },
  { slug: 'lorcana', name: 'Lorcana', description: 'Disney Lorcana trading cards', icon: '✨' },
  { slug: 'baseball', name: 'Baseball', description: 'Baseball cards and collectibles', icon: '⚾' },
].map(category => ({ ...category, cardCount: cards.filter(card => card.game === category.name && card.quantity > 0).length }));
