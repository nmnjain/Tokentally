import React from 'react';
import { 
  Zap, 
  Sparkles, 
  Shield, 
  Database, 
  MessageSquare, 
  PieChart 
} from 'lucide-react';

const features = [
  {
    icon: <Zap size={24} className="text-purple-500" />,
    title: 'Autonomous Subscription Management',
    description: ' Enable users and platforms to create and automate crypto-based subscriptions that renew and manage themselves through smart contracts without any central authority or intervention'
  },
  {
    icon: <Sparkles size={24} className="text-blue-500" />,
    title: ' On-Chain Data Registry',
    description: 'Track all subscription expiry dates, payment history, and access rights transparently on blockchain, ensuring both providers and subscribers have verifiable proof of status'
  },
  {
    icon: <Shield size={24} className="text-green-500" />,
    title: 'Multi-Token Payment Support',
    description: 'Accept subscription payments in various cryptocurrencies including USDC, ETH, MATIC and other popular tokens, allowing flexibility for both providers and subscribers'
  },
  {
    icon: <Database size={24} className="text-yellow-500" />,
    title: 'Creator Dashboard',
    description: 'Empower content creators, SaaS providers, and service platforms to create their own subscription products with customizable terms, pricing, and renewal conditions'
  },
  {
    icon: <MessageSquare size={24} className="text-pink-500" />,
    title: 'Webhooks & API Integration',
    description: 'Easily connect existing Web2 platforms through comprehensive APIs and webhooks, enabling traditional services to offer crypto subscription options without rebuilding'
  },
  {
    icon: <PieChart size={24} className="text-indigo-500" />,
    title: 'Optional NFT-Based Access',
    description: 'Utilize NFTs as subscription access tokens that represent membership status, enabling transferable subscriptions and secondary markets for premium memberships'
  }
];

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:-translate-y-1">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 mb-5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-10">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Revolutionize Digital Subscriptions
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Tokentally provides the decentralized infrastructure for creating, managing, and automating crypto-based subscriptions. 
             
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;