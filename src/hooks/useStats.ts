import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface GymStats {
  total_leads: number;
  new_leads: number;
  successes: number;
}

export function useStats(locationId?: string) {
  const [stats, setStats] = useState<GymStats | null>(null);

  useEffect(() => {
    async function fetchStats() {
      if (!locationId) {
        const { data: totals, error } = await supabase
          .from('gym_stats')
          .select('total_leads, new_leads, successes')
          .maybeSingle();

        if (!error && totals) {
          setStats(totals);
        }
        return;
      }

      const { data, error } = await supabase
        .from('gym_stats')
        .select('*')
        .eq('location_id', locationId)
        .maybeSingle();

      if (!error && data) {
        setStats(data);
      }
    }

    fetchStats();
  }, [locationId]);

  return { stats };
}