import React from 'react';
import { Thermometer } from 'lucide-react';

interface LeadTemperatureProps {
  temperature: string;
}

export function LeadTemperature({ temperature }: LeadTemperatureProps) {
  const styles = {
    hot: 'bg-red-100 text-red-800 border border-red-200',
    warm: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    cold: 'bg-blue-100 text-blue-800 border border-blue-200',
  }[temperature] || 'bg-slate-100 text-slate-800 border border-slate-200';

  return (
    <span className={`px-2 py-1 inline-flex items-center gap-1 text-xs leading-4 font-medium rounded-full ${styles}`}>
      <Thermometer className="w-3 h-3" />
      {temperature}
    </span>
  );
}