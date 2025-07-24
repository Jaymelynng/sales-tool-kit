import React from 'react';

interface LeadStatusProps {
  status: string;
}

export function LeadStatus({ status }: LeadStatusProps) {
  const styles = {
    new: 'bg-green-100 text-green-800 border border-green-200',
    contacted: 'bg-blue-100 text-blue-800 border border-blue-200',
    scheduled: 'bg-purple-100 text-purple-800 border border-purple-200',
    enrolled: 'bg-indigo-100 text-indigo-800 border border-indigo-200',
    lost: 'bg-slate-100 text-slate-800 border border-slate-200',
  }[status] || 'bg-slate-100 text-slate-800 border border-slate-200';

  return (
    <span className={`px-2 py-1 inline-flex text-xs leading-4 font-medium rounded-full ${styles}`}>
      {status}
    </span>
  );
}