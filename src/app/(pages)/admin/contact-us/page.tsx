
'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  Search, Trash2, Mail, Phone, MapPin, Building, Eye, Clock, CheckCircle, XCircle 
} from 'lucide-react';
import { format } from 'date-fns';

// Site Colors
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";
const YELLOW = "#D6CE0B";

enum ContactStatus {
  NEW = 'NEW',
  READ = 'READ',
  RESPONDED = 'RESPONDED'
}

export default function AdminContactPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuery, setSelectedQuery] = useState<any>(null);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['contact-queries'],
    queryFn: async () => {
      const res = await fetch(`/api/contact?limit=100`);
      if (!res.ok) throw new Error('Failed to fetch queries');
      return res.json();
    }
  });

  const queries = data?.queries || [];

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const res = await fetch('/api/contact', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) throw new Error('Failed to update status');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-queries'] });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/contact?id=${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete query');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-queries'] });
      if (selectedQuery) setSelectedQuery(null);
    }
  });

  const handleStatusChange = (status: string) => {
    if (selectedQuery) {
      updateStatusMutation.mutate({ id: selectedQuery.id, status });
      setSelectedQuery({ ...selectedQuery, status });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this query?')) {
      deleteMutation.mutate(id);
    }
  };

  const filteredQueries = queries.filter((q: any) => 
    q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Contact Queries</h1>
          <p className="text-muted-foreground">Manage incoming messages and project requests</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* List of Queries */}
        <div className="lg:col-span-1 space-y-4">
           {/* Search */}
           <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
             <input
               type="text"
               placeholder="Search queries..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full pl-10 pr-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-[#0B8FD6] text-sm text-foreground placeholder:text-muted-foreground shadow-sm"
             />
           </div>

           <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
             {isLoading ? (
               <div className="text-center py-8 text-muted-foreground">Loading...</div>
             ) : filteredQueries.length === 0 ? (
               <div className="premium-card p-8 rounded-xl text-center text-muted-foreground">
                  No queries found.
               </div>
             ) : (
               filteredQueries.map((q: any) => (
                 <div 
                  key={q.id}
                  onClick={() => setSelectedQuery(q)}
                  className={`premium-card p-4 rounded-xl cursor-pointer transition-all hover:shadow-md border border-transparent ${
                    selectedQuery?.id === q.id
                      ? 'ring-1 shadow-md'
                      : 'hover:border-border'
                  } ${q.status === 'NEW' ? 'border-l-4 border-l-[#1BCDC5]' : ''}`}
                  style={selectedQuery?.id === q.id ? { borderColor: BLUE, ringColor: BLUE } : {}}
                 >
                   <div className="flex justify-between items-start mb-2">
                     <h3 className={`font-semibold text-foreground truncate max-w-[180px] ${q.status === 'NEW' ? 'font-bold' : ''}`}>
                        {q.name}
                     </h3>
                     <span className="text-xs text-muted-foreground whitespace-nowrap">
                       {format(new Date(q.createdAt), 'MMM dd')}
                     </span>
                   </div>
                   <div className="space-y-1 text-sm text-muted-foreground">
                     <div className="flex items-center gap-2 truncate">
                       <Mail className="w-3 h-3 flex-shrink-0" /> {q.email}
                     </div>
                     <div className="flex items-center gap-2 truncate">
                       <Clock className="w-3 h-3 flex-shrink-0" /> {q.service}
                     </div>
                   </div>
                 </div>
               ))
             )}
           </div>
        </div>

        {/* Detail View */}
        <div className="lg:col-span-2">
          {selectedQuery ? (
            <div className="premium-card rounded-2xl shadow-sm p-8 sticky top-6 h-full flex flex-col">
               <div className="flex justify-between items-start mb-6 border-b border-border pb-6">
                 <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{selectedQuery.name}</h2>
                    <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                       <span className="flex items-center gap-1.5 bg-muted px-3 py-1 rounded-lg">
                         <Mail className="w-4 h-4" /> {selectedQuery.email}
                       </span>
                       <span className="flex items-center gap-1.5 bg-muted px-3 py-1 rounded-lg">
                         <Phone className="w-4 h-4" /> {selectedQuery.phone}
                       </span>
                       <span className="flex items-center gap-1.5 bg-muted px-3 py-1 rounded-lg">
                         <Clock className="w-4 h-4" /> {format(new Date(selectedQuery.createdAt), 'PP p')}
                       </span>
                    </div>
                 </div>
                 
                 <div className="flex gap-2">
                    <select
                        value={selectedQuery.status}
                        onChange={(e) => handleStatusChange(e.target.value)}
                        className="px-3 py-2 bg-input border border-border rounded-lg text-sm focus:ring-2 focus:ring-[#0B8FD6] outline-none"
                    >
                        <option value="NEW">New</option>
                        <option value="READ">Read</option>
                        <option value="RESPONDED">Responded</option>
                    </select>

                    <button 
                        onClick={() => handleDelete(selectedQuery.id)}
                        className="p-2 hover:bg-destructive/10 rounded-lg text-muted-foreground hover:text-destructive transition-colors"
                        title="Delete"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                 </div>
               </div>

               <div className="space-y-6 flex-1 overflow-y-auto">
                 <div className="grid md:grid-cols-2 gap-6">
                    {selectedQuery.company && (
                        <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                            <Building className="w-5 h-5 text-[#0B8FD6]" />
                            <div>
                                <p className="text-xs text-muted-foreground uppercase font-semibold">Company</p>
                                <p className="text-foreground">{selectedQuery.company}</p>
                            </div>
                        </div>
                    )}
                    
                    {selectedQuery.location && (
                        <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                            <MapPin className="w-5 h-5 text-[#0B8FD6]" />
                            <div>
                                <p className="text-xs text-muted-foreground uppercase font-semibold">Location</p>
                                <p className="text-foreground">{selectedQuery.location}</p>
                            </div>
                        </div>
                    )}
                 </div>

                 <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1BCDC5]" /> Service Interest
                    </h3>
                    <div className="bg-muted px-4 py-3 rounded-xl text-foreground inline-block">
                        {selectedQuery.service}
                    </div>
                 </div>

                 <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Message</h3>
                    <div className="bg-muted p-6 rounded-xl text-foreground whitespace-pre-wrap leading-relaxed border border-border">
                        {selectedQuery.message}
                    </div>
                 </div>
               </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground p-12 border-2 border-dashed border-border rounded-2xl bg-muted/20">
               <Eye className="w-16 h-16 mb-4 opacity-50 text-[#0B8FD6]" />
               <h3 className="text-xl font-bold text-foreground mb-2">No Query Selected</h3>
               <p className="text-lg">Select a query from the list to view full details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
