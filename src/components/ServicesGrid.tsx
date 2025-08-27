import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  CreditCard, 
  Building, 
  Globe, 
  Smartphone, 
  Shield, 
  TrendingUp,
  ArrowRight 
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const ServicesGrid: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: CreditCard,
      titleKey: 'homepage.personalBankingTitle',
      descKey: 'homepage.personalBankingDesc',
      gradient: 'from-blue-500 to-blue-600',
      hoverGradient: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      icon: Building,
      titleKey: 'homepage.businessBankingTitle',
      descKey: 'homepage.businessBankingDesc',
      gradient: 'from-indigo-500 to-indigo-600',
      hoverGradient: 'hover:from-indigo-600 hover:to-indigo-700'
    },
    {
      icon: Globe,
      titleKey: 'homepage.globalBankingTitle',
      descKey: 'homepage.globalBankingDesc',
      gradient: 'from-purple-500 to-purple-600',
      hoverGradient: 'hover:from-purple-600 hover:to-purple-700'
    },
    {
      icon: Smartphone,
      titleKey: 'homepage.digitalServicesTitle',
      descKey: 'homepage.digitalServicesDesc',
      gradient: 'from-teal-500 to-teal-600',
      hoverGradient: 'hover:from-teal-600 hover:to-teal-700'
    },
    {
      icon: Shield,
      titleKey: 'homepage.securityCenterTitle',
      descKey: 'homepage.securityCenterDesc',
      gradient: 'from-amber-500 to-amber-600',
      hoverGradient: 'hover:from-amber-600 hover:to-amber-700'
    },
    {
      icon: TrendingUp,
      titleKey: 'navigation.wealthManagement',
      descKey: 'wealthManagement.portfolioAdvisory',
      gradient: 'from-emerald-500 to-emerald-600',
      hoverGradient: 'hover:from-emerald-600 hover:to-emerald-700'
    }
  ];

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div 
          className={`text-center mb-12 transform transition-all duration-700 ease-out ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Banking Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Discover our full range of financial services designed to meet your personal and business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.titleKey}
                className={`group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="p-6 sm:p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} ${service.hoverGradient} flex items-center justify-center mb-6 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    {t(service.titleKey)}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                    {t(service.descKey)}
                  </p>
                  
                  <button className="inline-flex items-center text-sm sm:text-base text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 group">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;