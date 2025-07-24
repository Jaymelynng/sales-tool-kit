import React, { useState } from 'react';
import { useResources } from '../hooks/useResources';
import { useLocation } from '../hooks/useLocation';
import { FileText, HelpCircle, Lightbulb, Search, ChevronDown } from 'lucide-react';

export function Resources() {
  const { selectedLocation } = useLocation();
  const { resources } = useResources(selectedLocation?.id);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedScript, setSelectedScript] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'scripts' | 'tips' | 'faqs'>(
    'scripts'
  );

  const tabs = [
    {
      id: 'scripts',
      label: 'Scripts',
      icon: FileText,
    },
    {
      id: 'tips',
      label: 'Tips',
      icon: Lightbulb,
    },
    {
      id: 'faqs',
      label: 'FAQs',
      icon: HelpCircle,
    },
  ] as const;

  const filteredResources = resources
    .filter((r) => r.type === activeTab)
    .filter((r) => 
      searchTerm === '' || 
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6">
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              } flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              <tab.icon
                className={`${
                  activeTab === tab.id ? 'text-indigo-500' : 'text-gray-400'
                } -ml-0.5 mr-2 h-5 w-5`}
              />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6 space-y-6">
        {activeTab === 'scripts' && (
          <div className="relative mb-6">
            <select
              value={selectedScript}
              onChange={(e) => setSelectedScript(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 appearance-none bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent cursor-pointer"
            >
              <option value="">Select a script...</option>
              {filteredResources.map((resource) => (
                <option key={resource.id} value={resource.id}>
                  {resource.title}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        )}
        
        {activeTab === 'scripts' ? (
          selectedScript ? (
            <div className="group bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-medium text-slate-900 mb-3">
                {filteredResources.find(r => r.id === selectedScript)?.title}
              </h3>
              <p className="text-slate-600 whitespace-pre-line">
                {filteredResources.find(r => r.id === selectedScript)?.content}
              </p>
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              <p>Please select a script from the dropdown above.</p>
            </div>
          )
        ) : filteredResources.length === 0 ? (
          <div className="text-center py-8 text-slate-500">
            <p>No {activeTab} found{searchTerm ? ` matching "${searchTerm}"` : ''}.</p>
          </div>
        ) : (
          filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="group bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-all cursor-pointer border border-slate-200 hover:border-indigo-200"
          >
            <h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {resource.title}
            </h3>
            <p className="text-slate-600 whitespace-pre-line">{resource.content}</p>
          </div>
          ))
        )}
      </div>
    </div>
  );
}