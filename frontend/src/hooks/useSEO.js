import { useEffect } from 'react';

export default function useSEO(title, description) {
  useEffect(() => {
    // 1. Update the document title dynamically
    document.title = title ? `${title} | FOSSEE Workshops` : 'FOSSEE Workshop Booking';

    // 2. Update the meta description dynamically
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }
  }, [title, description]);
}
