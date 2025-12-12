
'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, Mail, Phone, Calendar, Download, Eye
} from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

// Site Colors
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";
const YELLOW = "#D6CE0B";

export default function JobApplicationsPage() {
  const { jobId } = useParams();
  const [selectedApplication, setSelectedApplication] = useState<any>(null);

  const { data, isLoading } = useQuery({
    queryKey: ['applications', jobId],
    queryFn: async () => {
      const res = await fetch(`/api/career/application?jobId=${jobId}`);
      if (!res.ok) throw new Error('Failed to fetch applications');
      return res.json();
    }
  });

  const applications = data?.applications || [];
  const jobTitle = applications.length > 0 ? applications[0].job.title : 'Job Applications';

  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <Link 
          href="/admin/career"
          className="p-2 bg-card rounded-lg border border-border hover:bg-accent transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-muted-foreground" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Applications</h1>
          <p className="text-muted-foreground">
             {isLoading ? 'Loading...' : `Viewing applications for ${jobTitle}`}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* List of Applications */}
        <div className="lg:col-span-1 space-y-4">
           {isLoading ? (
             <div className="text-center py-8 text-muted-foreground">Loading...</div>
           ) : applications.length === 0 ? (
             <div className="premium-card p-8 rounded-xl text-center text-muted-foreground">
                No applications received yet.
             </div>
           ) : (
             applications.map((app: any) => (
               <div 
                key={app.id}
                onClick={() => setSelectedApplication(app)}
                className={`premium-card p-4 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                  selectedApplication?.id === app.id
                    ? 'ring-2 shadow-md'
                    : ''
                }`}
                style={selectedApplication?.id === app.id ? { borderColor: BLUE } : {}}
               >
                 <div className="flex justify-between items-start mb-2">
                   <h3 className="font-semibold text-foreground">{app.name}</h3>
                   <span className="text-xs text-muted-foreground">
                     {format(new Date(app.createdAt), 'MMM dd')}
                   </span>
                 </div>
                 <div className="space-y-1 text-sm text-muted-foreground">
                   <div className="flex items-center gap-2">
                     <Mail className="w-3 h-3" /> {app.email}
                   </div>
                   <div className="flex items-center gap-2">
                     <Phone className="w-3 h-3" /> {app.phone}
                   </div>
                 </div>
               </div>
             ))
           )}
        </div>

        {/* Detail View */}
        <div className="lg:col-span-2">
          {selectedApplication ? (
            <div className="premium-card rounded-2xl shadow-sm p-8 sticky top-6">
               <div className="flex justify-between items-start mb-8">
                 <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{selectedApplication.name}</h2>
                    <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                       <span className="flex items-center gap-1.5 bg-muted px-3 py-1 rounded-lg">
                         <Mail className="w-4 h-4" /> {selectedApplication.email}
                       </span>
                       <span className="flex items-center gap-1.5 bg-muted px-3 py-1 rounded-lg">
                         <Phone className="w-4 h-4" /> {selectedApplication.phone}
                       </span>
                       <span className="flex items-center gap-1.5 bg-muted px-3 py-1 rounded-lg">
                         <Calendar className="w-4 h-4" /> Applied {format(new Date(selectedApplication.createdAt), 'PPP')}
                       </span>
                    </div>
                 </div>
                 {selectedApplication.resumeUrl && (
                   <a 
                     href={selectedApplication.resumeUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 px-4 py-2 text-white rounded-lg shadow-lg transition-colors"
                     style={{ background: `linear-gradient(135deg, ${BLUE}, ${TEAL})` }}
                   >
                     <Download className="w-4 h-4" /> Resume
                   </a>
                 )}
               </div>

               <div className="space-y-8">
                 {selectedApplication.address && (
                    <div>
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Address</h3>
                        <p className="text-muted-foreground">{selectedApplication.address}</p>
                    </div>
                 )}

                 {selectedApplication.coverLetter && (
                    <div>
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Why Join Us</h3>
                        <div className="bg-muted p-4 rounded-xl text-muted-foreground whitespace-pre-wrap">
                            {selectedApplication.coverLetter}
                        </div>
                    </div>
                 )}

                 {selectedApplication.education && (
                    <div>
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Education</h3>
                        <div className="bg-muted p-4 rounded-xl text-muted-foreground whitespace-pre-wrap">
                            {selectedApplication.education}
                        </div>
                    </div>
                 )}

                 {selectedApplication.experience && (
                    <div>
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Experience</h3>
                        <div className="bg-muted p-4 rounded-xl text-muted-foreground whitespace-pre-wrap">
                            {selectedApplication.experience}
                        </div>
                    </div>
                 )}

                 {selectedApplication.skills && (
                    <div>
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Skills</h3>
                        <div className="bg-muted p-4 rounded-xl text-muted-foreground whitespace-pre-wrap">
                            {selectedApplication.skills}
                        </div>
                    </div>
                 )}
               </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground p-12 border-2 border-dashed border-border rounded-2xl">
               <Eye className="w-12 h-12 mb-4 opacity-50" />
               <p className="text-lg font-medium">Select an application to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
