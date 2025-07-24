import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface Resource {
  id: string;
  type: 'scripts' | 'tips' | 'faqs';
  title: string;
  content: string;
}

export function useResources(locationId?: string) {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    async function fetchResources() {
      let query = supabase.from('resources').select('*');
      console.log('Fetching resources...');

      if (locationId) {
        query = query.eq('location_id', locationId);
      }

      const { data, error } = await query;
      console.log('Resources data:', data);
      console.log('Error if any:', error);
      
      if (!error && data) {
        setResources(data);
      }
    }

    fetchResources();
  }, [locationId]);

  return { resources };
}