/**
 * Image Path Utilities
 * Handles proper image paths for both development and production (GitHub Pages)
 * Following industry standards for asset management
 */

/**
 * Get the correct image path for both development and production
 * @param imagePath - The relative image path from the images folder
 * @returns The correct absolute path for the current environment
 */
export const getImagePath = (imagePath: string): string => {
  // Remove leading slash and /src/assets/img/ if present
  const cleanPath = imagePath
    .replace(/^\/+/, '') // Remove leading slashes
    .replace(/^src\/assets\/img\//, '') // Remove old asset path
    .replace(/^images\//, ''); // Remove images/ if already present

  // In production (GitHub Pages), use the base path
  const basePath = import.meta.env.PROD ? '/bros' : '';
  
  return `${basePath}/images/${cleanPath}`;
};

/**
 * Get fallback image path for broken images
 * @returns Path to a default fallback image
 */
export const getFallbackImagePath = (): string => {
  const basePath = import.meta.env.PROD ? '/bros' : '';
  return `${basePath}/images/bros_enterprises_logo.jpg`;
};

/**
 * Preload critical images for better performance
 * @param imagePaths - Array of image paths to preload
 */
export const preloadImages = (imagePaths: string[]): void => {
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = getImagePath(path);
  });
};

/**
 * Check if an image exists and is loadable
 * @param imagePath - The image path to check
 * @returns Promise that resolves to true if image loads successfully
 */
export const checkImageExists = (imagePath: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = getImagePath(imagePath);
  });
};

/**
 * Get optimized image path with fallback handling
 * @param imagePath - The primary image path
 * @param fallbackPath - Optional fallback image path
 * @returns Promise that resolves to the working image path
 */
export const getOptimizedImagePath = async (
  imagePath: string, 
  fallbackPath?: string
): Promise<string> => {
  const primaryPath = getImagePath(imagePath);
  
  // Check if primary image exists
  const primaryExists = await checkImageExists(imagePath);
  if (primaryExists) {
    return primaryPath;
  }
  
  // Try fallback if provided
  if (fallbackPath) {
    const fallbackExists = await checkImageExists(fallbackPath);
    if (fallbackExists) {
      return getImagePath(fallbackPath);
    }
  }
  
  // Return default fallback
  return getFallbackImagePath();
};
