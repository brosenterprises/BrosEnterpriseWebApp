/**
 * Product Data Service
 * Centralized product data management following industry standards
 */

import { Product, ProductCategory, CategoryInfo } from '../types/product.types';
import {
  Palette as PaletteIcon,
  Build as BuildIcon,
  Bathtub as BathtubIcon,
  ElectricalServices as ElectricalIcon,
  HomeRepairService as TilingIcon,
  Category as MiscIcon,
} from '@mui/icons-material';

// Category Configuration
export const CATEGORIES: Record<ProductCategory, CategoryInfo> = {
  paints: {
    id: 'paints',
    name: 'paints',
    displayName: 'Paints & Coatings',
    description: 'Premium quality paints, primers, and coating solutions for interior and exterior applications',
    icon: PaletteIcon,
    color: '#FF5722',
    path: '/paints',
    subcategories: ['Interior Paints', 'Exterior Paints', 'Primers', 'Tools & Accessories']
  },
  hardware: {
    id: 'hardware',
    name: 'hardware',
    displayName: 'Hardware & Tools',
    description: 'Complete range of construction hardware, fasteners, and professional tools',
    icon: BuildIcon,
    color: '#607D8B',
    path: '/hardware',
    subcategories: ['Fasteners', 'Tools', 'Cutting Equipment', 'Measuring Tools']
  },
  sanitary: {
    id: 'sanitary',
    name: 'sanitary',
    displayName: 'Sanitary & Plumbing',
    description: 'Modern sanitary ware, pipes, fittings, and plumbing solutions',
    icon: BathtubIcon,
    color: '#00BCD4',
    path: '/sanitary',
    subcategories: ['Pipes & Fittings', 'Water Tanks', 'Bathroom Fittings', 'Plumbing Accessories']
  },
  electricals: {
    id: 'electricals',
    name: 'electricals',
    displayName: 'Electrical Solutions',
    description: 'Comprehensive electrical components, wiring solutions, and safety equipment',
    icon: ElectricalIcon,
    color: '#FFC107',
    path: '/electricals',
    subcategories: ['Wiring & Cables', 'Junction Boxes', 'MCB Boxes', 'Electrical Accessories']
  },
  tiling_solutions: {
    id: 'tiling_solutions',
    name: 'tiling_solutions',
    displayName: 'Tiling Solutions',
    description: 'Professional tiling materials, adhesives, grouts, and finishing solutions',
    icon: TilingIcon,
    color: '#795548',
    path: '/tiling-solutions',
    subcategories: ['Adhesives', 'Grouts', 'Cleaners', 'Sealants']
  },
  misc: {
    id: 'misc',
    name: 'misc',
    displayName: 'Miscellaneous',
    description: 'Additional construction materials, chemicals, and specialty products',
    icon: MiscIcon,
    color: '#9C27B0',
    path: '/miscellaneous',
    subcategories: ['Adhesives', 'Chemicals', 'Protective Materials', 'Specialty Items']
  }
};

// Product Data - Generated from actual assets
export const PRODUCTS: Product[] = [
  // PAINTS CATEGORY
  {
    id: 'paint-001',
    name: 'Asian Paints Royale',
    description: 'Premium interior emulsion paint with superior finish and durability',
    image: '/src/assets/img/paints/asianPaints_Royale.webp',
    category: 'paints',
    subcategory: 'Interior Paints',
    brand: 'Asian Paints',
    features: ['Premium Quality', 'Smooth Finish', 'Long Lasting', 'Easy Application'],
    availability: 'in-stock',
    tags: ['interior', 'premium', 'emulsion'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-002',
    name: 'Asian Paints Apex',
    description: 'Weather-resistant exterior paint for long-lasting protection',
    image: '/src/assets/img/paints/asianPaints_APEX.webp',
    category: 'paints',
    subcategory: 'Exterior Paints',
    brand: 'Asian Paints',
    features: ['Weather Resistant', 'UV Protection', 'Fade Resistant', 'Durable'],
    availability: 'in-stock',
    tags: ['exterior', 'weather-resistant', 'durable'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-003',
    name: 'Berger Weathercoat',
    description: 'Advanced exterior paint with superior weather protection',
    image: '/src/assets/img/paints/berger-weathercoat.png',
    category: 'paints',
    subcategory: 'Exterior Paints',
    brand: 'Berger',
    features: ['All Weather Protection', 'Anti-Algal', 'Crack Resistance', 'Long Life'],
    availability: 'in-stock',
    tags: ['exterior', 'weatherproof', 'anti-algal'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-004',
    name: 'Berger Bison Acrylic Distemper',
    description: 'High-quality acrylic distemper for interior walls',
    image: '/src/assets/img/paints/berger_bison.png',
    category: 'paints',
    subcategory: 'Interior Paints',
    brand: 'Berger',
    features: ['Acrylic Based', 'Washable', 'Smooth Finish', 'Good Coverage'],
    availability: 'in-stock',
    tags: ['interior', 'acrylic', 'washable'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-005',
    name: 'Birla Opus Elegance',
    description: 'Luxury interior paint with elegant finish',
    image: '/src/assets/img/paints/Birla-Opus-elegance.png',
    category: 'paints',
    subcategory: 'Interior Paints',
    brand: 'Birla Opus',
    features: ['Luxury Finish', 'Rich Colors', 'Premium Quality', 'Elegant Look'],
    availability: 'in-stock',
    tags: ['luxury', 'interior', 'premium'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-006',
    name: 'Paint Brush Set',
    description: 'Professional paint brushes for smooth application',
    image: '/src/assets/img/paints/brush.jpeg',
    category: 'paints',
    subcategory: 'Tools & Accessories',
    features: ['Professional Grade', 'Smooth Application', 'Durable Bristles', 'Multiple Sizes'],
    availability: 'in-stock',
    tags: ['tools', 'brushes', 'accessories'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-007',
    name: 'Paint Roller',
    description: 'High-quality paint roller for even coverage',
    image: '/src/assets/img/paints/roller.jpg',
    category: 'paints',
    subcategory: 'Tools & Accessories',
    features: ['Even Coverage', 'Professional Quality', 'Easy to Use', 'Lint Free'],
    availability: 'in-stock',
    tags: ['tools', 'roller', 'accessories'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-008',
    name: 'Wall Putty',
    description: 'Premium wall putty for smooth wall preparation',
    image: '/src/assets/img/paints/putty.jpeg',
    category: 'paints',
    subcategory: 'Primers',
    features: ['Smooth Finish', 'Easy Application', 'Good Adhesion', 'Crack Filling'],
    availability: 'in-stock',
    tags: ['putty', 'primer', 'wall-preparation'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // HARDWARE CATEGORY
  {
    id: 'hardware-001',
    name: 'Steel Clamps',
    description: 'Heavy-duty steel clamps for construction and woodworking',
    image: '/src/assets/img/hardware/clamps.webp',
    category: 'hardware',
    subcategory: 'Tools',
    features: ['Heavy Duty', 'Corrosion Resistant', 'Strong Grip', 'Durable'],
    availability: 'in-stock',
    tags: ['clamps', 'steel', 'construction'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'hardware-002',
    name: 'Assorted Screws',
    description: 'High-quality screws for various construction applications',
    image: '/src/assets/img/hardware/screws.jpeg',
    category: 'hardware',
    subcategory: 'Fasteners',
    features: ['Multiple Sizes', 'Corrosion Resistant', 'High Strength', 'Versatile'],
    availability: 'in-stock',
    tags: ['screws', 'fasteners', 'construction'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'hardware-003',
    name: 'Cutting Blades - Long',
    description: 'Professional cutting blades for precision cutting',
    image: '/src/assets/img/hardware/cutting_blade_long.jpg',
    category: 'hardware',
    subcategory: 'Cutting Equipment',
    features: ['Sharp Edge', 'Durable', 'Precision Cutting', 'Professional Grade'],
    availability: 'in-stock',
    tags: ['cutting', 'blades', 'tools'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'hardware-004',
    name: 'Measuring Tape',
    description: 'Professional measuring tape for accurate measurements',
    image: '/src/assets/img/hardware/inch_tape.jpeg',
    category: 'hardware',
    subcategory: 'Measuring Tools',
    features: ['Accurate Measurements', 'Durable', 'Easy to Read', 'Retractable'],
    availability: 'in-stock',
    tags: ['measuring', 'tape', 'tools'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // SANITARY CATEGORY
  {
    id: 'sanitary-001',
    name: 'Supreme PVC Pipes & Fittings',
    description: 'High-quality PVC pipes and fittings for plumbing applications',
    image: '/src/assets/img/sanitary/supreme_PVC_pipes_and_fittings.jpg',
    category: 'sanitary',
    subcategory: 'Pipes & Fittings',
    brand: 'Supreme',
    features: ['ISI Marked', 'Corrosion Resistant', 'Long Lasting', 'Easy Installation'],
    availability: 'in-stock',
    tags: ['pvc', 'pipes', 'plumbing'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sanitary-002',
    name: 'Ashirvad CPVC Pipes',
    description: 'Premium CPVC pipes for hot and cold water applications',
    image: '/src/assets/img/sanitary/ashirvad_cpvc_pipes.webp',
    category: 'sanitary',
    subcategory: 'Pipes & Fittings',
    brand: 'Ashirvad',
    features: ['Hot & Cold Water', 'Chemical Resistant', 'Long Life', 'Easy Joining'],
    availability: 'in-stock',
    tags: ['cpvc', 'pipes', 'hot-water'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sanitary-003',
    name: 'Supreme Water Tank',
    description: 'Durable water storage tank with UV protection',
    image: '/src/assets/img/sanitary/supreme_water_tank.webp',
    category: 'sanitary',
    subcategory: 'Water Tanks',
    brand: 'Supreme',
    features: ['UV Protected', 'Food Grade', 'Leak Proof', 'Long Lasting'],
    availability: 'in-stock',
    tags: ['water-tank', 'storage', 'uv-protected'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sanitary-004',
    name: 'Jaquar Diverter',
    description: 'Premium bathroom diverter for shower systems',
    image: '/src/assets/img/sanitary/jaquar_diverter.jpg',
    category: 'sanitary',
    subcategory: 'Bathroom Fittings',
    brand: 'Jaquar',
    features: ['Premium Quality', 'Smooth Operation', 'Corrosion Resistant', 'Modern Design'],
    availability: 'in-stock',
    tags: ['diverter', 'bathroom', 'premium'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ELECTRICALS CATEGORY
  {
    id: 'electrical-001',
    name: '6-Way MCB Box',
    description: 'Professional 6-way MCB distribution box',
    image: '/src/assets/img/electricals/6_Way_MCB_Box.jpg',
    category: 'electricals',
    subcategory: 'MCB Boxes',
    features: ['6 Way Distribution', 'Fire Retardant', 'Easy Installation', 'ISI Marked'],
    availability: 'in-stock',
    tags: ['mcb', 'distribution', 'electrical'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'electrical-002',
    name: '8-Way MCB Box',
    description: 'Heavy-duty 8-way MCB distribution box',
    image: '/src/assets/img/electricals/8_Way_MCB_Box.webp',
    category: 'electricals',
    subcategory: 'MCB Boxes',
    features: ['8 Way Distribution', 'Heavy Duty', 'Fire Retardant', 'Professional Grade'],
    availability: 'in-stock',
    tags: ['mcb', 'distribution', 'heavy-duty'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'electrical-003',
    name: 'Junction Box',
    description: 'Weatherproof junction box for electrical connections',
    image: '/src/assets/img/electricals/junction_box.jpg',
    category: 'electricals',
    subcategory: 'Junction Boxes',
    features: ['Weatherproof', 'Multiple Sizes', 'Easy Access', 'Durable'],
    availability: 'in-stock',
    tags: ['junction', 'weatherproof', 'electrical'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'electrical-004',
    name: 'Electrical Tapes',
    description: 'High-quality insulation tapes for electrical work',
    image: '/src/assets/img/electricals/tapes.avif',
    category: 'electricals',
    subcategory: 'Electrical Accessories',
    features: ['High Insulation', 'Adhesive', 'Multiple Colors', 'Professional Grade'],
    availability: 'in-stock',
    tags: ['tape', 'insulation', 'electrical'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // TILING SOLUTIONS CATEGORY
  {
    id: 'tiling-001',
    name: 'Laticrete Adhesive',
    description: 'Professional tile adhesive for strong bonding',
    image: '/src/assets/img/tiling_solutions/laticrete.webp',
    category: 'tiling_solutions',
    subcategory: 'Adhesives',
    brand: 'Laticrete',
    features: ['Strong Bond', 'Water Resistant', 'Easy Application', 'Professional Grade'],
    availability: 'in-stock',
    tags: ['adhesive', 'tiling', 'professional'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'tiling-002',
    name: 'Tile Grout',
    description: 'High-quality grout for tile finishing',
    image: '/src/assets/img/tiling_solutions/grout.webp',
    category: 'tiling_solutions',
    subcategory: 'Grouts',
    features: ['Stain Resistant', 'Multiple Colors', 'Easy Application', 'Durable'],
    availability: 'in-stock',
    tags: ['grout', 'tiling', 'finishing'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'tiling-003',
    name: 'Roff Tile Cleaner',
    description: 'Specialized cleaner for tiles and grout',
    image: '/src/assets/img/tiling_solutions/roff_tile_cleaner.webp',
    category: 'tiling_solutions',
    subcategory: 'Cleaners',
    brand: 'Roff',
    features: ['Deep Cleaning', 'Grout Safe', 'Easy to Use', 'Effective'],
    availability: 'in-stock',
    tags: ['cleaner', 'tiles', 'maintenance'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // MISCELLANEOUS CATEGORY
  {
    id: 'misc-001',
    name: 'Fevicol Adhesive',
    description: 'Multi-purpose adhesive for various applications',
    image: '/src/assets/img/misc/Fevicol.webp',
    category: 'misc',
    subcategory: 'Adhesives',
    brand: 'Fevicol',
    features: ['Multi-Purpose', 'Strong Bond', 'Easy Application', 'Trusted Brand'],
    availability: 'in-stock',
    tags: ['adhesive', 'multipurpose', 'fevicol'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'misc-002',
    name: 'Dr. Fixit Pidiproof',
    description: 'Waterproofing solution for construction',
    image: '/src/assets/img/misc/Dr._Fixit_Pidiproof.jpg',
    category: 'misc',
    subcategory: 'Chemicals',
    brand: 'Dr. Fixit',
    features: ['Waterproofing', 'Long Lasting', 'Easy Application', 'Effective'],
    availability: 'in-stock',
    tags: ['waterproofing', 'construction', 'chemical'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'misc-003',
    name: 'Tarpaulin Sheets',
    description: 'Heavy-duty tarpaulin for protection and covering',
    image: '/src/assets/img/misc/tripals.jpg',
    category: 'misc',
    subcategory: 'Protective Materials',
    features: ['Waterproof', 'Heavy Duty', 'UV Resistant', 'Multiple Sizes'],
    availability: 'in-stock',
    tags: ['tarpaulin', 'protection', 'waterproof'],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Utility functions for product management
export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return PRODUCTS.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find(product => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.brand?.toLowerCase().includes(lowercaseQuery) ||
    product.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getProductsBySubcategory = (category: ProductCategory, subcategory: string): Product[] => {
  return PRODUCTS.filter(product => 
    product.category === category && product.subcategory === subcategory
  );
};

export const getAllCategories = (): CategoryInfo[] => {
  return Object.values(CATEGORIES);
};

export const getCategoryInfo = (category: ProductCategory): CategoryInfo => {
  return CATEGORIES[category];
};
