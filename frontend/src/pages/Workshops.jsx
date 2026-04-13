import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter } from 'lucide-react';
import WorkshopCard from '../components/workshop/WorkshopCard';
import EmptyState from '../components/common/EmptyState';
import FormInput from '../components/common/FormInput';

const ALL_WORKSHOPS = [
  { id: 1, title: 'Advanced Python for Data Science', date: 'Oct 15, 2026', location: 'VJTI Mumbai', status: 'upcoming' },
  { id: 2, title: 'OpenFOAM Simulation Basics', date: 'Oct 22, 2026', location: 'COEP Pune', status: 'upcoming' },
  { id: 3, title: 'Django Web Development', date: 'Nov 05, 2026', location: 'NIT Warangal', status: 'completed' },
  { id: 4, title: 'QGIS for Civil Engineers', date: 'Dec 01, 2026', location: 'IIT Madras', status: 'upcoming' },
  { id: 5, title: 'Scilab Programming Workshop', date: 'Aug 10, 2026', location: 'VIT Vellore', status: 'completed' },
  { id: 6, title: 'Arduino Robotics Basics', date: 'Sep 12, 2026', location: 'Bits Pilani', status: 'upcoming' },
];

export default function Workshops() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredWorkshops = ALL_WORKSHOPS.filter(ws => {
    const matchesSearch = ws.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          ws.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ws.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex-grow bg-gray-50/30">
      <Helmet>
        <title>Explore Workshops | FOSSEE</title>
      </Helmet>

      {/* Header Banner */}
      <div className="bg-primary pt-12 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-4">Workshop Catalog</h1>
          <p className="text-gray-300 max-w-2xl text-lg">Browse our verified open-source workshops available for institutional booking across the country.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 pb-20">
        
        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-border mb-8 flex flex-col sm:flex-row gap-4 items-end">
          <div className="w-full sm:flex-1 relative">
             <FormInput 
               placeholder="Search by topic or college..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
             <Search size={18} className="absolute right-3 top-2.5 text-gray-400" />
          </div>
          <div className="w-full sm:w-48 flex items-center gap-2">
            <Filter size={18} className="text-text-secondary shrink-0" />
            <select 
              className="w-full px-3 py-2 border border-border rounded-md text-sm bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="upcoming">Upcoming</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Results Grid */}
        {filteredWorkshops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkshops.map(ws => (
              <WorkshopCard key={ws.id} workshop={ws} />
            ))}
          </div>
        ) : (
          <EmptyState 
            title="No workshops found" 
            message={`We couldn't find any workshops matching "${searchQuery}" or the selected status filter.`}
            actionText="Clear Filters"
            actionRoute="/workshops"
          />
        )}
      </div>
    </div>
  );
}
