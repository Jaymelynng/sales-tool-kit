import React from 'react';
import { LocationSelector } from './components/LocationSelector';
import { Dashboard } from './components/Dashboard';
import { LeadsTable } from './components/LeadsTable';
import { Resources } from './components/Resources';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <LocationSelector />
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Dashboard />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Leads</h2>
            <LeadsTable />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Resources</h2>
            <Resources />
          </div>
        </div>
      </main>
    </div>
  );
}