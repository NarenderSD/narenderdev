/**
 * Responsive Design System Documentation
 * 
 * Mobile-first approach with breakpoints:
 * - sm: 640px (Small tablets & large phones)
 * - md: 768px (Tablets)
 * - lg: 1024px (Small laptops)
 * - xl: 1280px (Large laptops)
 * - 2xl: 1536px (Desktop monitors)
 * 
 * Custom responsive classes added to globals.css:
 * - .container-responsive: Smart container with responsive padding
 * - .text-responsive-*: Scaling text sizes across breakpoints
 * 
 * Key improvements:
 * 1. All emojis replaced with animated SVG icons
 * 2. Mobile-first responsive typography
 * 3. Flexible grid layouts for all screen sizes
 * 4. Touch-friendly button sizes on mobile
 * 5. Optimized spacing and padding
 * 6. Proper order management for mobile layouts
 */

/* Mobile Optimization Guidelines */

// Minimum touch target: 44px (iOS) / 48px (Android)
.btn-mobile {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
}

// Safe areas for mobile devices
.safe-area-top {
  padding-top: env(safe-area-inset-top);
}

.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}

// Prevent zoom on input focus (iOS)
input, textarea, select {
  font-size: 16px; /* Prevents zoom on iOS */
}

/* Tablet Optimization */
@media (min-width: 768px) and (max-width: 1023px) {
  .section-padding {
    padding: 60px 32px;
  }
  
  .grid-responsive {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

/* Desktop Optimization */
@media (min-width: 1024px) {
  .section-padding {
    padding: 80px 48px;
  }
  
  .hover-effects:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
}

/* Animation Performance */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
