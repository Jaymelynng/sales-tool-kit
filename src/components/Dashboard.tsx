import React from 'react';
import { Users, Flame, Trophy } from 'lucide-react';
import { useStats } from '../hooks/useStats';
import { useLocation } from '../hooks/useLocation';

export function Dashboard() {
  const { selectedLocation } = useLocation();
  const { stats } = useStats(selectedLocation?.id);

  const statCards = [
    {
      title: 'Total Leads',
      value: stats?.total_leads || 0,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'New Leads',
      value: stats?.new_leads || 0,
      icon: Flame,
      color: 'bg-green-500',
    },
    {
      title: 'Successes',
      value: stats?.successes || 0,
      icon: Trophy,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {statCards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">{card.title}</p>
              <p className="text-3xl font-bold mt-1">{card.value}</p>
            </div>
            <div className={`${card.color} p-3 rounded-full`}>
              <card.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}