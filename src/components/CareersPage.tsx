import { motion } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import { Heart, Users, TrendingUp, MapPin, Clock, Briefcase, Upload, Video, CheckCircle, AlertCircle, Loader, X, Shield } from 'lucide-react';

export function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    whyApply: '',
    strengths: '',
    teamWork: '',
    adaptQuickly: '',
    officeWork: 'Yes'
  });
  const [cvFile, setCvFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const recaptchaRef = useRef(null);
  const recaptchaWidgetId = useRef(null);

  const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
  const N8N_WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_URL_HERE'; // Replace with your actual n8n webhook URL

  const values = [
    {
      icon: Heart,
      title: 'Passion for Sustainability',
      description: 'We\'re committed to creating a greener future through innovative energy solutions.',
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented individuals from diverse backgrounds in a supportive environment.',
    },
    {
      icon: TrendingUp,
      title: 'Growth & Development',
      description: 'Continuous learning opportunities and career advancement in a fast-growing startup.',
    },
  ];

  const benefits = [
    'Competitive salary and equity options',
    'Flexible working hours and remote options',
    'Health insurance and wellness programs',
    'Professional development budget',
    'Modern office in Berlin',
    'Team events and offsites',
  ];

  const openRoles = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Berlin, Germany',
      type: 'Full-time',
      description: 'Lead the development of our AI-powered energy forecasting algorithms.',
      responsibilities: [
        'Design and implement machine learning models for energy prediction',
        'Optimize AI algorithms for production deployment',
        'Collaborate with data engineers and product teams',
        'Mentor junior engineers and conduct code reviews'
      ],
      requirements: [
        '5+ years of experience in AI/ML engineering',
        'Strong knowledge of Python, TensorFlow/PyTorch',
        'Experience with time-series forecasting',
        'PhD or Masters in Computer Science or related field preferred'
      ]
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      department: 'Product',
      location: 'Berlin, Germany',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for our energy management platform.',
      responsibilities: [
        'Define product vision and strategy',
        'Gather and prioritize customer requirements',
        'Work closely with engineering and design teams',
        'Analyze product metrics and user feedback'
      ],
      requirements: [
        '3+ years of product management experience',
        'Experience in SaaS or energy tech industry',
        'Strong analytical and communication skills',
        'Technical background preferred'
      ]
    },
    {
      id: 'sales-engineer',
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Berlin, Germany / Remote',
      type: 'Full-time',
      description: 'Bridge technical expertise with customer needs to drive solution adoption.',
      responsibilities: [
        'Conduct technical product demonstrations',
        'Support sales team in customer engagements',
        'Provide technical solutions and proposals',
        'Gather customer feedback for product development'
      ],
      requirements: [
        '2+ years in sales engineering or solutions consulting',
        'Technical background in software or IoT',
        'Excellent presentation and communication skills',
        'Understanding of energy management systems'
      ]
    },
    {
      id: 'iot-hardware-engineer',
      title: 'IoT Hardware Engineer',
      department: 'Engineering',
      location: 'Berlin, Germany',
      type: 'Full-time',
      description: 'Design and develop next-generation smart energy sensors and devices.',
      responsibilities: [
        'Design hardware for IoT energy monitoring devices',
        'Develop embedded firmware and drivers',
        'Test and validate hardware prototypes',
        'Collaborate with software teams on integration'
      ],
      requirements: [
        '4+ years in hardware engineering',
        'Experience with embedded systems and IoT protocols',
        'Knowledge of power electronics and sensors',
        'Strong problem-solving and debugging skills'
      ]
    },
    {
      id: 'marketing-specialist',
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Berlin, Germany / Hybrid',
      type: 'Full-time',
      description: 'Create compelling campaigns to showcase our energy solutions.',
      responsibilities: [
        'Develop and execute marketing campaigns',
        'Manage social media and content strategy',
        'Analyze campaign performance and ROI',
        'Coordinate with design and sales teams'
      ],
      requirements: [
        '2+ years in B2B marketing',
        'Experience in tech or sustainability sector',
        'Strong writing and content creation skills',
        'Familiarity with marketing automation tools'
      ]
    },
  ];

  useEffect(() => {
    if (window.grecaptcha) {
      setRecaptchaLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
    script.async = true;
    script.defer = true;

    window.onRecaptchaLoad = () => {
      setRecaptchaLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      delete window.onRecaptchaLoad;
    };
  }, []);

  useEffect(() => {
    if (recaptchaLoaded && selectedJob && recaptchaRef.current && recaptchaWidgetId.current === null) {
      try {
        recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: handleRecaptchaVerify,
          'expired-callback': handleRecaptchaExpired,
          'error-callback': handleRecaptchaError,
        });
      } catch (error) {
        console.error('reCAPTCHA render error:', error);
      }
    }
  }, [recaptchaLoaded, selectedJob]);

  const handleRecaptchaVerify = (token) => {
    setRecaptchaToken(token);
    setError(null);
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null);
    setError('reCAPTCHA expired. Please verify again.');
  };

  const handleRecaptchaError = () => {
    setRecaptchaToken(null);
    setError('reCAPTCHA error. Please refresh the page and try again.');
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      linkedin: '',
      whyApply: '',
      strengths: '',
      teamWork: '',
      adaptQuickly: '',
      officeWork: 'Yes'
    });
    setCvFile(null);
    setVideoFile(null);
    setError(null);
    setRecaptchaToken(null);
    
    if (window.grecaptcha && recaptchaWidgetId.current !== null) {
      try {
        window.grecaptcha.reset(recaptchaWidgetId.current);
      } catch (error) {
        console.error('reCAPTCHA reset error:', error);
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateFile = (file, type) => {
    const maxSize = type === 'cv' ? 10 * 1024 * 1024 : 50 * 1024 * 1024;
    const allowedTypes = type === 'cv' 
      ? ['application/pdf']
      : ['video/mp4'];

    if (!file) return { valid: false, error: 'No file selected' };
    if (file.size > maxSize) {
      return { 
        valid: false, 
        error: `${type === 'cv' ? 'CV' : 'Video'} file must be less than ${type === 'cv' ? '10MB' : '50MB'}` 
      };
    }
    if (!allowedTypes.includes(file.type)) {
      return { 
        valid: false, 
        error: `Invalid file type. Please upload ${type === 'cv' ? 'a PDF file only' : 'an MP4 video only'}` 
      };
    }
    return { valid: true };
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const validation = validateFile(file, type);
    
    if (!validation.valid) {
      setError(validation.error);
      e.target.value = '';
      return;
    }

    if (type === 'cv') {
      setCvFile(file);
    } else {
      setVideoFile(file);
    }
    setError(null);
  };

  const removeFile = (type) => {
    if (type === 'cv') {
      setCvFile(null);
    } else {
      setVideoFile(null);
    }
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return 'First name is required';
    if (!formData.lastName.trim()) return 'Last name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Invalid email format';
    if (formData.phone && !/^[\d\s+()-]+$/.test(formData.phone)) return 'Invalid phone number format';
    if (formData.linkedin && !formData.linkedin.startsWith('http')) return 'LinkedIn URL must start with http:// or https://';
    if (!formData.whyApply.trim()) return 'Please answer why you applied';
    if (!formData.strengths.trim()) return 'Please describe your strengths and weaknesses';
    if (!formData.teamWork.trim()) return 'Please share your teamwork experience';
    if (!formData.adaptQuickly.trim()) return 'Please share your adaptation experience';
    if (!cvFile) return 'CV/Resume is required';
    if (!recaptchaToken) return 'Please complete the reCAPTCHA verification';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setSubmitting(true);

    try {
      const formDataToSend = new FormData();
      
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      
      formDataToSend.append('appliedRole', selectedJob.title);
      formDataToSend.append('jobDepartment', selectedJob.department);
      formDataToSend.append('jobLocation', selectedJob.location);
      formDataToSend.append('jobType', selectedJob.type);
      formDataToSend.append('jobDescription', selectedJob.description);
      formDataToSend.append('jobResponsibilities', JSON.stringify(selectedJob.responsibilities));
      formDataToSend.append('jobRequirements', JSON.stringify(selectedJob.requirements));
      formDataToSend.append('submittedAt', new Date().toISOString());
      
      formDataToSend.append('cv', cvFile);
      if (videoFile) {
        formDataToSend.append('video', videoFile);
      }
      formDataToSend.append('recaptchaToken', recaptchaToken);

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Submission failed');
      }

      resetForm();
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (err) {
      setError(err.message || 'Failed to submit application. Please check your connection and try again.');
      console.error('Submission error:', err);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      if (window.grecaptcha && recaptchaWidgetId.current !== null) {
        try {
          window.grecaptcha.reset(recaptchaWidgetId.current);
          setRecaptchaToken(null);
        } catch (resetError) {
          console.error('reCAPTCHA reset error:', resetError);
        }
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleBackToJobs = () => {
    setSelectedJob(null);
    resetForm();
    recaptchaWidgetId.current = null;
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
  };

  if (submitting) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <Loader className="w-16 h-16 text-[rgb(1,12,177)] mx-auto mb-4 animate-spin" />
          <h2 className="mb-2 text-gray-900">Submitting Your Application...</h2>
          <p className="text-gray-600">
            Please wait while we process your application. This may take a few moments.
          </p>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="mb-2 text-gray-900">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your application. We'll review your profile and get back to you within 48 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setSelectedJob(null);
            }}
            className="bg-[rgb(1,12,177)] text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            View More Positions
          </button>
        </div>
      </div>
    );
  }

  if (selectedJob) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={handleBackToJobs}
            className="mb-6 text-[rgb(1,12,177)] hover:text-blue-800 flex items-center gap-2"
          >
            ← Back to all positions
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h1 className="mb-4 text-gray-900">{selectedJob.title}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="flex items-center gap-2 text-gray-600">
                <Briefcase size={18} />
                {selectedJob.department}
              </span>
              <span className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} />
                {selectedJob.location}
              </span>
              <span className="flex items-center gap-2 text-gray-600">
                <Clock size={18} />
                {selectedJob.type}
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="mb-3">About the Role</h3>
              <p className="text-gray-700">{selectedJob.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="mb-3">Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {selectedJob.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3">Requirements</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="mb-6 text-gray-900">Apply for this position</h2>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={submitting}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={submitting}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={submitting}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Include country code"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={submitting}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  name="linkedin"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={submitting}
                />
              </div>

              <div className="border-t pt-6">
                <h3 className="mb-4">Assessment Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Why did you apply to this role? *
                    </label>
                    <textarea
                      name="whyApply"
                      rows={3}
                      value={formData.whyApply}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      disabled={submitting}
                      placeholder="Tell us what motivated you to apply..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      What are your strengths and weaknesses for this role? *
                    </label>
                    <textarea
                      name="strengths"
                      rows={3}
                      value={formData.strengths}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      disabled={submitting}
                      placeholder="Share your key strengths and areas for improvement..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Tell me about a time you worked in a team *
                    </label>
                    <textarea
                      name="teamWork"
                      rows={3}
                      value={formData.teamWork}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      disabled={submitting}
                      placeholder="Describe a specific team experience..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Tell me about a time you had to adapt quickly *
                    </label>
                    <textarea
                      name="adaptQuickly"
                      rows={3}
                      value={formData.adaptQuickly}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      disabled={submitting}
                      placeholder="Share a situation where you had to adapt..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Are you able to work in our office? *
                    </label>
                    <select
                      name="officeWork"
                      value={formData.officeWork}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={submitting}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="mb-4">Documents</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Upload CV/Resume * (PDF only, max 10MB)
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition w-fit">
                        <Upload size={18} />
                        Choose File
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => handleFileChange(e, 'cv')}
                          className="hidden"
                          disabled={submitting}
                        />
                      </label>
                      {cvFile && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 px-3 py-2 rounded-lg">
                          <span className="flex-1">{cvFile.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile('cv')}
                            className="text-red-500 hover:text-red-700"
                            disabled={submitting}
                          >
                            <X size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Video Introduction (MP4 only, max 50MB)
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Record a 1-minute video introducing yourself
                    </p>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition w-fit">
                        <Video size={18} />
                        Choose Video
                        <input
                          type="file"
                          accept=".mp4"
                          onChange={(e) => handleFileChange(e, 'video')}
                          className="hidden"
                          disabled={submitting}
                        />
                      </label>
                      {videoFile && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 px-3 py-2 rounded-lg">
                          <span className="flex-1">{videoFile.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile('video')}
                            className="text-red-500 hover:text-red-700"
                            disabled={submitting}
                          >
                            <X size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="mb-4 flex items-center gap-2">
                  <Shield size={20} className="text-[rgb(1,12,177)]" />
                  Security Verification
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div ref={recaptchaRef} className="flex justify-center"></div>
                  {!recaptchaLoaded && (
                    <div className="text-center text-sm text-gray-500 py-4">
                      Loading reCAPTCHA...
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[rgb(1,12,177)] hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[rgb(1,12,177)] hover:underline">
                      Terms of Service
                    </a>{' '}
                    apply.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-6">
                <button
                  type="button"
                  onClick={handleBackToJobs}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex items-center gap-2 px-8 py-3 bg-[rgb(1,12,177)] text-white rounded-lg hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
                >
                  {submitting ? (
                    <>
                      <Loader className="animate-spin" size={18} />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-[rgb(1,12,177)]/95 via-blue-800/90 to-purple-900/85"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-6"
            >
              <Users className="w-4 h-4 text-green-400" />
              <span className="text-white">We're Hiring Passionate Innovators</span>
            </motion.div>
            <h1 className="mb-6 text-white">Join Our Mission</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Help us revolutionize energy management and build a sustainable future for businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[rgb(1,12,177)]">Why Join Apollo?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be part of something bigger - a team dedicated to making a real impact on the planet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[rgb(1,12,177)] to-blue-600 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 overflow-hidden border border-blue-100"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-200/20 to-blue-200/20 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="mb-8 text-center text-[rgb(1,12,177)]">What We Offer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 hover:bg-white/80 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-green-500/30">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-[rgb(1,12,177)]">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Apollo, we believe in fostering an environment where innovation thrives, ideas are valued, and every team member can make a meaningful impact.
              </p>
              <p className="text-gray-600 mb-6">
                We're a diverse team of engineers, designers, and business professionals united by a common goal: to transform how businesses manage energy.
              </p>
              <p className="text-gray-600">
                Whether you're working from our Berlin office or remotely, you'll be part of a collaborative culture that values creativity, transparency, and continuous learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 aspect-video"
            >
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[rgb(1,12,177)]">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to join our growing team
            </p>
          </motion.div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {openRoles.map((role, index) => (
              <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => {
                setSelectedJob(role);
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                }, 0);
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="mb-2">{role.title}</h3>
                  <p className="text-gray-600 mb-4">{role.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {role.department}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {role.type}
                    </span>
                  </div>
                </div>
                <button
                  className="bg-[rgb(1,12,177)] text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors whitespace-nowrap"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600">
              Don't see a perfect fit?{' '}
              <a href="/contact" className="text-[rgb(1,12,177)] hover:underline">
                Send us your resume
              </a>
              {' '}and let's talk about future opportunities.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
