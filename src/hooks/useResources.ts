import { useState, useEffect } from 'react';
import { mockResources, Resource } from '../data/mockData';

export function useResources(locationId?: string) {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    // For now, show all resources regardless of location
    // In a real app, you'd filter by locationId
    setResources(mockResources);
  }, [locationId]);

  return { resources };
}