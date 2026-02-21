import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LogoProps {
  /**
   * Logo variant - 'full' includes the brand name, 'icon' is just the logo mark
   */
  variant?: 'full' | 'icon';
  /**
   * Logo type - 'svg' for inline SVG component, 'image' for raster images
   */
  type?: 'svg' | 'image';
  /**
   * For SVG type: pass the SVG component directly
   * For image type: pass the image source URL
   */
  logoSrc?: React.ReactNode;
  /**
   * Image source for 'image' type (URL or imported image)
   */
  imageSrc?: string;
  /**
   * Logo size - 'sm' for small (footer), 'md' for medium (default)
   */
  size?: 'sm' | 'md';
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Reusable Logo component that supports:
 * - SVG logos (pass as React component via logoSrc)
 * - Raster images (JPEG, PNG, etc. via imageSrc)
 * - Full variant (logo + brand name) or icon-only variant
 */
export function Logo({
  variant = 'full',
  type = 'svg',
  logoSrc,
  imageSrc,
  size = 'md',
  className
}: LogoProps) {
  // Size configurations
  const sizeClasses = size === 'sm' 
    ? { container: 'w-16 h-auto', text: 'text-sm' }
    : { container: 'w-40 h-auto', text: 'text-2xl' };

  // Default fallback gradient logo (matches original design)
  const defaultLogo = (
    <div className={cn(
      "bg-gradient-to-br from-violet-500 to-purple-700 rounded-lg flex items-center justify-center shadow-md shadow-purple-500/20",
      sizeClasses.container
    )}>
      <span className={cn("font-bold italic", sizeClasses.text)}>L</span>
    </div>
  );

  const renderLogo = () => {
    // If using image type with an image source
    if (type === 'image' && imageSrc) {
      return (
        <img
          src={imageSrc}
          alt="Lineous Logo"
          className={cn(
            "bg-gradient-to-br from-grey-800 to-grey-700 rounded-lg flex items-center justify-center shadow-md shadow-purple-500/20 p-1",
            sizeClasses.container
          )}
        />
      );
    }

    // If using SVG type with a custom SVG component
    if (type === 'svg' && logoSrc) {
      return logoSrc;
    }

    // Fallback to default gradient logo
    return defaultLogo;
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {renderLogo()}
      {/* {variant === 'full' && (
        <span className={cn("font-semibold tracking-tight", sizeClasses.text)}>lineous</span>
      )} */}
    </div>
  );
}

export default Logo;

