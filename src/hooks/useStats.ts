import { useState, useEffect } from 'react';
import { calculateStatsFromLeads, GymStats, mockLeads } from '../data/mockData';

export function useStats(locationId?: string) {
  const [stats, setStats] = useState<GymStats | null>(null);

  useEffect(() => {
    // Filter leads by location if locationId is provided
    const filteredLeads = locationId 
      ? mockLeads.filter(lead => lead.location_id === locationId)
      : mockLeads;
    
    // Calculate stats from actual lead data
    const calculatedStats = calculateStatsFromLeads(filteredLeads);
    setStats(calculatedStats);
  }, [locationId]);

  return { stats };
}