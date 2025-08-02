import { useState, useEffect } from 'react';
import { mockLocations, Location } from '../data/mockData';

export function useLocation() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchLocations() {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setLocations(mockLocations);
      setIsLoading(false);
    }, 500);
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