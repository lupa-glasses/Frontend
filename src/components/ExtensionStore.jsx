import React from 'react';

const ExtensionStore = () => {
  // Placeholder extension data
  const extensions = [
    {
      id: 1,
      name: 'Data Analyzer',
      description: 'Advanced data analysis and visualization tools',
      icon: '📊',
      status: 'available'
    },
    {
      id: 2,
      name: 'PDF Processor',
      description: 'Extract and analyze content from PDF documents',
      icon: '📄',
      status: 'available'
    },
    {
      id: 3,
      name: 'Custom Reports',
      description: 'Generate customized reports and summaries',
      icon: '📈',
      status: 'coming_soon'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Extension Store</h1>
      
      {/* Featured Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 mb-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Develop Your Own Extensions</h2>
        <p className="mb-4">Create powerful extensions with our upcoming SDK</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50">
          Learn More
        </button>
      </div>

      {/* Extensions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extensions.map(extension => (
          <div key={extension.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">{extension.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{extension.name}</h3>
            <p className="text-gray-600 mb-4">{extension.description}</p>
            <button
              className={`w-full py-2 rounded-lg font-semibold ${
                extension.status === 'available'
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-100 text-gray-500 cursor-not-allowed'
              }`}
            >
              {extension.status === 'available' ? 'Install' : 'Coming Soon'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtensionStore; 