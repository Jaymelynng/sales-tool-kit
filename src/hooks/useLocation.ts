import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface Location {
  id: string;
  custom_id: string;
  name: string;
}

export function useLocation() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchLocations() {
    setIsLoading(true);
    console.log('Fetching locations...');
    const { data, error } = await supabase
      .from('locations')
      .select('id, custom_id, name')
      .order('name');
    
    console.log('Locations data:', data);
    console.log('Error if any:', error);
    
    if (!error && data) {
      setLocations(data);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchLocations();
  }, []);

  return { 
    locations, 
    selectedLocation, 
    setSelectedLocation, 
    refreshLocations: fetchLocations,
    isLoading 
  };
}