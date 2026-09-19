export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image?: string;
  description?: string;
  createdAt: string;
}

// In-memory "database" for demo purposes.
// Swap this module for a real DB call, the route handlers stay the same.
const products: Product[] = [
  {
    id: "1",
    name: "Aurora Mechanical Keyboard",
    category: "Electronics",
    price: 89.99,
    stock: 24,
    image: "https://picsum.photos/seed/keyboard/600/400",
    description: "Hot-swappable mechanical keyboard with RGB backlight.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
  },
  {
    id: "2",
    name: "Nimbus Wireless Mouse",
    category: "Electronics",
    price: 34.5,
    stock: 58,
    image: "https://picsum.photos/seed/mouse/600/400",
    description: "Ergonomic wireless mouse with silent clicks.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4).toISOString(),
  },
  {
    id: "3",
    name: "Ceramic Pour-Over Set",
    category: "Home",
    price: 42.0,
    stock: 12,
    image: "https://picsum.photos/seed/coffee/600/400",
    description: "Hand-glazed ceramic dripper and carafe set.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
  },
  {
    id: "4",
    name: "Trailhead Backpack 28L",
    category: "Outdoor",
    price: 119.0,
    stock: 8,
    image: "https://picsum.photos/seed/backpack/600/400",
    description: "Weatherproof daypack with laptop sleeve.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
  },
  {
    id: "5",
    name: "Linen Desk Lamp",
    category: "Home",
    price: 56.25,
    stock: 0,
    image: undefined,
    description: "Warm-dimmable lamp with a linen shade.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function createProduct(input: Omit<Product, "id" | "createdAt">) {
  const product: Product = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  products.unshift(product);
  return product;
}

export function deleteProduct(id: string) {
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) return false;
  products.splice(idx, 1);
  return true;
}
