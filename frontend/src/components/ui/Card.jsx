import React from "react";

/**
 * Enhanced Card component with hover effects and better styling
 * You can pass additional Tailwind classes via the className prop.
 */
export function Card({ children, className = "", onClick }) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

/**
 * Sub-component for the Card header (e.g., an image or heading).
 */
Card.Header = function CardHeader({ children, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

/**
 * Sub-component for the Card title text (e.g., a heading).
 */
Card.Title = function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`text-xl font-semibold text-text group-hover:text-primary transition-colors ${className}`}>
      {children}
    </h3>
  );
};

/**
 * Sub-component for the Card main content area.
 */
Card.Content = function CardContent({ children, className = "" }) {
  return (
    <div className={`p-5 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Sub-component for actions/buttons at the bottom of the card
 */
Card.Footer = function CardFooter({ children, className = "" }) {
  return (
    <div className={`px-5 py-4 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Badge component for the card (e.g., for status indicators)
 */
Card.Badge = function CardBadge({ children, color = "primary", className = "" }) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-gray-100 text-gray-600",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${colorClasses[color]} ${className}`}>
      {children}
    </span>
  );
};

export default Card;