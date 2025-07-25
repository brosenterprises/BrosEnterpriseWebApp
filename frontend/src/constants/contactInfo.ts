/**
 * Contact Information Constants
 * Centralized contact information for Bros Enterprises
 * Following industry standards for maintainable contact data
 */

export const CONTACT_INFO = {
  // Business Details
  businessName: 'BROS ENTERPRISES',
  
  // Address Information
  address: {
    full: 'Booth # 184, HUDA Market, Sector 57, Gurugram-122003, Haryana',
    booth: 'Booth # 184',
    market: 'HUDA Market',
    sector: 'Sector 57',
    city: 'Gurugram',
    pincode: '122003',
    state: 'Haryana',
    formatted: {
      line1: 'Booth # 184, HUDA Market',
      line2: 'Sector 57, Gurugram-122003',
      line3: 'Haryana, India'
    }
  },
  
  // Phone Numbers
  phones: {
    primary: '8368479665',
    secondary: '9953186184',
    formatted: {
      primary: '+91 83684 79665',
      secondary: '+91 99531 86184'
    },
    display: {
      primary: '8368479665',
      secondary: '9953186184'
    }
  },
  
  // Email Information
  email: {
    primary: 'brosenterprises7@gmail.com',
    display: 'brosenterprises7@gmail.com'
  },
  
  // Services
  services: {
    homeDelivery: {
      available: true,
      text: 'Home Delivery Available',
      description: 'We deliver to your doorstep across Gurugram and nearby areas'
    }
  },
  
  // Business Hours (can be expanded later)
  businessHours: {
    weekdays: '9:00 AM - 8:00 PM',
    weekends: '9:00 AM - 7:00 PM',
    display: 'Mon-Sat: 9:00 AM - 8:00 PM'
  },
  
  // Social Links (for future use)
  social: {
    // Can be added when available
  },
  
  // Map/Location Links
  location: {
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=Booth+184+HUDA+Market+Sector+57+Gurugram+122003+Haryana`,
    coordinates: {
      // Can be added when available
      lat: null,
      lng: null
    }
  }
} as const;

// Utility functions for contact information
export const getFormattedAddress = (multiline: boolean = false): string => {
  if (multiline) {
    return `${CONTACT_INFO.address.formatted.line1}\n${CONTACT_INFO.address.formatted.line2}\n${CONTACT_INFO.address.formatted.line3}`;
  }
  return CONTACT_INFO.address.full;
};

export const getFormattedPhones = (): string[] => {
  return [
    CONTACT_INFO.phones.display.primary,
    CONTACT_INFO.phones.display.secondary
  ];
};

export const getClickablePhoneUrl = (phone: 'primary' | 'secondary'): string => {
  const phoneNumber = phone === 'primary' 
    ? CONTACT_INFO.phones.primary 
    : CONTACT_INFO.phones.secondary;
  return `tel:+91${phoneNumber}`;
};

export const getClickableEmailUrl = (): string => {
  return `mailto:${CONTACT_INFO.email.primary}`;
};

export const getGoogleMapsUrl = (): string => {
  return CONTACT_INFO.location.googleMapsUrl;
};
