import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalendarRange, Info, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import FormInput from '../components/common/FormInput';

export default function BookWorkshop() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Form, 2: Confirm, 3: Success
  const [formData, setFormData] = useState({
    topic: '',
    college: '',
    attendees: '',
    date: '',
    comments: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.topic) newErrors.topic = 'Please select a topic';
    if (!formData.college) newErrors.college = 'College name is required';
    if (!formData.attendees || isNaN(formData.attendees) || parseInt(formData.attendees) < 10) 
      newErrors.attendees = 'Minimum 10 attendees required';
    if (!formData.date) newErrors.date = 'Proposed date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) setStep(2);
  };

  const handleSubmit = () => {
    setStep(3);
  };

  return (
    <div className="flex-grow bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <Helmet>
        <title>Book a Workshop | FOSSEE</title>
      </Helmet>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm border border-border overflow-hidden">
        
        {/* Header */}
        <div className="bg-primary px-8 py-6 text-white text-center">
          <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CalendarRange size={32} />
          </div>
          <h1 className="font-poppins text-2xl font-bold mb-2">Request a Workshop</h1>
          <p className="text-sm text-gray-200">Fill out the details below to propose a FOSSEE workshop at your institution.</p>
        </div>

        <div className="p-8">
          {/* STEP 1: Form */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-semibold text-text-primary">Workshop Topic</label>
                <select 
                  className={`w-full px-3 py-2 border rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${errors.topic ? 'border-error' : 'border-border'}`}
                  value={formData.topic}
                  onChange={(e) => setFormData({...formData, topic: e.target.value})}
                >
                  <option value="">Select a technical topic...</option>
                  <option value="Python">Advanced Python</option>
                  <option value="OpenFOAM">OpenFOAM</option>
                  <option value="QGIS">QGIS</option>
                  <option value="Scilab">Scilab</option>
                  <option value="Other">Other (Specify in comments)</option>
                </select>
                {errors.topic && <span className="text-xs font-medium text-error">{errors.topic}</span>}
              </div>

              <FormInput
                label="Institution / College Name"
                value={formData.college}
                placeholder="e.g. IIT Bombay"
                onChange={(e) => setFormData({...formData, college: e.target.value})}
                error={errors.college}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="Expected Attendees"
                  type="number"
                  min="10"
                  value={formData.attendees}
                  placeholder="Min. 10"
                  onChange={(e) => setFormData({...formData, attendees: e.target.value})}
                  error={errors.attendees}
                />
                <FormInput
                  label="Proposed Date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  error={errors.date}
                />
              </div>

              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-semibold text-text-primary">Additional Comments (Optional)</label>
                <textarea 
                  className="w-full px-3 py-2 border border-border rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[100px]"
                  placeholder="Any specific infrastructure constraints or focus areas..."
                  value={formData.comments}
                  onChange={(e) => setFormData({...formData, comments: e.target.value})}
                />
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
                <Button variant="ghost" onClick={() => navigate(-1)}>Cancel</Button>
                <Button variant="primary" onClick={handleNext}>Review Request</Button>
              </div>
            </div>
          )}

          {/* STEP 2: Confirmation */}
          {step === 2 && (
            <div className="space-y-6 text-text-primary">
              <h2 className="font-poppins font-bold text-xl border-b pb-2">Review Your Request</h2>
              <div className="bg-gray-50 p-4 rounded-lg space-y-4 text-sm border border-border">
                <div className="grid grid-cols-3">
                  <span className="font-semibold text-text-secondary">Topic:</span>
                  <span className="col-span-2 font-medium">{formData.topic}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-semibold text-text-secondary">Institution:</span>
                  <span className="col-span-2 font-medium">{formData.college}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-semibold text-text-secondary">Attendees:</span>
                  <span className="col-span-2 font-medium">{formData.attendees}</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-semibold text-text-secondary">Proposed Date:</span>
                  <span className="col-span-2 font-medium">{formData.date}</span>
                </div>
                {formData.comments && (
                  <div className="grid grid-cols-3">
                    <span className="font-semibold text-text-secondary">Comments:</span>
                    <span className="col-span-2 font-medium italic">{formData.comments}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-primary bg-blue-50 p-3 rounded border border-blue-100">
                <Info size={18} className="shrink-0" />
                <p>Once submitted, an admin will review your request and connect with an instructor within 48 hours.</p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
                <Button variant="ghost" onClick={() => setStep(1)}>Edit Details</Button>
                <Button variant="primary" onClick={handleSubmit}>Submit Request</Button>
              </div>
            </div>
          )}

          {/* STEP 3: Success */}
          {step === 3 && (
            <div className="text-center py-8">
               <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle2 size={40} />
               </div>
               <h2 className="font-poppins font-bold text-2xl mb-2 text-primary">Request Submitted!</h2>
               <p className="text-text-secondary max-w-sm mx-auto mb-8">
                 Your workshop proposal has been successfully registered. You can track its status in your dashboard.
               </p>
               <div className="flex justify-center gap-4">
                 <Button variant="secondary" onClick={() => navigate('/dashboard')}>
                   Go to Dashboard
                 </Button>
                 <Button variant="outline" onClick={() => navigate('/')}>
                   Return Home
                 </Button>
               </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
