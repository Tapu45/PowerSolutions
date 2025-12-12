
'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import Link from 'next/link';

// Site Colors
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";
const YELLOW = "#D6CE0B";

interface Job {
  id: string;
  title: string;
  slug: string;
  location: string;
  type: string;
  department: string;
  description: string;
  status: string;
  createdAt: string;
}

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ['jobs', searchTerm, selectedDepartment],
    queryFn: async () => {
      const params = new URLSearchParams({ status: 'OPEN' });
      const res = await fetch(`/api/career/job?${params}`);
      if (!res.ok) throw new Error('Failed to fetch jobs');
      return res.json();
    }
  });

  const jobs: Job[] = data?.jobs || [];
  
  // Extract unique departments for filters
  const departments = Array.from(new Set(jobs.map(job => job.department)));

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment ? job.department === selectedDepartment : true;
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
        {/* Gradient Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: `radial-gradient(circle, ${BLUE}, transparent)` }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: `radial-gradient(circle, ${TEAL}, transparent)` }} />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="inline-block py-2 px-4 rounded-full font-medium text-sm mb-6 border"
              style={{ 
                backgroundColor: `${TEAL}15`, 
                color: TEAL, 
                borderColor: `${TEAL}40` 
              }}
            >
              We're Hiring 🚀
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
              <span className="text-foreground">Join Our Mission to</span><br />
              <span className="gradient-text">Innovate the Future.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Be part of a team that challenges the status quo. We are looking for passionate individuals who are ready to make a significant impact.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter & Search Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pb-12">
        <div className="premium-card rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search roles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] focus:border-[#0B8FD6] transition-all text-foreground placeholder:text-muted-foreground"
            />
          </div>
          
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
             <div className="flex items-center gap-2 text-muted-foreground mr-2">
                <Filter className="w-4 h-4"/>
                <span className="text-sm font-medium">Filters:</span>
             </div>
             {['All Departments', ...departments].map((dept, idx) => (
               <button
                 key={idx}
                 onClick={() => setSelectedDepartment(dept === 'All Departments' ? null : dept as string)}
                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                   (dept === 'All Departments' && !selectedDepartment) || selectedDepartment === dept
                     ? 'text-white shadow-lg'
                     : 'bg-card text-muted-foreground border border-border hover:bg-accent'
                 }`}
                 style={(dept === 'All Departments' && !selectedDepartment) || selectedDepartment === dept ? { background: `linear-gradient(135deg, ${BLUE}, ${TEAL})` } : {}}
               >
                 {dept as string}
               </button>
             ))}
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pb-24">
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="premium-card rounded-2xl h-64 animate-pulse" />
            ))}
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-20">
            <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">No Openings Found</h3>
            <p className="text-muted-foreground">We currently don't have openings matching your criteria. Check back later!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative premium-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-6">
                  <span 
                    className="inline-block py-1 px-3 rounded-md text-xs font-semibold mb-4 tracking-wide uppercase"
                    style={{ backgroundColor: `${YELLOW}20`, color: YELLOW }}
                  >
                    {job.department}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-[#0B8FD6] transition-colors">
                    {job.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    Posted {new Date(job.createdAt).toLocaleDateString()}
                  </span>
                  <Link 
                    href={`/career/${job.slug}`}
                    className="flex items-center gap-2 font-semibold group-hover:gap-3 transition-all"
                    style={{ color: BLUE }}
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
