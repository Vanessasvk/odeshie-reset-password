export interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  text: string;
  date: string;
  helpful: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  details: string[];
  images: string[];
  reviews_data: Review[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kente Cloth Luxury Scarf',
    category: 'Textiles',
    price: 450,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/kente-cloth-scarf-fKZaTeT37LPj52i3xoXpVX.webp',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    description: 'Experience the timeless elegance of authentic Kente cloth. This luxury scarf is handwoven using traditional techniques passed down through generations. Each piece tells a story of African heritage and craftsmanship.',
    details: ['Handwoven authentic Kente cloth', 'Dimensions: 72" x 24"', 'Material: 100% premium cotton', 'Traditional Ghanaian craftsmanship', 'Perfect for formal and casual wear', 'Dry clean recommended', 'Includes gift packaging'],
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/kente-cloth-scarf-fKZaTeT37LPj52i3xoXpVX.webp'],
    reviews_data: [
      { id: '1', author: 'Sarah M.', rating: 5, title: 'Absolutely stunning!', text: 'The quality is exceptional. The colors are vibrant and the craftsmanship is evident in every thread. Worth every penny!', date: '2 weeks ago', helpful: 24 },
      { id: '2', author: 'James K.', rating: 5, title: 'Perfect gift', text: 'Purchased this for my wife and she loves it. The authenticity and quality make it a true luxury piece.', date: '1 month ago', helpful: 18 },
      { id: '3', author: 'Amara N.', rating: 4, title: 'Beautiful with minor issues', text: 'Love the scarf but it arrived with a small loose thread. Customer service was helpful in resolving it.', date: '1 month ago', helpful: 12 },
    ],
  },
  {
    id: '2',
    name: 'Adire Indigo Wrap',
    category: 'Textiles',
    price: 380,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/adire-indigo-wrap-2g6vMkv6NzQc95zaYVAQZJ.webp',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    description: 'Indigo-dyed Adire cloth represents centuries of Nigerian textile tradition. This wrap showcases intricate patterns created through traditional resist-dyeing techniques.',
    details: ['Traditional Nigerian Adire cloth', 'Dimensions: 60" x 48"', 'Material: 100% cotton', 'Hand-dyed with natural indigo', 'Versatile styling options', 'Machine washable (cold water)', 'Eco-friendly production'],
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/adire-indigo-wrap-2g6vMkv6NzQc95zaYVAQZJ.webp'],
    reviews_data: [
      { id: '1', author: 'Zainab A.', rating: 5, title: 'Authentic and beautiful', text: 'This is exactly what I was looking for. The indigo color is rich and the pattern is intricate.', date: '3 weeks ago', helpful: 15 },
      { id: '2', author: 'David L.', rating: 5, title: 'Great quality', text: 'Exceeded my expectations. The craftsmanship is outstanding.', date: '1 month ago', helpful: 10 },
    ],
  },
  {
    id: '3',
    name: 'Bogolan Mud Cloth Tapestry',
    category: 'Home Decor',
    price: 520,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/bogolan-throw-EjRjKZPGg3kZ725piexwWw.webp',
    rating: 4.7,
    reviews: 56,
    inStock: true,
    description: 'Authentic Malian Bogolan mud cloth tapestry featuring bold geometric patterns. Each piece is hand-painted using fermented mud and natural dyes in a centuries-old tradition.',
    details: ['Authentic Malian Bogolan mud cloth', 'Dimensions: 50" x 60"', 'Hand-painted with natural mud dyes', 'One-of-a-kind pattern', 'Suitable as wall hanging or throw', 'Spot clean only'],
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/bogolan-throw-EjRjKZPGg3kZ725piexwWw.webp'],
    reviews_data: [
      { id: '1', author: 'Marie T.', rating: 5, title: 'Stunning centerpiece', text: 'Hung this in my living room and it transformed the space. The patterns are mesmerizing.', date: '1 month ago', helpful: 20 },
    ],
  },
  {
    id: '4',
    name: 'Ankara Dress Fabric',
    category: 'Textiles',
    price: 680,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/ankara-dress-fabric-R8FXadUa2iYBzsaiJSu6Fe.webp',
    rating: 4.9,
    reviews: 142,
    inStock: true,
    description: 'Vibrant Dutch wax Ankara print fabric perfect for creating stunning dresses and garments. This premium fabric features bold, colorful patterns inspired by West African design traditions.',
    details: ['100% cotton Dutch wax print', 'Width: 45 inches', 'Length: 6 yards', 'Colorfast and pre-shrunk', 'Machine washable', 'Suitable for dressmaking and tailoring'],
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/ankara-dress-fabric-R8FXadUa2iYBzsaiJSu6Fe.webp'],
    reviews_data: [
      { id: '1', author: 'Chioma E.', rating: 5, title: 'Perfect quality', text: 'Made two dresses from this fabric and they came out beautifully. The colors are exactly as shown.', date: '2 weeks ago', helpful: 32 },
    ],
  },
  {
    id: '5',
    name: 'Shweshwe Fabric',
    category: 'Textiles',
    price: 95,
    image: '/assets/images/image16.jpg',
    rating: 4.6,
    reviews: 203,
    inStock: true,
    description: 'Traditional South African Shweshwe fabric with distinctive printed geometric patterns. This iconic cotton fabric is beloved for its bold designs and cultural significance.',
    details: ['Authentic South African Shweshwe', 'Width: 36 inches', 'Length: 3 yards', '100% cotton', 'Machine washable', 'Traditional geometric patterns'],
    images: ['/assets/images/image16.jpg'],
    reviews_data: [
      { id: '1', author: 'Nomsa D.', rating: 5, title: 'Authentic Shweshwe', text: 'Finally found genuine Shweshwe fabric. The quality is top notch and the pattern is beautiful.', date: '1 week ago', helpful: 45 },
    ],
  },
  {
    id: '6',
    name: 'Kente Jewelry Scarf',
    category: 'Jewelry',
    price: 1200,
    image: '/assets/images/Container5.jpg',
    rating: 5.0,
    reviews: 78,
    inStock: false,
    description: 'An extraordinary fusion of Kente weaving and fine jewelry, this statement piece blends traditional Ghanaian craftsmanship with luxury accessories.',
    details: ['Gold and silk thread construction', 'Hand-crafted in Ghana', 'Length: 18 inches', 'Adjustable clasp', 'Comes in luxury gift box', 'Certificate of authenticity included'],
    images: ['/assets/images/Container5.jpg'],
    reviews_data: [
      { id: '1', author: 'Ama O.', rating: 5, title: 'Absolutely breathtaking', text: 'This piece is a work of art. The craftsmanship is impeccable and it draws compliments everywhere I wear it.', date: '3 weeks ago', helpful: 28 },
    ],
  },
  {
    id: '7',
    name: 'Batik Silk Scarf',
    category: 'Accessories',
    price: 420,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/batik-silk-scarf-abD6qGPVEb5W9Vckc5i7AL.webp',
    rating: 4.8,
    reviews: 45,
    inStock: true,
    description: 'Luxurious hand-batik silk scarf combining traditional African wax-resist dyeing with premium silk. Each scarf is a unique wearable artwork.',
    details: ['100% pure silk', 'Hand-batik dyed', 'Dimensions: 70" x 20"', 'Natural dyes', 'Dry clean recommended', 'Each piece is unique'],
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/batik-silk-scarf-abD6qGPVEb5W9Vckc5i7AL.webp'],
    reviews_data: [
      { id: '1', author: 'Fatima B.', rating: 5, title: 'Silky smooth and beautiful', text: 'The quality of the silk is outstanding. The batik pattern is intricate and the colors are gorgeous.', date: '2 months ago', helpful: 19 },
    ],
  },
  {
    id: '8',
    name: 'Kente Cushion Cover',
    category: 'Home Decor',
    price: 890,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/kente-cushion-cover-3xSKLVmVDXPavWQYijEdme.webp',
    rating: 4.9,
    reviews: 67,
    inStock: true,
    description: 'Authentic handwoven Kente cloth cushion cover that brings a touch of Ghanaian royalty to your home. The vibrant colors and intricate patterns elevate any living space.',
    details: ['Handwoven Kente cloth cover', 'Size: 18" x 18"', 'Zipper closure', 'Cover only (insert not included)', 'Spot clean recommended', 'Handmade in Ghana'],
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/kente-cushion-cover-3xSKLVmVDXPavWQYijEdme.webp'],
    reviews_data: [
      { id: '1', author: 'Kwame A.', rating: 5, title: 'Transforms the room', text: 'Added three of these to my sofa and my living room looks completely transformed. Guests always ask about them.', date: '3 weeks ago', helpful: 22 },
    ],
  },
  {
    id: '9',
    name: 'Adire Headwrap',
    category: 'Accessories',
    price: 150,
    image: '/assets/images/Rectangle58.jpg',
    rating: 4.7,
    reviews: 91,
    inStock: true,
    description: 'Stunning Adire-print headwrap crafted from traditional Nigerian resist-dyed fabric. This versatile accessory can be styled in multiple ways for any occasion.',
    details: ['Traditional Adire print fabric', 'Dimensions: 72" x 22"', '100% cotton', 'Hand-dyed with natural indigo', 'Multiple styling options', 'Machine washable (cold)'],
    images: ['/assets/images/Rectangle58.jpg'],
    reviews_data: [
      { id: '1', author: 'Aisha M.', rating: 5, title: 'Love this headwrap!', text: 'The fabric is so soft and the pattern is gorgeous. I wear it almost every day.', date: '1 week ago', helpful: 37 },
    ],
  },
  {
    id: '10',
    name: 'Bogolan Wall Hanging',
    category: 'Home Decor',
    price: 650,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/bogolan-wall-hanging-Qxk7b5KHzrCwTxzZuoNnQR.webp',
    rating: 4.8,
    reviews: 34,
    inStock: true,
    description: 'Large-format Bogolan mud cloth wall hanging that makes a bold statement in any space. Handcrafted by master artisans in Mali using centuries-old techniques.',
    details: ['Authentic Malian Bogolan cloth', 'Dimensions: 40" x 60"', 'Includes hanging hardware', 'Hand-painted with fermented mud', 'Unique geometric patterns', 'Spot clean only'],
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/bogolan-wall-hanging-Qxk7b5KHzrCwTxzZuoNnQR.webp'],
    reviews_data: [
      { id: '1', author: 'Elena P.', rating: 5, title: 'Gallery-worthy piece', text: 'This is truly a work of art. The detail in the mud cloth painting is extraordinary.', date: '2 months ago', helpful: 14 },
    ],
  },
  {
    id: '11',
    name: 'Ankara Print Dress',
    category: 'Fashion',
    price: 320,
    image: '/assets/images/Rectangle6.jpg',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    description: 'Bold and beautiful Ankara print dress featuring a vibrant Dutch wax pattern. This ready-to-wear design combines African fashion heritage with modern silhouettes.',
    details: ['100% cotton Ankara print', 'Available in sizes XS–XL', 'Machine washable', 'Hidden side zipper', 'Fully lined', 'Made in West Africa'],
    images: ['/assets/images/Rectangle6.jpg'],
    reviews_data: [
      { id: '1', author: 'Bola A.', rating: 5, title: 'Stunning dress!', text: 'Got so many compliments at the event I wore this to. The fit is perfect and the colors are so vibrant.', date: '2 weeks ago', helpful: 41 },
    ],
  },
  {
    id: '12',
    name: 'Zulu Beaded Necklace',
    category: 'Jewelry',
    price: 550,
    image: '/assets/images/Rectangle2-1.jpg',
    rating: 4.8,
    reviews: 91,
    inStock: true,
    description: 'Authentic Zulu beaded necklace handcrafted by skilled artisans in South Africa. Each bead is individually placed following traditional Zulu color-coding traditions.',
    details: ['Hand-beaded by Zulu artisans', 'Length: 16 inches', 'Glass seed beads', 'Traditional Zulu patterns', 'Lobster claw clasp', 'Certificate of authenticity'],
    images: ['/assets/images/Rectangle2-1.jpg'],
    reviews_data: [
      { id: '1', author: 'Thandi N.', rating: 5, title: 'Authentic and gorgeous', text: 'As someone who grew up with Zulu beadwork, I can confirm this is the real deal. Excellent craftsmanship.', date: '1 month ago', helpful: 33 },
    ],
  },
  {
    id: '13',
    name: 'Kente Ceremonial Cloth',
    category: 'Textiles',
    price: 780,
    image: '/assets/images/Rectangle60.jpg',
    rating: 5.0,
    reviews: 34,
    inStock: true,
    description: 'Premium ceremonial Kente cloth reserved for special occasions and celebrations. Hand-woven by master weavers in Bonwire, Ghana — the birthplace of Kente.',
    details: ['Master-woven ceremonial Kente', 'Dimensions: 24" x 144"', '100% premium silk-cotton blend', 'Traditional Bonwire craftsmanship', 'Suitable for weddings and ceremonies', 'Dry clean only', 'Includes authenticity certificate'],
    images: ['/assets/images/Rectangle60.jpg'],
    reviews_data: [
      { id: '1', author: 'Kofi A.', rating: 5, title: 'Heirloom quality', text: 'Wore this at my graduation ceremony. The quality is extraordinary — this will be passed down in my family.', date: '3 months ago', helpful: 29 },
    ],
  },
  {
    id: '14',
    name: 'Moroccan Leather Pouf',
    category: 'Home Decor',
    price: 340,
    image: '/assets/images/Rectangle10.jpg',
    rating: 4.6,
    reviews: 112,
    inStock: true,
    description: 'Handcrafted Moroccan leather pouf featuring traditional geometric embroidery. Made by skilled leather artisans in Fez using tanned leather and intricate hand-stitching.',
    details: ['Hand-stitched genuine leather', 'Diameter: 20 inches, Height: 14 inches', 'Traditional Fez craftsmanship', 'Filled with natural materials', 'Suitable as ottoman or seat', 'Spot clean only'],
    images: ['/assets/images/Rectangle10.jpg'],
    reviews_data: [
      { id: '1', author: 'Yasmine H.', rating: 5, title: 'Beautiful and sturdy', text: 'This pouf is exactly as pictured. The leather quality is excellent and the embroidery is detailed.', date: '3 weeks ago', helpful: 26 },
    ],
  },
];

export const PRODUCTS_MAP: Record<string, Product> = Object.fromEntries(
  PRODUCTS.map((p) => [p.id, p])
);
