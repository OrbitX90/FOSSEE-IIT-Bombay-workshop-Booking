import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { LayoutDashboard, Calendar, History, Settings, Menu, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import StatusBadge from '../components/common/StatusBadge';

const MOCK_ACTIVITY = [
  { id: 101, title: 'Python Basics', date: 'Oct 15, 2026', location: 'VJTI Mumbai', status: 'confirmed' },
  { id: 102, title: 'OpenFOAM Simulation', date: 'Oct 22, 2026', location: 'COEP Pune', status: 'pending' },
  { id: 103, title: 'Scilab Intro', date: 'Aug 10, 2026', location: 'VIT Vellore', status: 'rejected' },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const userRole = localStorage.getItem('userRole') || 'instructor';
  const isStudent = userRole === 'student';

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const navItems = isStudent ? [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', active: true },
    { icon: <Calendar size={20} />, label: 'My Enrollments', active: false },
    { icon: <History size={20} />, label: 'Certificates', active: false },
    { icon: <Settings size={20} />, label: 'Settings', active: false },
  ] : [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', active: true },
    { icon: <Calendar size={20} />, label: 'My Workshops', active: false },
    { icon: <History size={20} />, label: 'Activity Log', active: false },
    { icon: <Settings size={20} />, label: 'Settings', active: false },
  ];

  return (
    <div className="flex-grow flex bg-gray-50/50 min-h-[calc(100vh-64px)] overflow-hidden relative">
      <Helmet>
        <title>Dashboard | FOSSEE Institutional Portal</title>
      </Helmet>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-20 md:hidden" 
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`absolute md:static w-64 bg-white border-r border-border h-full z-30 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
              {isStudent ? 'ST' : 'VJ'}
            </div>
            <div>
              <p className="font-bold text-sm text-text-primary leading-tight">
                {isStudent ? 'Student Profile' : 'VJTI Coordinator'}
              </p>
              <p className="text-xs text-text-secondary">
                {isStudent ? 'Student View' : 'Institution View'}
              </p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  item.active 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-text-secondary hover:bg-gray-100 hover:text-text-primary'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
        
        {/* Mobile Header Toggle */}
        <div className="md:hidden flex items-center mb-6 gap-4">
          <button 
            onClick={toggleSidebar}
            className="p-2 border border-border rounded-md bg-white text-text-secondary hover:text-primary"
            aria-label="Toggle Sidebar"
          >
            <Menu size={20} />
          </button>
          <h1 className="font-poppins font-bold text-xl text-primary">Dashboard</h1>
        </div>

        <div className="hidden md:flex justify-between items-center mb-8">
          <h1 className="font-poppins font-bold text-2xl text-primary">
            {isStudent ? 'Welcome back, Student' : 'Welcome back, Coordinator'}
          </h1>
          <Button variant="primary" onClick={() => navigate(isStudent ? '/workshops' : '/book')} className="hidden sm:flex">
            <Plus size={18} className="mr-2" /> {isStudent ? 'Browse Workshops' : 'Book New Workshop'}
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex flex-col justify-between">
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">
              {isStudent ? 'Workshops Attended' : 'Total Booked'}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="font-poppins text-4xl font-bold text-primary">{isStudent ? '4' : '12'}</span>
              {!isStudent && <span className="text-sm text-green-600 font-medium">↑ 2 this month</span>}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex flex-col justify-between">
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">
              {isStudent ? 'Upcoming Sessions' : 'Pending Approvals'}
            </p>
            <span className="font-poppins text-4xl font-bold text-accent">{isStudent ? '1' : '1'}</span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex flex-col justify-between">
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">
               {isStudent ? 'Certificates Earned' : 'Students Trained'}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="font-poppins text-4xl font-bold text-primary">{isStudent ? '3' : '450'}</span>
              {!isStudent && <span className="text-sm text-green-600 font-medium">+45 this month</span>}
            </div>
          </div>
        </div>

        {/* Mobile Quick Action */}
        <Button variant="primary" fullWidth onClick={() => navigate(isStudent ? '/workshops' : '/book')} className="mb-8 md:hidden">
          <Plus size={18} className="mr-2" /> {isStudent ? 'Browse Workshops' : 'Book New Workshop'}
        </Button>

        {/* Activity Table */}
        <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden flex flex-col w-full h-auto">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h2 className="font-poppins font-bold text-lg text-primary">
              {isStudent ? 'My Recent Enrollments' : 'Recent Requests'}
            </h2>
            <button className="text-sm font-medium text-primary hover:text-accent transition-colors">View All</button>
          </div>
          
          <div className="w-full overflow-x-auto min-h-0 border-t-0 p-0 m-0">
            <table className="w-full text-left min-w-[600px] border-collapse m-0">
              <thead className="bg-[#f8f9fa] border-b border-[#e9ecef]">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider bg-white">ID</th>
                  <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider bg-white">Workshop Title</th>
                  <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider bg-white">Date</th>
                  <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider bg-white">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider bg-white text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {MOCK_ACTIVITY.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-text-secondary bg-white">#{item.id}</td>
                    <td className="px-6 py-4 bg-white">
                      <p className="text-sm font-bold text-text-primary">{item.title}</p>
                      <p className="text-xs text-text-secondary">{item.location}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary whitespace-nowrap bg-white">{item.date}</td>
                    <td className="px-6 py-4 bg-white">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="px-6 py-4 text-right bg-white text-sm font-medium">
                      <button className="text-primary hover:text-accent transition-colors">Manage</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
