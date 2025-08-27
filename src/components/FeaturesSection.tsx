import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Shield, TrendingUp, Smartphone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Clock,
      titleKey: 'features.feature1.title',
      descKey: 'features.feature1.description',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Shield,
      titleKey: 'features.feature2.title',
      descKey: 'features.feature2.description',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: TrendingUp,
      titleKey: 'features.feature3.title',
      descKey: 'features.feature3.description',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Smartphone,
      titleKey: 'features.feature4.title',
      descKey: 'features.feature4.description',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    }
  ];

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-12 transform transition-all duration-700 ease-out ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.titleKey}
                className={`text-center transform transition-all duration-700 ease-out ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(feature.titleKey)}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;