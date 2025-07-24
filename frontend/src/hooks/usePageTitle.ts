/**
 * Custom hook for managing page SEO with static title
 * Following industry standards for SEO and user experience
 */

import { useEffect } from 'react';

interface UsePageTitleOptions {
  description?: string;
  keywords?: string[];
}

export const usePageTitle = ({ description, keywords }: UsePageTitleOptions) => {
  useEffect(() => {
    // Static title for all pages
    document.title = 'Bros Enterprises';

    // Update meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords if provided
    if (keywords && keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords.join(', '));
    }

    // Update Open Graph title (static)
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Bros Enterprises - Quality Hardware & Building Materials');
    }

    // Update Twitter title (static)
    let twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Bros Enterprises - Quality Hardware & Building Materials');
    }

    // Update Open Graph description if provided
    if (description) {
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }
      
      let twitterDescription = document.querySelector('meta[property="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', description);
      }
    }
  }, [description, keywords]);
};

// Predefined page configurations for SEO (without titles)
export const PAGE_CONFIGS = {
  home: {
    description: 'Bros Enterprises - Quality Hardware & Building Materials in Gurugram, Haryana. Your trusted partner for paints, hardware, sanitary, electrical, and construction supplies.',
    keywords: ['hardware store', 'building materials', 'construction supplies', 'Gurugram', 'Haryana']
  },
  paints: {
    description: 'Premium quality paints and coatings from top brands like Asian Paints, Berger, and Birla Opus. Interior and exterior paints, primers, and painting accessories.',
    keywords: ['paints', 'coatings', 'Asian Paints', 'Berger', 'Birla Opus', 'interior paint', 'exterior paint']
  },
  hardware: {
    description: 'Complete range of construction hardware, tools, fasteners, and building materials. Professional-grade tools for construction and carpentry work.',
    keywords: ['hardware', 'tools', 'fasteners', 'construction tools', 'building hardware', 'screws', 'nails']
  },
  sanitary: {
    description: 'Modern sanitary ware, pipes, fittings, and plumbing solutions from trusted brands like Supreme, Ashirvad, Jaquar, and Sintex.',
    keywords: ['sanitary', 'plumbing', 'pipes', 'fittings', 'Supreme', 'Ashirvad', 'Jaquar', 'water tanks']
  },
  electricals: {
    description: 'Comprehensive electrical components, wiring solutions, MCB boxes, junction boxes, and electrical accessories for residential and commercial use.',
    keywords: ['electrical', 'wiring', 'MCB boxes', 'junction boxes', 'electrical accessories', 'electrical components']
  },
  tiling: {
    description: 'Professional tiling materials, adhesives, grouts, and finishing solutions from brands like Laticrete and Roff for perfect tile installations.',
    keywords: ['tiling', 'tile adhesive', 'grout', 'Laticrete', 'Roff', 'tile installation', 'tile materials']
  },
  miscellaneous: {
    description: 'Additional construction materials, chemicals, adhesives, and specialty products including Fevicol, Dr. Fixit, and protective materials.',
    keywords: ['construction materials', 'chemicals', 'adhesives', 'Fevicol', 'Dr. Fixit', 'waterproofing', 'specialty products']
  },
  about: {
    description: 'Learn about Bros Enterprises - your trusted hardware store in Gurugram, Haryana. Quality products, professional service, and expert advice.',
    keywords: ['about', 'Bros Enterprises', 'hardware store', 'Gurugram', 'quality products', 'professional service']
  },
  contact: {
    description: 'Get in touch with Bros Enterprises. Visit our store in Gurugram, Haryana or contact us for all your hardware and building material needs.',
    keywords: ['contact', 'Bros Enterprises', 'Gurugram', 'hardware store', 'building materials', 'location']
  }
} as const;
