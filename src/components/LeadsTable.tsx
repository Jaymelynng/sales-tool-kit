import React, { useState } from 'react';
import { useLeads } from '../hooks/useLeads';
import { useLocation } from '../hooks/useLocation';
import { LeadStatus } from './LeadStatus';
import { LeadTemperature } from './LeadTemperature';
import { LeadContact } from './LeadContact';
import { LeadNotesPopup } from './LeadNotesPopup';
import { StickyNote, Calendar } from 'lucide-react';

export function LeadsTable() {
  const { selectedLocation } = useLocation();
  const { leads } = useLeads(selectedLocation?.id);
  const [hoveredLeadId, setHoveredLeadId] = useState<string | null>(null);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-slate-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Parent Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Child Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Source
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Notes
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Temperature
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Follow-up
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                  {lead.parent_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                  {lead.child_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                  <LeadContact email={lead.email} phone={lead.phone} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                  {lead.source}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 relative">
                  {lead.notes && (
                    <div
                      className="relative inline-flex items-center gap-1 text-slate-400 hover:text-indigo-500 transition-colors"
                      onMouseEnter={() => setHoveredLeadId(lead.id)}
                      onMouseLeave={() => setHoveredLeadId(null)}
                    >
                      <StickyNote className="w-4 h-4" />
                      <span className="text-xs font-medium">View Notes</span>
                      <LeadNotesPopup
                        notes={lead.notes}
                        isVisible={hoveredLeadId === lead.id}
                      />
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <LeadStatus status={lead.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <LeadTemperature temperature={lead.temperature} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                  {lead.follow_up_date ? (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(lead.follow_up_date).toLocaleDateString()}
                    </div>
                  ) : (
                    '-'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}