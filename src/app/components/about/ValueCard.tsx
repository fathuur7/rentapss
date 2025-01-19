import React from 'react';
import { Shield, Users, Target, Lightbulb, Heart, Clock } from 'lucide-react';

const ValueCard = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize the security and confidentiality of our users, ensuring a safe environment for all interactions.",
      color: "text-blue-500",
      bgColor: "bg-blue-50/10"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building and nurturing a supportive community where everyone feels welcomed and valued.",
      color: "text-purple-500",
      bgColor: "bg-purple-50/10"
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on achieving measurable results and helping our users reach their objectives efficiently.",
      color: "text-red-500",
      bgColor: "bg-red-50/10"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously evolving and implementing new ideas to provide better solutions for our users.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50/10"
    },
    {
      icon: Heart,
      title: "Passion & Dedication",
      description: "Committed to delivering excellence through our passionate and dedicated approach to every project.",
      color: "text-pink-500",
      bgColor: "bg-pink-50/10"
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Consistently delivering on our promises and maintaining high standards of service quality.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50/10"
    }
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-400 text-lg">
            These principles guide our actions and define who we are as a company
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl border border-gray-800 bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300"
            >
              {/* Icon Background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl ${value.bgColor}`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl ${value.bgColor} ${value.color} mb-4`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gray-700 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueCard;