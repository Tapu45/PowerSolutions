
'use client';

import { useState, useRef } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { 
  MapPin, Clock, ArrowLeft, Upload, CheckCircle, AlertCircle, Briefcase, FileText 
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Site Colors
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";
const YELLOW = "#D6CE0B";

export default function JobDetailPage() {
  const { slug } = useParams();
  const formRef = useRef<HTMLDivElement>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: '',
    coverLetter: '',
    resumeUrl: ''
  });

  const { data: job, isLoading } = useQuery({
    queryKey: ['job', slug],
    queryFn: async () => {
      const res = await fetch(`/api/career/job?slug=${slug}`);
      if (!res.ok) throw new Error('Failed to fetch job');
      return res.json();
    },
    enabled: !!slug
  });

  const uploadResume = async (file: File) => {
    setUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append('file', file);
    formDataUpload.append('folder', 'resumes');

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formDataUpload
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      return data.url;
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload resume. Please try again.');
      return null;
    } finally {
      setUploading(false);
    }
  };

  const submitMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch('/api/career/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error);
      return result;
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let resumeUrl = formData.resumeUrl;
    if (resumeFile && !resumeUrl) {
      resumeUrl = await uploadResume(resumeFile);
      if (!resumeUrl) return;
    }

    if (!resumeUrl) {
        alert("Please upload a resume.");
        return;
    }

    submitMutation.mutate({
      ...formData,
      resumeUrl,
      jobId: job.id
    });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: BLUE }}></div>
      </div>
    );
  }

  if (!job || job.error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
        <h1 className="text-2xl font-bold text-foreground mb-4">Job Not Found</h1>
        <Link href="/career" className="flex items-center gap-2" style={{ color: BLUE }}>
          <ArrowLeft className="w-4 h-4" /> Back to Careers
        </Link>
      </div>
    );
  }

  if (submitMutation.isSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="premium-card p-8 rounded-2xl shadow-xl max-w-md w-full text-center"
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${TEAL}20` }}>
            <CheckCircle className="w-8 h-8" style={{ color: TEAL }} />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Application Submitted!</h2>
          <p className="text-muted-foreground mb-8">
            Thank you for applying to the {job.title} position. We have received your application and will review it shortly.
          </p>
          <Link 
            href="/career"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl w-full transition-colors"
            style={{ backgroundColor: `${BLUE}15`, color: BLUE }}
          >
            Back to Careers
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="premium-card border-b border-border pt-32 pb-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <Link href="/career" className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#0B8FD6] mb-8 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Jobs
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <span 
                className="inline-block py-1 px-3 rounded-md text-xs font-semibold mb-3 tracking-wide uppercase"
                style={{ backgroundColor: `${YELLOW}20`, color: YELLOW }}
              >
                {job.department}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{job.title}</h1>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-5 h-5" style={{ color: TEAL }} />
                  {job.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-5 h-5" style={{ color: TEAL }} />
                  {job.type}
                </div>
              </div>
            </div>
            
            <button 
              onClick={scrollToForm}
              className="px-8 py-3 text-white rounded-xl font-semibold shadow-lg transition-all transform hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg, ${BLUE}, ${TEAL})` }}
            >
              Apply for this Job
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 py-12">
        <div className="grid gap-12">
          {/* Job Description */}
          <div className="premium-card rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5" style={{ color: BLUE }} /> Role Overview
            </h2>
            <div 
              className="prose prose-lg max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </div>

          {/* Requirements */}
          <div className="premium-card rounded-2xl p-8 shadow-sm">
             <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" style={{ color: BLUE }} /> Requirements
            </h2>
             <div 
              className="prose prose-lg max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: job.requirements }}
            />
          </div>

          {/* Application Form */}
          <div ref={formRef} className="premium-card rounded-2xl p-8 shadow-xl scroll-mt-24">
            <div className="text-center mb-10">
               <h2 className="text-3xl font-bold text-foreground mb-2">Apply for this Position</h2>
               <p className="text-muted-foreground">Please fill out the form below to submit your application.</p>
            </div>

            {submitMutation.isError && (
              <div className="mb-8 p-4 rounded-xl flex items-center gap-3" style={{ backgroundColor: '#ff444415', color: '#ff4444' }}>
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p>{(submitMutation.error as Error).message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Resume * (PDF, Word)</label>
                <div 
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                        resumeFile 
                        ? '' 
                        : 'border-border hover:border-[#0B8FD6]'
                    }`}
                    style={resumeFile ? { borderColor: BLUE, backgroundColor: `${BLUE}10` } : {}}
                >
                    <input
                        type="file"
                        id="resume-upload"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                            if (e.target.files?.[0]) {
                                setResumeFile(e.target.files[0]);
                            }
                        }}
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center">
                        <Upload className="w-8 h-8 mb-3" style={{ color: resumeFile ? BLUE : 'var(--muted-foreground)' }} />
                        {resumeFile ? (
                            <span className="font-medium" style={{ color: BLUE }}>{resumeFile.name}</span>
                        ) : (
                            <>
                                <span className="text-foreground font-medium">Click to upload or drag and drop</span>
                                <span className="text-muted-foreground text-sm mt-1">PDF or Word (max 10MB)</span>
                            </>
                        )}
                    </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Education</label>
                <textarea
                  rows={3}
                  value={formData.education}
                  onChange={e => setFormData({...formData, education: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Degree, University, Year"
                />
              </div>

               <div>
                <label className="block text-sm font-medium text-foreground mb-2">Experience</label>
                <textarea
                  rows={3}
                  value={formData.experience}
                  onChange={e => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Role, Company, Duration, Key Responsibilities..."
                />
              </div>

             <div>
                <label className="block text-sm font-medium text-foreground mb-2">Key Skills</label>
                <textarea
                  rows={2}
                  value={formData.skills}
                  onChange={e => setFormData({...formData, skills: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="React, Node.js, Leadership, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Why do you want to join us?</label>
                <textarea
                  rows={4}
                  value={formData.coverLetter}
                  onChange={e => setFormData({...formData, coverLetter: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Tell us about your motivation..."
                />
              </div>

              <button
                type="submit"
                disabled={submitMutation.isPending || uploading}
                className="w-full py-4 text-white rounded-xl font-bold text-lg shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
                style={{ background: `linear-gradient(135deg, ${BLUE}, ${TEAL})` }}
              >
                {submitMutation.isPending || uploading ? 'Submitting Application...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
