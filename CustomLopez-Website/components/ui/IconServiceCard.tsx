import { ReactNode } from 'react';

interface IconServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
  link?: string;
  accentColor?: 'gold' | 'burgundy';
}

export default function IconServiceCard({
  icon,
  title,
  description,
  features,
  link,
  accentColor = 'gold'
}: IconServiceCardProps) {
  const CardWrapper = link ? 'a' : 'div';
  const cardProps = link ? { href: link } : {};
  
  const accentClasses = {
    gold: 'group-hover:text-gold group-hover:border-gold',
    burgundy: 'group-hover:text-burgundy group-hover:border-burgundy'
  };

  const iconBgClasses = {
    gold: 'bg-gold/10 group-hover:bg-gold/20',
    burgundy: 'bg-burgundy/10 group-hover:bg-burgundy/20'
  };

  return (
    <CardWrapper
      {...cardProps}
      className="group block bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gold/20"
    >
      <div className={`w-20 h-20 ${iconBgClasses[accentColor]} rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
        <div className={`w-10 h-10 text-${accentColor} transition-colors duration-300`}>
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-burgundy mb-3 group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {description}
      </p>
      
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      {link && (
        <div className="flex items-center text-gold font-semibold mt-4 group-hover:translate-x-2 transition-transform duration-300">
          <span>Learn More</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </CardWrapper>
  );
}