import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useSiteInfo } from '../hooks/useSiteInfo';

const CTASection: React.FC = () => {
  const { t } = useTranslation();
  const { siteInfo } = useSiteInfo();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      ref={ref}
      className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          className={`text-center transform transition-all duration-700 ease-out ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => siteInfo?.externalUrls.signup && handleExternalLink(siteInfo.externalUrls.signup)}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 transform hover:scale-105 group"
            >
              <span>{t('cta.primaryButton')}</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-blue-600 rounded-lg transition-all duration-200 transform hover:scale-105 group">
              <Calendar className="mr-2 w-5 h-5" />
              <span>{t('cta.secondaryButton')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;