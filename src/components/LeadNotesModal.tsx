import React from 'react';
import { X } from 'lucide-react';

interface LeadNotesModalProps {
  notes: string;
  isOpen: boolean;
  onClose: () => void;
  parentName: string;
}

export function LeadNotesModal({ notes, isOpen, onClose, parentName }: LeadNotesModalProps) {
  if (!isOpen || !notes) return null;

  const formattedNotes = notes.split('\n').map((line, i) => (
    <p key={i} className="mb-2 last:mb-0">
      {line}
    </p>
  ));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-96 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">
            Notes for {parentName}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto max-h-80">
          <div className="text-sm text-slate-600">
            {formattedNotes}
          </div>
        </div>
      </div>
    </div>
  );
}