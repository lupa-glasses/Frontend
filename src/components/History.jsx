import React, { useState } from 'react';

const History = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Placeholder data - in real app this would come from your backend
  const dailyScripts = [
    {
      date: '2024-03-20',
      summary: 'Today you analyzed 3 documents and created 2 summaries',
      activities: [
        { time: '10:00 AM', action: 'Analyzed document: Q4 Financial Report' },
        { time: '11:30 AM', action: 'Created summary of marketing strategy' },
        { time: '2:00 PM', action: 'Processed customer feedback data' }
      ]
    },
    {
      date: '2024-03-19',
      summary: 'Today you processed 5 data sets and generated insights',
      activities: [
        { time: '9:00 AM', action: 'Data analysis: Customer behavior patterns' },
        { time: '1:00 PM', action: 'Generated weekly performance report' }
      ]
    }
  ];

  const filteredScripts = dailyScripts.filter(script => 
    script.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    script.activities.some(activity => 
      activity.action.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Activity History</h1>
      
      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search your history..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Daily Scripts */}
      <div className="space-y-6">
        {filteredScripts.map((day, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="border-b pb-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-800">{day.date}</h2>
              <p className="text-gray-600 mt-2">{day.summary}</p>
            </div>
            
            <div className="space-y-3">
              {day.activities.map((activity, actIndex) => (
                <div key={actIndex} className="flex items-start">
                  <span className="text-sm text-gray-500 w-24">{activity.time}</span>
                  <span className="text-gray-700">{activity.action}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History; 