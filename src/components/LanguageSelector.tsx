import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: t('languages.en') },
    { code: 'zh-TW', name: t('languages.zh-TW') },
    { code: 'zh-CN', name: t('languages.zh-CN') },
    { code: 'es', name: t('languages.es') },
    { code: 'fr', name: t('languages.fr') },
    { code: 'de', name: t('languages.de') },
    { code: 'ja', name: t('languages.ja') },
    { code: 'ko', name: t('languages.ko') },
    { code: 'pt', name: t('languages.pt') },
    { code: 'it', name: t('languages.it') },
    { code: 'ar', name: t('languages.ar') },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
        aria-label="Select Language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px]">
          <div className="py-1" role="listbox">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                  i18n.language === language.code 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-700'
                }`}
                role="option"
                aria-selected={i18n.language === language.code}
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;