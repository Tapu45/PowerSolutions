
'use client';

import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { X, Save, Type, MapPin, Briefcase } from 'lucide-react';
import RichTextEditor from '@/components/RichTextEditor';

// Site Colors
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";
const YELLOW = "#D6CE0B";

interface JobFormProps {
  job?: any;
  onClose: () => void;
}

export default function JobForm({ job, onClose }: JobFormProps) {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    department: '',
    location: '',
    type: 'Full-time',
    status: 'OPEN',
    description: '',
    requirements: '',
  });

  useEffect(() => {
    if (job) {
      setFormData({
        title: job.title,
        slug: job.slug,
        department: job.department,
        location: job.location,
        type: job.type,
        status: job.status,
        description: job.description,
        requirements: job.requirements,
      });
    }
  }, [job]);

  // Auto-generate slug from title
  useEffect(() => {
    if (!job && formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title, job]);

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const url = '/api/career/job';
      const method = job ? 'PUT' : 'POST';
      const body = job ? { ...data, id: job.id } : data;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
          const errorData = await res.json();
          throw new Error(JSON.stringify(errorData.error) || 'Failed to save job');
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-jobs'] });
      onClose();
    },
    onError: (error) => {
        alert(`Error: ${error.message}`);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-border">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">
            {job ? 'Edit Job' : 'Post New Job'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <form id="job-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Job Title</label>
                <div className="relative">
                  <Type className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all text-sm text-foreground placeholder:text-muted-foreground"
                    placeholder="e.g. Senior Software Engineer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Slug</label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all text-sm font-mono text-foreground placeholder:text-muted-foreground"
                  placeholder="senior-software-engineer"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div>
                <label className="block text-sm font-medium text-foreground mb-2">Department</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all text-sm text-foreground placeholder:text-muted-foreground"
                    placeholder="e.g. Engineering"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all text-sm text-foreground placeholder:text-muted-foreground"
                    placeholder="e.g. Remote / New York"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Job Type</label>
                    <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all text-sm text-foreground"
                    >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Status</label>
                    <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all text-sm text-foreground"
                    >
                        <option value="OPEN">Open</option>
                        <option value="CLOSED">Closed</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Job Description</label>
              <div className="border border-border rounded-xl overflow-hidden">
                <RichTextEditor 
                  content={formData.description} 
                  onChange={(content) => setFormData(prev => ({ ...prev, description: content }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Requirements</label>
              <div className="border border-border rounded-xl overflow-hidden">
                <RichTextEditor 
                  content={formData.requirements} 
                  onChange={(content) => setFormData(prev => ({ ...prev, requirements: content }))}
                />
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex justify-end gap-4 bg-muted">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-border text-muted-foreground font-medium hover:bg-accent transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="job-form"
            disabled={mutation.isPending}
            className="px-6 py-2.5 rounded-xl text-white font-medium shadow-lg transition-all flex items-center gap-2 disabled:opacity-60"
            style={{ background: `linear-gradient(135deg, ${BLUE}, ${TEAL})` }}
          >
            {mutation.isPending ? 'Saving...' : (
              <>
                <Save className="w-4 h-4" /> Save Job
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
