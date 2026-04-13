import { Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import StatusBadge from '../common/StatusBadge';

export default function WorkshopCard({ workshop }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full overflow-hidden">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="font-poppins font-bold text-lg leading-tight text-primary line-clamp-2">
            {workshop.title}
          </h3>
          <StatusBadge status={workshop.status} />
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-text-secondary">
            <Calendar size={16} className="mr-2 text-accent" />
            <span>{workshop.date}</span>
          </div>
          <div className="flex items-center text-sm text-text-secondary">
            <MapPin size={16} className="mr-2 text-accent" />
            <span className="line-clamp-1">{workshop.location}</span>
          </div>
        </div>

        <p className="text-sm text-text-secondary line-clamp-3">
          {workshop.description || "A comprehensive hands-on workshop focused on leveraging technology in education."}
        </p>
      </div>
      
      <div className="p-4 border-t border-gray-100 bg-gray-50/50 mt-auto">
        <Button 
          variant="outline" 
          fullWidth 
          onClick={() => navigate(`/workshops/${workshop.id}`)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
