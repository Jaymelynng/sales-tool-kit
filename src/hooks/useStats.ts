import { useState, useEffect } from 'react';
import { mockStats, getAggregatedStats, GymStats } from '../data/mockData';

export function useStats(locationId?: string) {
  const [stats, setStats] = useState<GymStats | null>(null);

  useEffect(() => {
    if (!locationId) {
      // Return aggregated stats for all locations
      setStats(getAggregatedStats());
    } else {
      // Return stats for specific location
      setStats(mockStats[locationId] || null);
    }
  }, [locationId]);

  return { stats };
}