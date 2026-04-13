import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Mail, Phone, BookOpen, AlertCircle } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import StatusBadge from '../components/common/StatusBadge';
import Button from '../components/common/Button';

// Mock specific data
const WORKSHOP_MOCK = {
  id: 1,
  title: 'Advanced Python for Data Science',
  status: 'confirmed',
  date: 'Oct 15, 2026',
  time: '10:00 AM - 04:00 PM',
  location: 'VJTI Mumbai, Lab 4',
  attendees: 45,
  description: 'This comprehensive workshop covers advanced python concepts utilizing FOSSEE-approved open source libraries like NumPy, SciPy, and Pandas. Students will engage in hand-on data wrangling exercises, eventually building a full predictive model dataset by the end of the 6-hour session.',
  instructor: {
    name: 'Dr. Rajesh Kumar',
    title: 'Senior Teaching Fellow',
    email: 'rajesh.kumar@iitb.ac.in',
    phone: '+91 98765 43210'
  }
};

export default function WorkshopDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ws = WORKSHOP_MOCK; // In a real app, fetch based on 'id'

  return (
    <div className="flex-grow bg-gray-50/50 pb-20">
      <Helmet>
        <title>{ws.title} | FOSSEE Workshops</title>
      </Helmet>

      {/* Header Area */}
      <div className="bg-white border-b border-border pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Breadcrumb items={[
              { label: 'Workshops', path: '/workshops' },
              { label: ws.title }
            ]} />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <StatusBadge status={ws.status} />
                <span className="text-sm font-semibold text-text-secondary bg-gray-100 px-2 py-0.5 rounded-md">ID: #{ws.id}</span>
              </div>
              <h1 className="font-poppins text-3xl md:text-4xl font-bold text-primary leading-tight">
                {ws.title}
              </h1>
            </div>
            <Button variant="primary" className="shrink-0" onClick={() => navigate('/book')}>
              Book Similar Workshop
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          
          <section className="bg-white p-6 rounded-xl border border-border shadow-sm">
            <h2 className="font-poppins text-lg font-bold text-primary mb-4 border-b border-gray-100 pb-2">Workshop Overview</h2>
            <p className="text-text-secondary leading-relaxed">
              {ws.description}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-border shadow-sm">
            <h2 className="font-poppins text-lg font-bold text-primary mb-4 border-b border-gray-100 pb-2">Logistics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              <div className="flex items-start gap-3">
                <Calendar className="text-accent shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-sm font-semibold text-text-primary">Date</p>
                  <p className="text-sm text-text-secondary">{ws.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-accent shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-sm font-semibold text-text-primary">Time</p>
                  <p className="text-sm text-text-secondary">{ws.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-sm font-semibold text-text-primary">Location</p>
                  <p className="text-sm text-text-secondary">{ws.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-accent shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-sm font-semibold text-text-primary">Expected Capacity</p>
                  <p className="text-sm text-text-secondary">{ws.attendees} Students</p>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-xl border border-border shadow-sm">
            <h2 className="font-poppins text-lg font-bold text-primary mb-4 border-b border-gray-100 pb-2">Instructor</h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                {ws.instructor.name.charAt(4)}
              </div>
              <div>
                <p className="font-bold text-text-primary">{ws.instructor.name}</p>
                <p className="text-xs font-semibold text-text-secondary">{ws.instructor.title}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <Mail size={16} className="text-gray-400" />
                <a href={`mailto:${ws.instructor.email}`} className="hover:text-primary transition-colors">{ws.instructor.email}</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <Phone size={16} className="text-gray-400" />
                {ws.instructor.phone}
              </div>
            </div>
          </section>

          <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 text-primary">
             <AlertCircle size={20} className="shrink-0 mt-0.5" />
             <p className="text-sm font-medium">To modify or cancel a confirmed workshop, please contact the coordinator dashboard support directly.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
