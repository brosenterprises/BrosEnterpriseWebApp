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

// Product Data - Generated from actual assets (ALL IMAGES)
export const PRODUCTS: Product[] = [
  // PAINTS CATEGORY - 20 products
  {
    id: 'paint-001',
    name: 'Asian Paints Royale',
    description: 'Premium interior emulsion paint with superior finish and durability',
    image: 'paints/asianPaints_Royale.webp',
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
    image: 'paints/asianPaints_APEX.webp',
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
    name: 'Asian Paints All Products Interior',
    description: 'Complete range of Asian Paints interior solutions',
    image: 'paints/asian-paints-all-product_interioirs.jpg',
    category: 'paints',
    subcategory: 'Interior Paints',
    brand: 'Asian Paints',
    features: ['Complete Range', 'Interior Solutions', 'Multiple Options', 'Quality Assured'],
    availability: 'in-stock',
    tags: ['interior', 'complete-range', 'asian-paints'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-004',
    name: 'Asian Paints Tractor Emulsion',
    description: 'High-quality tractor emulsion paint for interior walls',
    image: 'paints/assian-paint-tractor-immulsion.jpg',
    category: 'paints',
    subcategory: 'Interior Paints',
    brand: 'Asian Paints',
    features: ['Tractor Emulsion', 'Interior Walls', 'Good Coverage', 'Affordable'],
    availability: 'in-stock',
    tags: ['interior', 'emulsion', 'tractor'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-005',
    name: 'Berger Paint Premium',
    description: 'Premium quality Berger paint for superior finish',
    image: 'paints/berger-paint.jpg',
    category: 'paints',
    subcategory: 'Interior Paints',
    brand: 'Berger',
    features: ['Premium Quality', 'Superior Finish', 'Long Lasting', 'Trusted Brand'],
    availability: 'in-stock',
    tags: ['berger', 'premium', 'interior'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-006',
    name: 'Berger Anti-Dust Paint',
    description: 'Anti-dust technology paint for cleaner walls',
    image: 'paints/berger-paint_antidust.jpg',
    category: 'paints',
    subcategory: 'Interior Paints',
    brand: 'Berger',
    features: ['Anti-Dust Technology', 'Cleaner Walls', 'Easy Maintenance', 'Innovative'],
    availability: 'in-stock',
    tags: ['berger', 'anti-dust', 'technology'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-007',
    name: 'Berger Weathercoat',
    description: 'Advanced exterior paint with superior weather protection',
    image: 'paints/berger-weathercoat.png',
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
    id: 'paint-008',
    name: 'Berger Bison Acrylic Distemper',
    description: 'High-quality acrylic distemper for interior walls',
    image: 'paints/berger_bison.png',
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
    id: 'paint-009',
    name: 'Berger Easy Clean',
    description: 'Easy to clean paint with stain resistance',
    image: 'paints/berger_easyClean.jpg',
    category: 'paints',
    subcategory: 'Interior Paints',
    brand: 'Berger',
    features: ['Easy to Clean', 'Stain Resistant', 'Washable', 'Maintenance Free'],
    availability: 'in-stock',
    tags: ['berger', 'easy-clean', 'stain-resistant'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-010',
    name: 'Berger Luxol',
    description: 'Premium Luxol paint for elegant interiors',
    image: 'paints/berger_luxol.jpg',
    category: 'paints',
    subcategory: 'Interior Paints',
    brand: 'Berger',
    features: ['Premium Luxol', 'Elegant Finish', 'Rich Colors', 'Luxury Feel'],
    availability: 'in-stock',
    tags: ['berger', 'luxol', 'premium'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-011',
    name: 'Berger OBD Paint',
    description: 'One Brush Distemper for easy application',
    image: 'paints/berger-OBD.png',
    category: 'paints',
    subcategory: 'Interior Paints',
    brand: 'Berger',
    features: ['One Brush Application', 'Easy to Use', 'Good Coverage', 'Economical'],
    availability: 'in-stock',
    tags: ['berger', 'obd', 'distemper'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-012',
    name: 'Berger Red Oxide Primer',
    description: 'Anti-corrosive red oxide primer for metal surfaces',
    image: 'paints/berger_red_oxide.jpg',
    category: 'paints',
    subcategory: 'Primers',
    brand: 'Berger',
    features: ['Anti-Corrosive', 'Metal Protection', 'Red Oxide', 'Primer Coat'],
    availability: 'in-stock',
    tags: ['berger', 'primer', 'red-oxide'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-013',
    name: 'Birla Opus Paints Collection',
    description: 'Premium Birla Opus paint collection',
    image: 'paints/birla-opus-paints.jpeg',
    category: 'paints',
    subcategory: 'Interior Paints',
    brand: 'Birla Opus',
    features: ['Premium Collection', 'Multiple Options', 'Quality Assured', 'Modern Colors'],
    availability: 'in-stock',
    tags: ['birla-opus', 'collection', 'premium'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-014',
    name: 'Birla Opus Paints Range',
    description: 'Complete range of Birla Opus paints',
    image: 'paints/birla-opus-paints.jpg',
    category: 'paints',
    subcategory: 'Interior Paints',
    brand: 'Birla Opus',
    features: ['Complete Range', 'Premium Quality', 'Modern Shades', 'Durable Finish'],
    availability: 'in-stock',
    tags: ['birla-opus', 'range', 'premium'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-015',
    name: 'Birla Opus Elegance',
    description: 'Luxury interior paint with elegant finish',
    image: 'paints/Birla-Opus-elegance.png',
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
    id: 'paint-016',
    name: 'Birla Opus Style',
    description: 'Stylish paint collection for modern homes',
    image: 'paints/birla_opus_style.jpg',
    category: 'paints',
    subcategory: 'Interior Paints',
    brand: 'Birla Opus',
    features: ['Stylish Collection', 'Modern Homes', 'Contemporary Colors', 'Premium Quality'],
    availability: 'in-stock',
    tags: ['birla-opus', 'style', 'modern'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-017',
    name: 'Paint Brush Professional',
    description: 'Professional paint brushes for smooth application',
    image: 'paints/brush.jpeg',
    category: 'paints',
    subcategory: 'Tools & Accessories',
    features: ['Professional Grade', 'Smooth Application', 'Durable Bristles', 'Multiple Sizes'],
    availability: 'in-stock',
    tags: ['tools', 'brushes', 'accessories'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-018',
    name: 'Small Paint Brush',
    description: 'Small paint brush for detailed work',
    image: 'paints/paint_brush_small.webp',
    category: 'paints',
    subcategory: 'Tools & Accessories',
    features: ['Small Size', 'Detail Work', 'Precision Painting', 'Fine Bristles'],
    availability: 'in-stock',
    tags: ['tools', 'small-brush', 'detail'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-019',
    name: 'Wall Putty',
    description: 'Premium wall putty for smooth wall preparation',
    image: 'paints/putty.jpeg',
    category: 'paints',
    subcategory: 'Primers',
    features: ['Smooth Finish', 'Easy Application', 'Good Adhesion', 'Crack Filling'],
    availability: 'in-stock',
    tags: ['putty', 'primer', 'wall-preparation'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'paint-020',
    name: 'Paint Roller',
    description: 'High-quality paint roller for even coverage',
    image: 'paints/roller.jpg',
    category: 'paints',
    subcategory: 'Tools & Accessories',
    features: ['Even Coverage', 'Professional Quality', 'Easy to Use', 'Lint Free'],
    availability: 'in-stock',
    tags: ['tools', 'roller', 'accessories'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // HARDWARE CATEGORY - 8 products
  {
    id: 'hardware-001',
    name: 'Steel Clamps',
    description: 'Heavy-duty steel clamps for construction and woodworking',
    image: 'hardware/clamps.webp',
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
    name: 'Round Cutting Blades',
    description: 'Professional round cutting blades for precision cutting',
    image: 'hardware/cutting_blades_round.jpg',
    category: 'hardware',
    subcategory: 'Cutting Equipment',
    features: ['Round Design', 'Sharp Edge', 'Precision Cutting', 'Professional Grade'],
    availability: 'in-stock',
    tags: ['cutting', 'blades', 'round'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'hardware-003',
    name: 'Long Cutting Blades',
    description: 'Professional long cutting blades for extended cutting tasks',
    image: 'hardware/cutting_blade_long.jpg',
    category: 'hardware',
    subcategory: 'Cutting Equipment',
    features: ['Long Design', 'Sharp Edge', 'Extended Cutting', 'Professional Grade'],
    availability: 'in-stock',
    tags: ['cutting', 'blades', 'long'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'hardware-004',
    name: 'Hole Pass Tools',
    description: 'Specialized tools for creating clean holes in various materials',
    image: 'hardware/hole_pass.webp',
    category: 'hardware',
    subcategory: 'Tools',
    features: ['Clean Holes', 'Various Materials', 'Precision Tool', 'Professional Use'],
    availability: 'in-stock',
    tags: ['hole-pass', 'tools', 'precision'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'hardware-005',
    name: 'Measuring Tape',
    description: 'Professional measuring tape for accurate measurements',
    image: 'hardware/inch_tape.jpeg',
    category: 'hardware',
    subcategory: 'Measuring Tools',
    features: ['Accurate Measurements', 'Durable', 'Easy to Read', 'Retractable'],
    availability: 'in-stock',
    tags: ['measuring', 'tape', 'tools'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'hardware-006',
    name: 'Construction Nails',
    description: 'High-quality nails for construction and carpentry work',
    image: 'hardware/nails.webp',
    category: 'hardware',
    subcategory: 'Fasteners',
    features: ['High Quality', 'Construction Grade', 'Various Sizes', 'Corrosion Resistant'],
    availability: 'in-stock',
    tags: ['nails', 'fasteners', 'construction'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'hardware-007',
    name: 'Gypsum Screws',
    description: 'Specialized screws for gypsum board installation',
    image: 'hardware/screw_gypsum.webp',
    category: 'hardware',
    subcategory: 'Fasteners',
    features: ['Gypsum Specific', 'Easy Installation', 'Corrosion Resistant', 'Professional Grade'],
    availability: 'in-stock',
    tags: ['screws', 'gypsum', 'installation'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'hardware-008',
    name: 'Assorted Screws',
    description: 'High-quality screws for various construction applications',
    image: 'hardware/screws.jpeg',
    category: 'hardware',
    subcategory: 'Fasteners',
    features: ['Multiple Sizes', 'Corrosion Resistant', 'High Strength', 'Versatile'],
    availability: 'in-stock',
    tags: ['screws', 'fasteners', 'construction'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // SANITARY CATEGORY - 8 products
  {
    id: 'sanitary-001',
    name: 'Ashirvad CPVC Pipes',
    description: 'Premium CPVC pipes for hot and cold water applications',
    image: 'sanitary/ashirvad_cpvc_pipes.webp',
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
    id: 'sanitary-002',
    name: 'Astral CPVC Pipes',
    description: 'High-quality CPVC pipes from Astral for plumbing applications',
    image: 'sanitary/astral-cpvc-pipes.webp',
    category: 'sanitary',
    subcategory: 'Pipes & Fittings',
    brand: 'Astral',
    features: ['CPVC Material', 'Plumbing Grade', 'Durable', 'Easy Installation'],
    availability: 'in-stock',
    tags: ['astral', 'cpvc', 'pipes'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sanitary-003',
    name: 'Jaquar Diverter',
    description: 'Premium bathroom diverter for shower systems',
    image: 'sanitary/jaquar_diverter.jpg',
    category: 'sanitary',
    subcategory: 'Bathroom Fittings',
    brand: 'Jaquar',
    features: ['Premium Quality', 'Smooth Operation', 'Corrosion Resistant', 'Modern Design'],
    availability: 'in-stock',
    tags: ['diverter', 'bathroom', 'premium'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sanitary-004',
    name: 'Prince CPVC Pipes',
    description: 'Reliable CPVC pipes from Prince for water supply systems',
    image: 'sanitary/prince_CPVC_Pipe.jpg',
    category: 'sanitary',
    subcategory: 'Pipes & Fittings',
    brand: 'Prince',
    features: ['CPVC Material', 'Water Supply', 'Reliable Quality', 'Long Lasting'],
    availability: 'in-stock',
    tags: ['prince', 'cpvc', 'water-supply'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sanitary-005',
    name: 'Sintex Water Tank',
    description: 'Durable water storage tank with UV protection from Sintex',
    image: 'sanitary/sintex_water_tank.webp',
    category: 'sanitary',
    subcategory: 'Water Tanks',
    brand: 'Sintex',
    features: ['UV Protected', 'Food Grade', 'Leak Proof', 'Durable Construction'],
    availability: 'in-stock',
    tags: ['sintex', 'water-tank', 'uv-protected'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sanitary-006',
    name: 'Supreme PVC & CPVC Pipes',
    description: 'Complete range of PVC and CPVC pipes and fittings from Supreme',
    image: 'sanitary/supreme-pvc-and-cpvc-pipes-and-fittings.jpg',
    category: 'sanitary',
    subcategory: 'Pipes & Fittings',
    brand: 'Supreme',
    features: ['PVC & CPVC', 'Complete Range', 'Quality Fittings', 'Trusted Brand'],
    availability: 'in-stock',
    tags: ['supreme', 'pvc', 'cpvc'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'sanitary-007',
    name: 'Supreme PVC Pipes & Fittings',
    description: 'High-quality PVC pipes and fittings for plumbing applications',
    image: 'sanitary/supreme_PVC_pipes_and_fittings.jpg',
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
    id: 'sanitary-008',
    name: 'Supreme Water Tank',
    description: 'Premium water storage tank with UV protection',
    image: 'sanitary/supreme_water_tank.webp',
    category: 'sanitary',
    subcategory: 'Water Tanks',
    brand: 'Supreme',
    features: ['UV Protected', 'Food Grade', 'Leak Proof', 'Long Lasting'],
    availability: 'in-stock',
    tags: ['water-tank', 'storage', 'uv-protected'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // ELECTRICALS CATEGORY - 10 products
  {
    id: 'electrical-001',
    name: '6-Way MCB Box',
    description: 'Professional 6-way MCB distribution box',
    image: 'electricals/6_Way_MCB_Box.jpg',
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
    image: 'electricals/8_Way_MCB_Box.webp',
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
    name: 'Electrical Bends',
    description: 'Professional electrical bends for conduit installation',
    image: 'electricals/bends.jpg',
    category: 'electricals',
    subcategory: 'Wiring & Cables',
    features: ['Conduit Installation', 'Professional Grade', 'Multiple Angles', 'Durable'],
    availability: 'in-stock',
    tags: ['bends', 'conduit', 'installation'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'electrical-004',
    name: 'Electrical Clips',
    description: 'High-quality clips for electrical cable management',
    image: 'electricals/clips.jpg',
    category: 'electricals',
    subcategory: 'Electrical Accessories',
    features: ['Cable Management', 'High Quality', 'Easy Installation', 'Multiple Sizes'],
    availability: 'in-stock',
    tags: ['clips', 'cable-management', 'accessories'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'electrical-005',
    name: 'Concealed Box',
    description: 'Concealed electrical box for switch and socket installation',
    image: 'electricals/concealed_box.webp',
    category: 'electricals',
    subcategory: 'Junction Boxes',
    features: ['Concealed Installation', 'Switch & Socket', 'Fire Retardant', 'Easy Mounting'],
    availability: 'in-stock',
    tags: ['concealed', 'switch', 'socket'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'electrical-006',
    name: 'Fan Box',
    description: 'Specialized electrical box for ceiling fan installation',
    image: 'electricals/fan-box.webp',
    category: 'electricals',
    subcategory: 'Junction Boxes',
    features: ['Ceiling Fan', 'Heavy Duty', 'Secure Mounting', 'Safety Approved'],
    availability: 'in-stock',
    tags: ['fan-box', 'ceiling-fan', 'mounting'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'electrical-007',
    name: 'Junction Box',
    description: 'Weatherproof junction box for electrical connections',
    image: 'electricals/junction_box.jpg',
    category: 'electricals',
    subcategory: 'Junction Boxes',
    features: ['Weatherproof', 'Multiple Sizes', 'Easy Access', 'Durable'],
    availability: 'in-stock',
    tags: ['junction', 'weatherproof', 'electrical'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'electrical-008',
    name: 'Module Box',
    description: 'Modular electrical box for switch and socket modules',
    image: 'electricals/module_box.webp',
    category: 'electricals',
    subcategory: 'Junction Boxes',
    features: ['Modular Design', 'Switch Modules', 'Socket Modules', 'Easy Installation'],
    availability: 'in-stock',
    tags: ['module', 'modular', 'switches'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'electrical-009',
    name: 'Polypack Pipes',
    description: 'Electrical conduit pipes for cable protection',
    image: 'electricals/polypack_pipes.webp',
    category: 'electricals',
    subcategory: 'Wiring & Cables',
    features: ['Cable Protection', 'Conduit Pipes', 'Flexible', 'Easy Installation'],
    availability: 'in-stock',
    tags: ['polypack', 'conduit', 'protection'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'electrical-010',
    name: 'Electrical Tapes',
    description: 'High-quality insulation tapes for electrical work',
    image: 'electricals/tapes.avif',
    category: 'electricals',
    subcategory: 'Electrical Accessories',
    features: ['High Insulation', 'Adhesive', 'Multiple Colors', 'Professional Grade'],
    availability: 'in-stock',
    tags: ['tape', 'insulation', 'electrical'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // TILING SOLUTIONS CATEGORY - 4 products
  {
    id: 'tiling-001',
    name: 'Tile Grout',
    description: 'High-quality grout for tile finishing',
    image: 'tiling_solutions/grout.webp',
    category: 'tiling_solutions',
    subcategory: 'Grouts',
    features: ['Stain Resistant', 'Multiple Colors', 'Easy Application', 'Durable'],
    availability: 'in-stock',
    tags: ['grout', 'tiling', 'finishing'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'tiling-002',
    name: 'Laticrete Adhesive',
    description: 'Professional tile adhesive for strong bonding',
    image: 'tiling_solutions/laticrete.webp',
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
    id: 'tiling-003',
    name: 'Roff Tile Cleaner',
    description: 'Specialized cleaner for tiles and grout',
    image: 'tiling_solutions/roff_tile_cleaner.webp',
    category: 'tiling_solutions',
    subcategory: 'Cleaners',
    brand: 'Roff',
    features: ['Deep Cleaning', 'Grout Safe', 'Easy to Use', 'Effective'],
    availability: 'in-stock',
    tags: ['cleaner', 'tiles', 'maintenance'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'tiling-004',
    name: 'Tile Chemical Solutions',
    description: 'Complete range of tile chemical solutions',
    image: 'tiling_solutions/tile_chemical.jpg',
    category: 'tiling_solutions',
    subcategory: 'Chemicals',
    features: ['Complete Range', 'Chemical Solutions', 'Professional Use', 'Effective Results'],
    availability: 'in-stock',
    tags: ['chemicals', 'tiling', 'solutions'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // MISCELLANEOUS CATEGORY - 8 products
  {
    id: 'misc-001',
    name: 'Alderine Termite Solution',
    description: 'Effective termite control solution for construction',
    image: 'misc/alderine_termite_solution.webp',
    category: 'misc',
    subcategory: 'Chemicals',
    brand: 'Alderine',
    features: ['Termite Control', 'Long Lasting', 'Safe Application', 'Effective Protection'],
    availability: 'in-stock',
    tags: ['termite', 'pest-control', 'protection'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'misc-002',
    name: 'Dr. Fixit Pidiproof',
    description: 'Waterproofing solution for construction',
    image: 'misc/Dr._Fixit_Pidiproof.jpg',
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
    name: 'Fevicol Adhesive',
    description: 'Multi-purpose adhesive for various applications',
    image: 'misc/Fevicol.webp',
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
    id: 'misc-004',
    name: 'Fevicol HeatX',
    description: 'Heat-resistant adhesive for high-temperature applications',
    image: 'misc/fevicol-heatx.jpg',
    category: 'misc',
    subcategory: 'Adhesives',
    brand: 'Fevicol',
    features: ['Heat Resistant', 'High Temperature', 'Strong Bond', 'Specialized Use'],
    availability: 'in-stock',
    tags: ['fevicol', 'heat-resistant', 'adhesive'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'misc-005',
    name: 'Green Sheet Protection',
    description: 'Protective green sheets for construction sites',
    image: 'misc/green_sheet.jpeg',
    category: 'misc',
    subcategory: 'Protective Materials',
    features: ['Site Protection', 'Durable Material', 'Weather Resistant', 'Reusable'],
    availability: 'in-stock',
    tags: ['protection', 'construction', 'green-sheet'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'misc-006',
    name: 'Gurmala',
    description: 'Traditional construction material for specific applications',
    image: 'misc/gurmala.avif',
    category: 'misc',
    subcategory: 'Specialty Items',
    features: ['Traditional Material', 'Specific Applications', 'Quality Product', 'Reliable'],
    availability: 'in-stock',
    tags: ['gurmala', 'traditional', 'specialty'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'misc-007',
    name: 'Masking Tape',
    description: 'High-quality masking tape for painting and construction',
    image: 'misc/masking_tape.jpeg',
    category: 'misc',
    subcategory: 'Protective Materials',
    features: ['Clean Removal', 'Paint Protection', 'Easy Application', 'Professional Grade'],
    availability: 'in-stock',
    tags: ['masking-tape', 'painting', 'protection'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'misc-008',
    name: 'Tarpaulin Sheets',
    description: 'Heavy-duty tarpaulin for protection and covering',
    image: 'misc/tripals.jpg',
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
