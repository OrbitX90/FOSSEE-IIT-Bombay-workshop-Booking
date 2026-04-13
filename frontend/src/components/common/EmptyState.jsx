import { Inbox } from 'lucide-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function EmptyState({ 
  title = "No items found", 
  message = "There's nothing here yet. Check back later.",
  actionText,
  actionRoute
}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-border rounded-xl bg-gray-50/50">
      <div className="bg-white p-4 rounded-full shadow-sm mb-4">
        <Inbox size={32} className="text-gray-400" />
      </div>
      <h3 className="text-lg font-poppins font-semibold text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-secondary max-w-sm mb-6">
        {message}
      </p>
      {actionText && actionRoute && (
        <Button variant="primary" onClick={() => navigate(actionRoute)}>
          {actionText}
        </Button>
      )}
    </div>
  );
}
