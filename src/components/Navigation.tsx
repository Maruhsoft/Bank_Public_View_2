import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  key: string;
  label: string;
}

interface NavigationItem {
  key: string;
  label: string;
  dropdownItems?: DropdownItem[];
}

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems: NavigationItem[] = [
    {
      key: 'personalBanking',
      label: t('navigation.personalBanking'),
      dropdownItems: [
        { key: 'checkingAccounts', label: t('personalBanking.checkingAccounts') },
        { key: 'savingsAccounts', label: t('personalBanking.savingsAccounts') },
        { key: 'creditCards', label: t('personalBanking.creditCards') },
        { key: 'loansAndMortgages', label: t('personalBanking.loansAndMortgages') },
        { key: 'investmentServices', label: t('personalBanking.investmentServices') },
        { key: 'insurance', label: t('personalBanking.insurance') },
      ]
    },
    {
      key: 'businessBanking',
      label: t('navigation.businessBanking'),
      dropdownItems: [
        { key: 'businessChecking', label: t('businessBanking.businessChecking') },
        { key: 'businessLoans', label: t('businessBanking.businessLoans') },
        { key: 'merchantServices', label: t('businessBanking.merchantServices') },
        { key: 'payrollAndHR', label: t('businessBanking.payrollAndHR') },
        { key: 'commercialRealEstate', label: t('businessBanking.commercialRealEstate') },
      ]
    },
    {
      key: 'internationalBanking',
      label: t('navigation.internationalBanking'),
      dropdownItems: [
        { key: 'globalTransfers', label: t('internationalBanking.globalTransfers') },
        { key: 'foreignCurrencyAccounts', label: t('internationalBanking.foreignCurrencyAccounts') },
        { key: 'internationalInvestments', label: t('internationalBanking.internationalInvestments') },
        { key: 'offshoreBanking', label: t('internationalBanking.offshoreBanking') },
      ]
    },
    {
      key: 'digitalBanking',
      label: t('navigation.digitalBanking'),
      dropdownItems: [
        { key: 'mobileBanking', label: t('digitalBanking.mobileBanking') },
        { key: 'onlineBanking', label: t('digitalBanking.onlineBanking') },
        { key: 'billPay', label: t('digitalBanking.billPay') },
        { key: 'eStatements', label: t('digitalBanking.eStatements') },
        { key: 'securityTips', label: t('digitalBanking.securityTips') },
      ]
    },
    {
      key: 'wealthManagement',
      label: t('navigation.wealthManagement'),
      dropdownItems: [
        { key: 'portfolioAdvisory', label: t('wealthManagement.portfolioAdvisory') },
        { key: 'retirementPlanning', label: t('wealthManagement.retirementPlanning') },
        { key: 'privateBanking', label: t('wealthManagement.privateBanking') },
        { key: 'trustServices', label: t('wealthManagement.trustServices') },
      ]
    },
    {
      key: 'securityCenter',
      label: t('navigation.securityCenter'),
      dropdownItems: [
        { key: 'fraudProtection', label: t('securityCenter.fraudProtection') },
        { key: 'accountAlerts', label: t('securityCenter.accountAlerts') },
        { key: 'safeBankingTips', label: t('securityCenter.safeBankingTips') },
      ]
    },
    {
      key: 'aboutUs',
      label: t('navigation.aboutUs'),
      dropdownItems: [
        { key: 'ourHistory', label: t('aboutUs.ourHistory') },
        { key: 'leadership', label: t('aboutUs.leadership') },
        { key: 'careers', label: t('aboutUs.careers') },
        { key: 'newsroom', label: t('aboutUs.newsroom') },
      ]
    },
    {
      key: 'contactUs',
      label: t('navigation.contactUs'),
      dropdownItems: [
        { key: 'branchLocator', label: t('contactUs.branchLocator') },
        { key: 'customerService', label: t('contactUs.customerService') },
        { key: 'internationalOffices', label: t('contactUs.internationalOffices') },
        { key: 'feedback', label: t('contactUs.feedback') },
      ]
    },
  ];

  const handleMouseEnter = (key: string) => {
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden xl:flex items-center space-x-6 lg:space-x-8">
        <a 
          href="#" 
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
        >
          {t('navigation.home')}
        </a>
        
        {navigationItems.map((item) => (
          <div
            key={item.key}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(item.key)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2">
              <span>{item.label}</span>
              {item.dropdownItems && <ChevronDown className="w-4 h-4" />}
            </button>
            
            {item.dropdownItems && activeDropdown === item.key && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-[250px]">
                <div className="py-2">
                  {item.dropdownItems.map((dropdownItem) => (
                    <a
                      key={dropdownItem.key}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="xl:hidden">
          <div className="py-4 px-4">
            <a 
              href="#" 
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              {t('navigation.home')}
            </a>
            
            {navigationItems.map((item) => (
              <div key={item.key} className="border-t border-gray-100 pt-2 mt-2">
                <div className="font-medium text-gray-900 py-2">{item.label}</div>
                {item.dropdownItems && (
                  <div className="ml-4 space-y-1">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.key}
                        href="#"
                        className="block py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
    </nav>
  );
};

export default Navigation;