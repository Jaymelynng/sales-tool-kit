import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface Lead {
  id: string;
  parent_name: string;
  child_name: string;
  email: string;
  phone: string;
  source: string;
  notes: string;
  status: string;
  temperature: string;
  follow_up_date: string;
}

export function useLeads(locationId?: string) {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    async function fetchLeads() {
      let query = supabase.from('leads').select('*');
      console.log('Fetching leads...');

      if (locationId) {
        query = query.eq('location_id', locationId);
      }

      const { data, error } = await query;
      console.log('Leads data:', data);
      console.log('Error if any:', error);
      
      if (!error && data) {
        setLeads(data);
      }
    }

    fetchLeads();
  }, [locationId]);

  return { leads };
}