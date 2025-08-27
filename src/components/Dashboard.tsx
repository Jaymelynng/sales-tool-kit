import React from 'react';
import { Calendar, TrendingUp, Flame, Trophy, UserPlus } from 'lucide-react';
import { useStats } from '../hooks/useStats';
import { useLocation } from '../hooks/useLocation';

export function Dashboard() {
  const { selectedLocation } = useLocation();
  const { stats } = useStats(selectedLocation?.id);

  const statCards = [
    {
      title: 'Follow-ups',
      value: stats?.follow_ups || 0,
      icon: Calendar,
      color: 'bg-blue-500',
      subtitle: 'Prompt follow-ups turn leads into sign-ups!',
    },
    {
      title: 'Conversions',
      value: `${stats?.conversions || 0}%`,
      icon: TrendingUp,
      color: 'bg-green-500',
      subtitle: 'Keep the momentum going!',
    },
    {
      title: 'Hot Leads',
      value: stats?.hot_leads || 0,
      icon: Flame,
      color: 'bg-red-500',
      subtitle: 'Strike while the iron is hot!',
    },
    {
      title: 'Recent Wins',
      value: stats?.recent_wins || 0,
      icon: Trophy,
      color: 'bg-purple-500',
      subtitle: 'Amazing work! Keep closing!',
    },
    {
      title: 'New Leads',
      value: `${stats?.new_leads || 0} out of ${stats?.total_leads || 0} total leads`,
      icon: UserPlus,
      color: 'bg-indigo-500',
      subtitle: '',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      {statCards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">{card.title}</p>
              <p className="text-2xl font-bold mt-1">{card.value}</p>
              {card.subtitle && (
                <p className="text-xs text-gray-400 mt-1">{card.subtitle}</p>
              )}
            </div>
            <div className={`${card.color} p-2 rounded-full`}>
              <card.icon className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}