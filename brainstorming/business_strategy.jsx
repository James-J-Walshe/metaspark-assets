import React, { useState } from 'react';
import { ChevronRight, Users, Lightbulb, DollarSign, Building, BookOpen, Zap } from 'lucide-react';

const BusinessEcosystem = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  const ecosystemNodes = {
    core: {
      id: 'core',
      title: 'Your Core Passion',
      subtitle: 'Collaborative Business Process Solutions',
      description: 'Utilities expertise + collaborative problem-solving + technical solutions',
      color: 'bg-blue-600',
      icon: <Zap className="w-6 h-6" />
    },
    consulting: {
      id: 'consulting',
      title: 'Specialized Consulting',
      subtitle: 'Immediate Revenue Stream',
      description: 'Independent consulting for utilities companies focusing on customer management & billing optimization',
      revenue: '$150-300/hr',
      timeframe: '0-3 months',
      color: 'bg-green-600',
      icon: <Building className="w-5 h-5" />,
      opportunities: [
        'Billing system migrations',
        'Customer experience optimization',
        'Process automation strategy',
        'Regulatory compliance projects'
      ]
    },
    training: {
      id: 'training',
      title: 'Training & Workshops',
      subtitle: 'Scale Your Knowledge',
      description: 'Corporate training programs on collaborative project management and business architecture',
      revenue: '$5-15K per workshop',
      timeframe: '3-6 months',
      color: 'bg-purple-600',
      icon: <Users className="w-5 h-5" />,
      opportunities: [
        'Utilities industry conferences',
        'Corporate PM training programs',
        'Business architecture masterclasses',
        'Cross-functional collaboration workshops'
      ]
    },
    digital: {
      id: 'digital',
      title: 'Digital Products',
      subtitle: 'Scalable Solutions',
      description: 'Templates, frameworks, and tools based on your proven methodologies',
      revenue: '$50-500 per product',
      timeframe: '6-12 months',
      color: 'bg-orange-600',
      icon: <BookOpen className="w-5 h-5" />,
      opportunities: [
        'Project management templates for utilities',
        'Billing process optimization toolkit',
        'Stakeholder collaboration frameworks',
        'Requirements gathering playbooks'
      ]
    },
    saas: {
      id: 'saas',
      title: 'SaaS Platform',
      subtitle: 'Long-term Vision',
      description: 'Collaborative project management platform designed specifically for utilities operations',
      revenue: '$50-500/month per client',
      timeframe: '12-24 months',
      color: 'bg-red-600',
      icon: <Lightbulb className="w-5 h-5" />,
      opportunities: [
        'Utilities-specific PM dashboard',
        'Stakeholder collaboration hub',
        'Process documentation platform',
        'Compliance tracking system'
      ]
    },
    community: {
      id: 'community',
      title: 'Professional Community',
      subtitle: 'Network & Influence',
      description: 'Build a community of utilities professionals focused on operational excellence',
      revenue: 'Indirect + $50-200/month memberships',
      timeframe: '6-18 months',
      color: 'bg-teal-600',
      icon: <Users className="w-5 h-5" />,
      opportunities: [
        'LinkedIn utilities PM group',
        'Monthly virtual meetups',
        'Best practices sharing forum',
        'Mentorship programs'
      ]
    }
  };

  const connections = [
    { from: 'core', to: 'consulting' },
    { from: 'core', to: 'training' },
    { from: 'consulting', to: 'digital' },
    { from: 'training', to: 'digital' },
    { from: 'digital', to: 'saas' },
    { from: 'training', to: 'community' },
    { from: 'community', to: 'saas' }
  ];

  const NodeCard = ({ node, position, isCore = false }) => (
    <div 
      className={`absolute cursor-pointer transition-all duration-300 ${
        hoveredNode === node.id || selectedNode === node.id ? 'scale-110 z-20' : 'z-10'
      }`}
      style={position}
      onMouseEnter={() => setHoveredNode(node.id)}
      onMouseLeave={() => setHoveredNode(null)}
      onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
    >
      <div className={`${node.color} text-white p-4 rounded-lg shadow-lg ${
        isCore ? 'w-56 h-32' : 'w-48 h-24'
      } flex flex-col justify-center items-center text-center`}>
        {node.icon}
        <h3 className={`font-bold ${isCore ? 'text-lg' : 'text-sm'} mt-2`}>{node.title}</h3>
        <p className={`text-xs opacity-90 ${isCore ? 'mt-1' : ''}`}>{node.subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full h-screen bg-gray-50 relative overflow-hidden">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {connections.map((conn, idx) => (
          <line
            key={idx}
            x1="50%"
            y1="50%"
            x2={conn.to === 'consulting' ? '20%' : conn.to === 'training' ? '80%' : conn.to === 'digital' ? '25%' : conn.to === 'saas' ? '75%' : '50%'}
            y2={conn.to === 'consulting' ? '25%' : conn.to === 'training' ? '25%' : conn.to === 'digital' ? '70%' : conn.to === 'saas' ? '70%' : '85%'}
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        ))}
      </svg>

      {/* Nodes */}
      <NodeCard 
        node={ecosystemNodes.core} 
        position={{ top: '45%', left: '42%', transform: 'translate(-50%, -50%)' }}
        isCore={true}
      />
      
      <NodeCard 
        node={ecosystemNodes.consulting} 
        position={{ top: '20%', left: '15%' }}
      />
      
      <NodeCard 
        node={ecosystemNodes.training} 
        position={{ top: '20%', left: '70%' }}
      />
      
      <NodeCard 
        node={ecosystemNodes.digital} 
        position={{ top: '70%', left: '20%' }}
      />
      
      <NodeCard 
        node={ecosystemNodes.saas} 
        position={{ top: '70%', left: '65%' }}
      />
      
      <NodeCard 
        node={ecosystemNodes.community} 
        position={{ bottom: '10%', left: '42%' }}
      />

      {/* Details Panel */}
      {selectedNode && (
        <div className="absolute right-4 top-4 w-80 bg-white rounded-lg shadow-xl p-6 z-30 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">{ecosystemNodes[selectedNode].title}</h2>
            <button 
              onClick={() => setSelectedNode(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          
          <p className="text-gray-600 mb-4">{ecosystemNodes[selectedNode].description}</p>
          
          {ecosystemNodes[selectedNode].revenue && (
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <DollarSign className="w-4 h-4 text-green-600 mr-2" />
                <span className="font-semibold">Revenue Potential:</span>
              </div>
              <p className="text-sm text-gray-600 ml-6">{ecosystemNodes[selectedNode].revenue}</p>
            </div>
          )}
          
          {ecosystemNodes[selectedNode].timeframe && (
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                <span className="font-semibold">Timeframe:</span>
              </div>
              <p className="text-sm text-gray-600 ml-6">{ecosystemNodes[selectedNode].timeframe}</p>
            </div>
          )}
          
          {ecosystemNodes[selectedNode].opportunities && (
            <div>
              <h3 className="font-semibold mb-2">Key Opportunities:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {ecosystemNodes[selectedNode].opportunities.map((opp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {opp}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm">
        <p className="text-sm text-gray-600">
          <strong>Click on any node</strong> to explore revenue opportunities and implementation details. 
          Each pathway builds on your utilities expertise and collaborative approach.
        </p>
      </div>
    </div>
  );
};

export default BusinessEcosystem;
