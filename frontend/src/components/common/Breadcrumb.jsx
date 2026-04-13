import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
            <Home size={16} className="mr-2" />
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label}>
              <div className="flex items-center">
                <ChevronRight size={16} className="text-gray-400" />
                {isLast || !item.path ? (
                  <span className="ml-1 text-sm font-semibold text-text-primary md:ml-2 line-clamp-1">
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    to={item.path} 
                    className="ml-1 text-sm font-medium text-text-secondary hover:text-primary md:ml-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
