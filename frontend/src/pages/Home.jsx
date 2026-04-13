import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, School, Users, Presentation, Sparkles, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import Button from '../components/common/Button';
import WorkshopCard from '../components/workshop/WorkshopCard';

const UPCOMING_WORKSHOPS = [
  { id: 1, title: 'Advanced Python for Data Science', date: 'Oct 15, 2026', location: 'VJTI Mumbai', status: 'upcoming' },
  { id: 2, title: 'OpenFOAM Simulation Basics', date: 'Oct 22, 2026', location: 'COEP Pune', status: 'upcoming' },
  { id: 3, title: 'Django Web Development', date: 'Nov 05, 2026', location: 'NIT Warangal', status: 'completed' },
];

export default function Home() {
  useSEO(
    'Home', 
    'A comprehensive platform empowering students to master new skills, and instructors to manage technical workshops securely across top engineering institutes.'
  );
  const navigate = useNavigate();

  return (
    <div className="flex-grow flex flex-col">
      <Helmet>
        <title>FOSSEE | Premium Academic Training</title>
      </Helmet>

      {/* Hero Section with Deep Radial Gradient & Ambient Light */}
      <section className="text-white pt-24 pb-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A1128] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#003087] via-[#001D56] to-[#0A1128]">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-accent/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-blue-200 mb-8 animate-fade-in">
            <Sparkles size={16} className="text-accent" />
            <span>Empowering Institutions Nationwide</span>
          </div>

          <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] max-w-5xl tracking-tight drop-shadow-sm">
            FOSSEE Workshop <br className="hidden md:block"/> Booking
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100/80 mb-12 max-w-2xl leading-relaxed font-light">
            A comprehensive platform empowering students to master new skills, and instructors to manage technical workshops securely across top engineering institutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Button 
              variant="secondary" 
              className="px-8 py-3.5 text-base font-bold shadow-[0_0_20px_rgba(245,166,35,0.3)] hover:shadow-[0_0_25px_rgba(245,166,35,0.5)] hover:-translate-y-1 transition-all duration-300 group" 
              onClick={() => navigate('/book')}
            >
              Book Workshop 
              <ArrowRight size={18} className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="ghost" 
              className="px-8 py-3.5 text-base border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300" 
              onClick={() => navigate('/workshops')}
            >
              View Workshops
            </Button>
          </div>
        </div>
        
        {/* Geometric Tech Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </section>

      {/* Stats - Floating Glassmorphism Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 w-full mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center shadow-2xl hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
               <Presentation className="text-accent" size={32} />
            </div>
            <span className="font-poppins text-4xl font-black text-primary mb-1">4.2k+</span>
            <span className="text-sm font-bold text-text-secondary uppercase tracking-widest">Total Workshops</span>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center shadow-2xl hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
               <School className="text-accent" size={32} />
            </div>
            <span className="font-poppins text-4xl font-black text-primary mb-1">150+</span>
            <span className="text-sm font-bold text-text-secondary uppercase tracking-widest">Colleges Reached</span>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center shadow-2xl hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
               <Users className="text-accent" size={32} />
            </div>
            <span className="font-poppins text-4xl font-black text-primary mb-1">85</span>
            <span className="text-sm font-bold text-text-secondary uppercase tracking-widest">Active Instructors</span>
          </div>

        </div>
      </div>

      {/* How it Works - Elevated White UI */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">How Institutional Booking Works</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">A streamlined process to bring robust technical training to your academic institution.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-gray-200 via-primary/20 to-gray-200 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center group cursor-default">
              <div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-2xl font-black text-primary mb-8 shadow-sm group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300 rotate-3 group-hover:rotate-0">
                01
              </div>
              <h3 className="font-poppins text-xl font-bold text-text-primary mb-3">Request Workshop</h3>
              <p className="text-text-secondary leading-relaxed px-4">Select a topic from our catalog and propose a date for your institution.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center group cursor-default">
              <div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-2xl font-black text-primary mb-8 shadow-sm group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300 -rotate-3 group-hover:rotate-0">
                02
              </div>
              <h3 className="font-poppins text-xl font-bold text-text-primary mb-3">Coordinator Approval</h3>
              <p className="text-text-secondary leading-relaxed px-4">FOSSEE admins securely review constraints and assign verified instructors.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center group cursor-default">
               <div className="w-24 h-24 rounded-2xl bg-primary border-4 border-white flex items-center justify-center text-2xl font-black text-white mb-8 shadow-md group-hover:-translate-y-2 group-hover:shadow-xl group-hover:bg-primary/90 transition-all duration-300 rotate-3 group-hover:rotate-0">
                03
              </div>
              <h3 className="font-poppins text-xl font-bold text-text-primary mb-3">Execute Session</h3>
              <p className="text-text-secondary leading-relaxed px-4">Hold the session at your college. Track attendance directly on our portal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-poppins text-3xl font-bold text-primary mb-2 tracking-tight">Recently Booked Workshops</h2>
              <p className="text-text-secondary">See what other institutions are learning across India.</p>
            </div>
            <Button variant="ghost" className="hidden sm:flex group text-primary font-semibold hover:bg-primary/5" onClick={() => navigate('/workshops')}>
              View All <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UPCOMING_WORKSHOPS.map(ws => (
              <div key={ws.id} className="hover:-translate-y-1 hover:shadow-xl transition-all duration-300 rounded-xl">
                 <WorkshopCard workshop={ws} />
              </div>
            ))}
          </div>

          <Button variant="outline" fullWidth className="mt-8 sm:hidden" onClick={() => navigate('/workshops')}>
            View All Workshops
          </Button>
        </div>
      </section>
    </div>
  );
}
