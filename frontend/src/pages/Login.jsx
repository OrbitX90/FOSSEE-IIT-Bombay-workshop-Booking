import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, BookOpen, ArrowLeft, MailCheck } from 'lucide-react';
import Button from '../components/common/Button';
import FormInput from '../components/common/FormInput';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isResetSent, setIsResetSent] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Set mock auth state based on email to demo both views
      const role = formData.email.toLowerCase().includes('student') ? 'student' : 'instructor';
      localStorage.setItem('userRole', role);
      // Force page reload navigation so Navbar updates
      window.location.href = '/dashboard';
    }
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors({ email: 'Valid email is required to reset password' });
      return;
    }
    setErrors({});
    setIsResetSent(true);
  };

  return (
    <div className="flex-grow flex items-center justify-center p-4 bg-gray-50">
      <Helmet>
        <title>{isForgotPassword ? "Reset Password" : "Login"} | FOSSEE Workshop Booking</title>
      </Helmet>

      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-border p-8">
        
        {isResetSent ? (
          <div className="flex flex-col items-center py-6 text-center">
            <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
              <MailCheck size={32} />
            </div>
            <h1 className="font-poppins text-2xl font-bold text-gray-800 mb-2">Check your email</h1>
            <p className="text-sm text-text-secondary mb-6">
              We've sent password reset instructions to <br/><span className="font-medium text-gray-800">{formData.email}</span>
            </p>
            <Button variant="primary" fullWidth onClick={() => { setIsForgotPassword(false); setIsResetSent(false); formData.password = ''; }}>
              Back to Login
            </Button>
          </div>
        ) : isForgotPassword ? (
          <>
            <div className="flex flex-col items-center mb-8 gap-2">
              <div className="bg-primary/5 text-primary p-3 rounded-xl mb-2">
                <BookOpen size={28} />
              </div>
              <h1 className="font-poppins text-2xl font-bold text-gray-800 text-center">Reset Password</h1>
              <p className="text-sm text-text-secondary text-center">Enter your email and we'll send you a reset link.</p>
            </div>
            
            <form onSubmit={handleResetSubmit} className="space-y-5">
              <FormInput
                label="Email Address"
                type="email"
                placeholder="instructor@college.edu"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                error={errors.email}
              />
              <Button type="submit" variant="primary" fullWidth className="py-2.5 mt-2">
                Send Reset Link
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button 
                onClick={() => { setIsForgotPassword(false); setErrors({}); }}
                className="inline-flex items-center text-sm font-semibold text-text-secondary hover:text-primary transition-colors"
                type="button"
              >
                <ArrowLeft size={16} className="mr-1" /> Back to log in
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center mb-8 gap-2">
              <div className="bg-primary text-white p-2 rounded-lg">
                <BookOpen size={24} />
              </div>
              <h1 className="font-poppins text-2xl font-bold text-primary text-center">Welcome Back</h1>
              <p className="text-sm text-text-secondary">Log in to manage your workshops</p>
            </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <FormInput
            label="Email Address"
            type="email"
            placeholder="instructor@college.edu"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            error={errors.email}
          />
          
          <div className="relative">
            <FormInput
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              error={errors.password}
            />
            <button
              type="button"
              className="absolute right-3 top-8 text-gray-400 hover:text-gray-600 focus-visible:outline-none focus:text-primary transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            <div className="flex justify-end mt-1">
              <button 
                type="button" 
                onClick={() => { setIsForgotPassword(true); setErrors({}); }} 
                className="text-xs font-semibold text-primary hover:text-accent transition-colors"
              >
                Forgot password?
              </button>
            </div>
          </div>

          <Button type="submit" variant="primary" fullWidth className="py-2.5 mt-2">
            Log In
          </Button>
        </form>

            <div className="mt-8 text-center text-sm text-text-secondary">
              Don't have an institutional account?{' '}
              <Link to="/register" className="font-semibold text-primary hover:text-accent transition-colors">
                Register now
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
