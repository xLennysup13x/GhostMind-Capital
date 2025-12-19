export type Product = {
  id: string;
  name: string;
  price: number;
  img: string;
  sizes: string[];
};

export const products: Product[] = [
  { id: 'hood-001', name: 'Ghost Hoodie', price: 89, img: '/img/hoodie.jpg', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 'tee-002', name: 'Mind Tee', price: 45, img: '/img/tee.jpg', sizes: ['S', 'M', 'L'] },
  { id: 'cap-003', name: 'Ghost Cap', price: 32, img: '/img/cap.jpg', sizes: ['ONE'] },
];