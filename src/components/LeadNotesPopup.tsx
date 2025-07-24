import React from 'react';

interface LeadNotesPopupProps {
  notes: string;
  isVisible: boolean;
}

export function LeadNotesPopup({ notes, isVisible }: LeadNotesPopupProps) {
  if (!isVisible || !notes) return null;

  const formattedNotes = notes.split('\n').map((line, i) => (
    <p key={i} className="mb-2 last:mb-0">
      {line}
    </p>
  ));

  return (
    <div className="absolute z-50 w-80 bg-white rounded-lg shadow-xl border border-slate-200 p-4 transform -translate-y-full -translate-x-1/2 left-1/2 top-0 mt-2">
      <div className="text-sm text-slate-600">
        {formattedNotes}
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-r border-b border-slate-200"></div>
    </div>
  );
}