import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, ExternalLink, Menu } from 'lucide-react';
import { useSiteInfo } from '../hooks/useSiteInfo';
import Navigation from './Navigation';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { siteInfo } = useSiteInfo();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="#" className="flex items-center space-x-2 hover:opacity-75 transition-opacity duration-200">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              <div className="text-lg sm:text-xl font-bold text-gray-900 hidden xs:block">
                {siteInfo?.bankName || 'IBK 기업은행'}
              </div>
            </a>
          </div>

          {/* Navigation */}
          <div className="hidden xl:flex flex-1 justify-center">
            <Navigation />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            <div className="hidden sm:block">
              <LanguageSelector />
            </div>
            
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={() => siteInfo?.externalUrls.login && handleExternalLink(siteInfo.externalUrls.login)}
                className="px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 flex items-center space-x-1 whitespace-nowrap"
              >
                <span>{t('navigation.login')}</span>
                <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </button>
              
              <button
                onClick={() => siteInfo?.externalUrls.signup && handleExternalLink(siteInfo.externalUrls.signup)}
                className="px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 flex items-center space-x-1 whitespace-nowrap"
              >
                <span className="hidden sm:inline">{t('navigation.openAccount')}</span>
                <span className="sm:hidden">Open</span>
                <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <div className="sm:hidden">
                <LanguageSelector />
              </div>
              <Navigation />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;