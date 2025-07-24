import React from 'react';
import { useLocation } from '../hooks/useLocation';
import { Building2, RefreshCw } from 'lucide-react';

export function LocationSelector() {
  const { locations, selectedLocation, setSelectedLocation, refreshLocations, isLoading } = useLocation();

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-72">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Building2 className="w-5 h-5 text-gray-500" />
        </div>
        <select
          value={selectedLocation?.id || ''}
          onChange={(e) => {
            const location = locations.find((loc) => loc.id === e.target.value);
            console.log('Selected location:', location);
            setSelectedLocation(location || null);
          }}
          className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md transition-all hover:border-indigo-300"
        >
          <option value="">All Locations</option>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name} ({location.custom_id})
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() => refreshLocations()}
        disabled={isLoading}
        className="p-2 text-gray-500 hover:text-indigo-600 transition-colors disabled:opacity-50"
        title="Refresh locations"
      >
        <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
      </button>
    </div>
  );
}