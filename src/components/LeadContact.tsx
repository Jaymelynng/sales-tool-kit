import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface LeadContactProps {
  email: string;
  phone: string;
}

export function LeadContact({ email, phone }: LeadContactProps) {
  return (
    <div className="space-y-1">
      {email && (
        <div className="flex items-center gap-1.5 text-slate-600">
          <Mail className="w-3.5 h-3.5" />
          <a href={`mailto:${email}`} className="hover:text-indigo-600 transition-colors">
            {email}
          </a>
        </div>
      )}
      {phone && (
        <div className="flex items-center gap-1.5 text-slate-600">
          <Phone className="w-3.5 h-3.5" />
          <a href={`tel:${phone}`} className="hover:text-indigo-600 transition-colors">
            {phone}
          </a>
        </div>
      )}
    </div>
  );
}