import { useState, useEffect } from 'react';
import { mockLeads, Lead } from '../data/mockData';

export function useLeads(locationId?: string) {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    // Filter leads by location if locationId is provided
    const filteredLeads = locationId 
      ? mockLeads.filter(lead => lead.location_id === locationId)
      : mockLeads;
    
    setLeads(filteredLeads);
  }, [locationId]);

  return { leads };
}