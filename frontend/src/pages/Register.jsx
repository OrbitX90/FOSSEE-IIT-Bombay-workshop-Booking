import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, BookOpen } from 'lucide-react';
import Button from '../components/common/Button';
import FormInput from '../components/common/FormInput';

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', email: '', phone: '', college: '', role: 'student', password: '', confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.college) newErrors.college = 'College/Institute name is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Must be at least 8 chars';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Set mock auth state
      localStorage.setItem('userRole', formData.role);
      // Force page reload navigation so Navbar updates
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center p-4 bg-gray-50 py-12">
      <Helmet>
        <title>Register | FOSSEE Workshop Booking</title>
      </Helmet>

      <div className="w-full max-w-lg bg-white rounded-xl shadow-sm border border-border p-8">
        <div className="flex flex-col items-center mb-8 gap-2">
          <div className="bg-primary text-white p-2 rounded-lg">
            <BookOpen size={24} />
          </div>
          <h1 className="font-poppins text-2xl font-bold text-primary text-center">Create Institutional Account</h1>
          <p className="text-sm text-text-secondary text-center">Join the FOSSEE network to coordinate or attend workshops</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-text-secondary border-b pb-2">1. Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Full Name"
                value={formData.name}
                placeholder="Dr. Rajesh Kumar"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                error={errors.name}
              />
              <FormInput
                label="Phone Number"
                type="tel"
                value={formData.phone}
                placeholder="+91 98765 43210"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                error={errors.phone}
              />
            </div>
            <FormInput
              label="Institutional Email"
              type="email"
              value={formData.email}
              placeholder="rajesh@college.edu"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              error={errors.email}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-text-secondary border-b pb-2 mt-6">2. Academic Affiliation</h2>
            <FormInput
              label="College / Institute Name"
              value={formData.college}
              placeholder="VJTI College of Engineering"
              onChange={(e) => setFormData({...formData, college: e.target.value})}
              error={errors.college}
            />
            
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-semibold text-text-primary">Primary Role</label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`border rounded-lg p-3 cursor-pointer flex items-center justify-center transition-all ${formData.role === 'student' ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-border text-text-secondary hover:bg-gray-50'}`}>
                  <input type="radio" name="role" className="sr-only" checked={formData.role === 'student'} onChange={() => setFormData({...formData, role: 'student'})} />
                  Student
                </label>
                <label className={`border rounded-lg p-3 cursor-pointer flex items-center justify-center transition-all ${formData.role === 'instructor' ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-border text-text-secondary hover:bg-gray-50'}`}>
                  <input type="radio" name="role" className="sr-only" checked={formData.role === 'instructor'} onChange={() => setFormData({...formData, role: 'instructor'})} />
                  Instructor / Staff
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-text-secondary border-b pb-2 mt-6">3. Account Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FormInput
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  placeholder="••••••••"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  error={errors.password}
                />
                <button
                  type="button"
                  className="absolute right-3 top-8 text-gray-400 hover:text-gray-600 focus-visible:outline-none focus:text-primary transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="relative">
                <FormInput
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  placeholder="••••••••"
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  error={errors.confirmPassword}
                />
                <button
                  type="button"
                  className="absolute right-3 top-8 text-gray-400 hover:text-gray-600 focus-visible:outline-none focus:text-primary transition-colors"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          <Button type="submit" variant="primary" fullWidth className="py-3 mt-4">
            Complete Registration
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-text-secondary">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-primary hover:text-accent transition-colors">
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
}
