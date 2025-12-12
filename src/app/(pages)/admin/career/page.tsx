
'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  Plus, Search, Edit2, Trash2, Users, Briefcase, MapPin, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import JobForm from './lazy/JobForm';

// Site Colors
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";
const YELLOW = "#D6CE0B";

export default function AdminCareerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['admin-jobs', searchTerm],
    queryFn: async () => {
      const res = await fetch(`/api/career/job?limit=100`);
      if (!res.ok) throw new Error('Failed to fetch jobs');
      return res.json();
    }
  });

  const jobs = data?.jobs || [];

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/career/job?id=${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete job');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-jobs'] });
    }
  });

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this job?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleEdit = (job: any) => {
    setEditingJob(job);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setEditingJob(null);
    setIsModalOpen(true);
  };

  const filteredJobs = jobs.filter((job: any) => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Career Management</h1>
          <p className="text-muted-foreground">Manage job postings and applications</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors shadow-sm"
          style={{ background: `linear-gradient(135deg, ${BLUE}, ${TEAL})` }}
        >
          <Plus className="w-4 h-4" /> Post New Job
        </button>
      </div>

      <div className="premium-card rounded-xl overflow-hidden">
        <div className="p-4 border-b border-border flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] text-sm text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-muted text-muted-foreground font-medium">
                <th className="px-6 py-4">Job Title</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Applicants</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {isLoading ? (
                <tr><td colSpan={7} className="text-center py-8 text-muted-foreground">Loading...</td></tr>
              ) : filteredJobs.length === 0 ? (
                <tr><td colSpan={7} className="text-center py-8 text-muted-foreground">No jobs found.</td></tr>
              ) : (
                filteredJobs.map((job: any) => (
                  <tr key={job.id} className="hover:bg-accent transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">
                      {job.title}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{job.department}</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {job.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{job.type}</td>
                    <td className="px-6 py-4">
                      <span 
                        className="px-2 py-1 rounded-full text-xs font-semibold"
                        style={job.status === 'OPEN' 
                          ? { backgroundColor: `${TEAL}20`, color: TEAL }
                          : { backgroundColor: 'var(--muted)', color: 'var(--muted-foreground)' }
                        }
                      >
                        {job.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                        <Link 
                           href={`/admin/career/${job.id}/applications`}
                           className="inline-flex items-center gap-1 font-medium hover:underline"
                           style={{ color: BLUE }}
                         >
                           <Users className="w-4 h-4" /> View
                       </Link>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={`/career/${job.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-accent rounded-lg text-muted-foreground hover:text-[#0B8FD6] transition-colors"
                          title="Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button 
                          onClick={() => handleEdit(job)}
                          className="p-2 hover:bg-accent rounded-lg text-muted-foreground hover:text-[#0B8FD6] transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(job.id)}
                          className="p-2 hover:bg-destructive/10 rounded-lg text-muted-foreground hover:text-destructive transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <JobForm 
          job={editingJob} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
}
